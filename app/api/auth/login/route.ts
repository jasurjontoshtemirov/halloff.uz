import { NextRequest, NextResponse } from 'next/server';
import { loginUser } from '@/lib/auth-db';
import { getPool } from '@/lib/db';
import { securityLogger } from '@/lib/security-logger';
import { SecurityValidator } from '@/lib/validation';
import { loginLimiter, getClientIP } from '@/lib/rate-limiter';
import { telegramService } from '@/lib/telegram';

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

    // 2. Input validation
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

    // Use sanitized data for login
    const sanitizedEmail = validation.sanitizedData?.email || email;
    const sanitizedPassword = validation.sanitizedData?.password || password;

    const result = await loginUser(sanitizedEmail, sanitizedPassword);
    
    if (result.success && result.user) {
      // Telegram notification for successful login
      await telegramService.sendUserActivity({
        action: 'LOGIN SUCCESS',
        user: result.user.email,
        details: `Role: ${result.user.role}`,
        ip: ip
      });

      // Device management (vaqtincha o'chirilgan - keyinroq yoqiladi)
      try {
        const deviceFingerprint = request.headers.get('x-device-fingerprint') || '';
        const deviceName = request.headers.get('x-device-name') || 'Unknown Device';
        const userAgent = request.headers.get('user-agent') || '';
        const ipAddress = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '';

        // Device management faqat agar database mavjud bo'lsa
        const pool = getPool();
        
        // Simple device logging (xatolik bo'lsa ham login'ga ruxsat berish)
        await pool.execute(
          `INSERT INTO user_devices (user_id, device_name, device_fingerprint, user_agent, ip_address, is_active) 
           VALUES (?, ?, ?, ?, ?, TRUE) 
           ON DUPLICATE KEY UPDATE 
           is_active = TRUE, 
           last_login = NOW(),
           device_name = VALUES(device_name),
           user_agent = VALUES(user_agent),
           ip_address = VALUES(ip_address)`,
          [result.user.id, deviceName, deviceFingerprint, userAgent, ipAddress]
        );
      } catch (deviceError) {
        // Device management xatosi - login'ga ruxsat berish davom etadi
      }

      const response = NextResponse.json(result);
      
      // Cookie sozlamalari (xavfsiz)
      const cookieOptions = {
        httpOnly: false, // Client-side access uchun
        secure: false, // Vaqtincha false - cookie muammosini hal qilish uchun
        sameSite: 'lax' as const,
        maxAge: 60 * 60 * 24 * 7, // 7 kun
        path: '/'
        // domain o'chirildi - muammo keltirayapti
      };

      // Auth cookie
      response.cookies.set('auth_token', 'authenticated', cookieOptions);
      
      // User ID cookie
      response.cookies.set('user_id', result.user.id.toString(), cookieOptions);
      
      // Admin cookie
      if (result.user.role === 'admin') {
        response.cookies.set('is_admin', 'true', cookieOptions);
      }
      return response;
    }
    
    return NextResponse.json(result, { 
      status: result.success ? 200 : 401 
    });
  } catch (error) {
    console.error('Login API error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi yuz berdi.' },
      { status: 500 }
    );
  }
}