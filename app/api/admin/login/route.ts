import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { logAuditEvent } from "../../../lib/security-audit";

// Security configuration
const SECURITY_CONFIG = {
  maxLoginAttempts: 5,
  lockoutDuration: 30 * 60 * 1000, // 30 minutes
  sessionDuration: 2 * 60 * 60 * 1000, // 2 hours
  jwtSecret: process.env.JWT_SECRET || 'fallback-secret-change-in-production',
};

// In-memory storage (use Redis in production)
const loginAttempts = new Map<string, { count: number; lockUntil: number }>();
const activeSessions = new Map<string, { userId: string; createdAt: number; lastActivity: number }>();

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);
    const userAgent = request.headers.get('user-agent') || '';
    
    // Security logging
    console.log(`[ADMIN_LOGIN] Attempt from IP: ${clientIP}, UA: ${userAgent.substring(0, 100)}`);
    
    // Check if IP is locked out
    if (isIPLockedOut(clientIP)) {
      console.warn(`[SECURITY] Blocked login attempt from locked IP: ${clientIP}`);
      return NextResponse.json({
        success: false,
        message: "Too many failed attempts. Please try again later.",
        lockoutTime: getRemainingLockoutTime(clientIP)
      }, { status: 429 });
    }

    const { phone, password } = await request.json();

    // Input validation
    if (!phone || !password) {
      recordFailedAttempt(clientIP);
      return NextResponse.json({
        success: false,
        message: "Telefon raqam va parol kiritilishi shart!"
      }, { status: 400 });
    }

    // Validate phone format
    if (!isValidPhoneFormat(phone)) {
      recordFailedAttempt(clientIP);
      return NextResponse.json({
        success: false,
        message: "Telefon raqam formati noto'g'ri!"
      }, { status: 400 });
    }

    // Admin credentials from environment
    const ADMIN_PHONE = process.env.ADMIN_PHONE || "+998990022701";
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "@Qwer1234";

    // Secure password comparison
    const isValidPhone = secureCompare(phone, ADMIN_PHONE);
    const isValidPassword = secureCompare(password, ADMIN_PASSWORD);

    if (isValidPhone && isValidPassword) {
      // Clear failed attempts on successful login
      loginAttempts.delete(clientIP);
      
      // Generate secure session
      const sessionId = generateSecureSessionId();
      const sessionToken = generateJWTToken({
        sessionId,
        phone: ADMIN_PHONE,
        role: 'admin',
        ip: clientIP,
        userAgent: userAgent.substring(0, 200)
      });

      // Store session
      activeSessions.set(sessionId, {
        userId: ADMIN_PHONE,
        createdAt: Date.now(),
        lastActivity: Date.now()
      });

      // Security logging
      console.log(`[ADMIN_LOGIN] Successful login for ${ADMIN_PHONE} from IP: ${clientIP}`);
      
      // Audit logging
      logAuditEvent(
        ADMIN_PHONE,
        clientIP,
        'ADMIN_LOGIN_SUCCESS',
        '/api/admin/login',
        {
          userAgent: userAgent.substring(0, 100),
          sessionId,
          timestamp: new Date().toISOString()
        },
        true,
        userAgent
      );

      const response = NextResponse.json({
        success: true,
        message: "Muvaffaqiyatli kirish",
        admin: {
          phone: ADMIN_PHONE,
          role: "admin",
          sessionId
        }
      });

      // Set secure HTTP-only cookie
      response.cookies.set('adminAuth', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: SECURITY_CONFIG.sessionDuration / 1000,
        path: '/admin'
      });

      // Set CSRF token
      const csrfToken = generateCSRFToken();
      response.cookies.set('csrfToken', csrfToken, {
        httpOnly: false, // Accessible to JavaScript for CSRF protection
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: SECURITY_CONFIG.sessionDuration / 1000,
        path: '/admin'
      });

      return response;
    } else {
      // Record failed attempt
      recordFailedAttempt(clientIP);
      
      // Security logging
      console.warn(`[SECURITY] Failed login attempt for ${phone} from IP: ${clientIP}`);
      
      // Audit logging
      logAuditEvent(
        phone,
        clientIP,
        'ADMIN_LOGIN_FAILED',
        '/api/admin/login',
        {
          userAgent: userAgent.substring(0, 100),
          reason: 'Invalid credentials',
          attemptsRemaining: getRemainingAttempts(clientIP)
        },
        false,
        userAgent
      );
      
      // Generic error message to prevent user enumeration
      return NextResponse.json({
        success: false,
        message: "Telefon raqam yoki parol noto'g'ri!",
        attemptsRemaining: getRemainingAttempts(clientIP)
      }, { status: 401 });
    }

  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json({
      success: false,
      message: "Server xatosi"
    }, { status: 500 });
  }
}

// Security helper functions
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfIP = request.headers.get('cf-connecting-ip');
  
  return cfIP || realIP || forwarded?.split(',')[0] || 'unknown';
}

function isIPLockedOut(ip: string): boolean {
  const attempts = loginAttempts.get(ip);
  if (!attempts) return false;
  
  return attempts.count >= SECURITY_CONFIG.maxLoginAttempts && 
         Date.now() < attempts.lockUntil;
}

function recordFailedAttempt(ip: string): void {
  const attempts = loginAttempts.get(ip) || { count: 0, lockUntil: 0 };
  attempts.count++;
  
  if (attempts.count >= SECURITY_CONFIG.maxLoginAttempts) {
    attempts.lockUntil = Date.now() + SECURITY_CONFIG.lockoutDuration;
  }
  
  loginAttempts.set(ip, attempts);
}

function getRemainingAttempts(ip: string): number {
  const attempts = loginAttempts.get(ip);
  if (!attempts) return SECURITY_CONFIG.maxLoginAttempts;
  
  return Math.max(0, SECURITY_CONFIG.maxLoginAttempts - attempts.count);
}

function getRemainingLockoutTime(ip: string): number {
  const attempts = loginAttempts.get(ip);
  if (!attempts) return 0;
  
  return Math.max(0, attempts.lockUntil - Date.now());
}

function isValidPhoneFormat(phone: string): boolean {
  // Uzbekistan phone number format validation
  const phoneRegex = /^\+998[0-9]{9}$/;
  return phoneRegex.test(phone);
}

function secureCompare(a: string, b: string): boolean {
  // Timing-safe string comparison to prevent timing attacks
  if (a.length !== b.length) return false;
  
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  
  return result === 0;
}

function generateSecureSessionId(): string {
  return crypto.randomBytes(32).toString('hex');
}

function generateJWTToken(payload: any): string {
  return jwt.sign(payload, SECURITY_CONFIG.jwtSecret, {
    expiresIn: '2h',
    issuer: 'halloff.uz',
    audience: 'admin'
  });
}

function generateCSRFToken(): string {
  return crypto.randomBytes(32).toString('base64');
}