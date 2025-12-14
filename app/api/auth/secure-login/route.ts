import { NextRequest, NextResponse } from 'next/server';
import { loginUser } from '@/lib/auth-db';
import { getPool } from '@/lib/db';
import { generateTokens, generateSessionId, generateCSRFToken } from '@/lib/jwt-security';
import { loginLimiter, getClientIP } from '@/lib/rate-limiter';
import { SecurityValidator } from '@/lib/validation';
import { securityLogger, SecurityEventType } from '@/lib/security-logger';

export async function POST(request: NextRequest) {
  const ip = getClientIP(request);
  const userAgent = request.headers.get('user-agent') || 'Unknown';
  
  try {
    // 1. Rate limiting check
    const rateLimitResult = loginLimiter.recordAttempt(ip);
    if (!rateLimitResult.allowed) {
      await securityLogger.logRateLimitExceeded(ip, userAgent, '/api/auth/login', 0);
      
      return NextResponse.json({
        success: false,
        message: `Juda ko'p harakat. Keyinroq qaytadan urinib ko'ring.`,
        rateLimited: true
      }, { status: 429 });
    }

    const body = await request.json();
    const { email, password } = body;

    // 2. Input validation & sanitization
    const validation = SecurityValidator.validateLoginData(email, password);
    if (!validation.isValid) {
      await securityLogger.logSuspiciousActivity(ip, userAgent, 'Invalid input format', {
        errors: validation.errors,
        email: email
      });

      return NextResponse.json({
        success: false,
        message: 'Ma\'lumotlar noto\'g\'ri: ' + validation.errors.join(', ')
      }, { status: 400 });
    }

    const sanitizedEmail = validation.sanitizedData?.email || email;
    const sanitizedPassword = validation.sanitizedData?.password || password;

    // 3. Attempt login
    const result = await loginUser(sanitizedEmail, sanitizedPassword);
    
    if (!result.success || !result.user) {
      // Log failed login
      await securityLogger.logLoginFailed(sanitizedEmail, ip, userAgent, result.message || 'Invalid credentials');
      
      return NextResponse.json({
        success: false,
        message: 'Email yoki parol noto\'g\'ri!'
      }, { status: 401 });
    }

    // 4. Generate secure session
    const sessionId = generateSessionId();
    const deviceFingerprint = request.headers.get('x-device-fingerprint') || '';
    const deviceName = request.headers.get('x-device-name') || 'Unknown Device';
    
    // 5. Generate JWT tokens
    const tokens = generateTokens({
      userId: result.user.id,
      email: result.user.email,
      role: result.user.role,
      deviceFingerprint,
      sessionId
    });

    // 6. Generate CSRF token
    const csrfToken = generateCSRFToken();

    // 7. Device management with single device enforcement
    try {
      const pool = getPool();
      
      // Remove all other active sessions for this user (single device policy)
      await pool.execute(
        'UPDATE user_devices SET is_active = FALSE WHERE user_id = ? AND device_fingerprint != ?',
        [result.user.id, deviceFingerprint]
      );
      
      // Add/update current device
      await pool.execute(
        `INSERT INTO user_devices (user_id, device_name, device_fingerprint, user_agent, ip_address, is_active, session_id) 
         VALUES (?, ?, ?, ?, ?, TRUE, ?) 
         ON DUPLICATE KEY UPDATE 
         is_active = TRUE, 
         last_login = NOW(),
         session_id = VALUES(session_id),
         user_agent = VALUES(user_agent),
         ip_address = VALUES(ip_address)`,
        [result.user.id, deviceName, deviceFingerprint, userAgent, ip, sessionId]
      );
      
    } catch (deviceError) {
      console.error('Device management error:', deviceError);
    }

    // 8. Set secure cookies
    const response = NextResponse.json({
      success: true,
      message: 'Muvaffaqiyatli kirdingiz!',
      user: {
        id: result.user.id,
        name: result.user.name,
        email: result.user.email,
        role: result.user.role
      }
    });

    // Secure cookie options
    const secureCookieOptions = {
      httpOnly: true,  // XSS himoyasi
      secure: process.env.NODE_ENV === 'production', // HTTPS'da true
      sameSite: 'strict' as const, // CSRF himoyasi
      maxAge: 15 * 60, // 15 minutes for access token
      path: '/'
    };

    const refreshCookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict' as const,
      maxAge: 7 * 24 * 60 * 60, // 7 days for refresh token
      path: '/'
    };

    // Set JWT tokens as HttpOnly cookies
    response.cookies.set('access_token', tokens.accessToken, secureCookieOptions);
    response.cookies.set('refresh_token', tokens.refreshToken, refreshCookieOptions);
    response.cookies.set('csrf_token', csrfToken, {
      httpOnly: false, // Client needs to read this
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict' as const,
      maxAge: 15 * 60,
      path: '/'
    });

    // Legacy cookies for compatibility (will be removed later)
    response.cookies.set('auth_token', 'authenticated', {
      httpOnly: false,
      secure: false,
      sameSite: 'lax' as const,
      maxAge: 60 * 60 * 24 * 7,
      path: '/'
    });

    if (result.user.role === 'admin') {
      response.cookies.set('is_admin', 'true', {
        httpOnly: false,
        secure: false,
        sameSite: 'lax' as const,
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
      });
    }

    // 9. Log successful login
    await securityLogger.logLoginSuccess(
      result.user.id,
      result.user.email,
      ip,
      userAgent,
      { deviceName, deviceFingerprint }
    );

    console.log(`✅ Secure login successful: ${result.user.email} from ${ip}`);
    
    return response;
    
  } catch (error) {
    console.error('Secure login API error:', error);
    
    await securityLogger.logSuspiciousActivity(ip, userAgent, 'Login API error', {
      error: error instanceof Error ? error.message : 'Unknown error'
    });
    
    return NextResponse.json(
      { success: false, message: 'Server xatosi yuz berdi.' },
      { status: 500 }
    );
  }
}