import { NextRequest, NextResponse } from 'next/server';
import { loginUser } from '@/lib/auth-db';
import { getPool } from '@/lib/db';
import { securityLogger } from '@/lib/security-logger';
import { SecurityValidator } from '@/lib/validation';
import { loginLimiter, getClientIP } from '@/lib/rate-limiter';
import { telegramService } from '@/lib/telegram';
import { signToken } from '@/lib/token';
import { csrfProtection } from '@/lib/csrf-middleware';


export async function POST(request: NextRequest) {
  const ip = getClientIP(request);
  const userAgent = request.headers.get('user-agent') || 'Unknown';

  try {
    // 1. Rate limiting check (Enhanced with combined fingerprint)
    const fingerprint = `${ip}|${userAgent}`;
    const rateLimitResult = loginLimiter.recordAttempt(fingerprint);
    if (!rateLimitResult.allowed) {
      await securityLogger.logRateLimitExceeded(ip, userAgent, '/api/auth/login', 0);

      return NextResponse.json({
        success: false,
        message: `Juda ko'p harakat. Keyinroq qaytadan urinib ko'ring.`,
        rateLimited: true
      }, { status: 429 });
    }


    // 2. CSRF Protection
    // await csrfProtection(request); // Temporarily disabled for debugging

    const body = await request.json();
    const { phone } = body;

    // 2. Input validation
    if (!phone) {
      return NextResponse.json({
        success: false,
        message: 'Telefon raqam kiritilishi shart'
      }, { status: 400 });
    }

    // Phone validation
    const phoneRegex = /^\+998[0-9]{9}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json({
        success: false,
        message: 'Telefon raqam formati noto\'g\'ri'
      }, { status: 400 });
    }

    const result = await loginUser(phone);

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

      // Auth cookie
      const token = await signToken({ userId: result.user.id, role: result.user.role });

      const cookieOptions = {
        httpOnly: true,
        secure: false, // Temporarily disabled for debugging persistence
        sameSite: 'lax' as const,
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/'
      };

      response.cookies.set('auth_token', token, cookieOptions);


      return response;
    }

    return NextResponse.json(result, {
      status: result.success ? 200 : 401
    });
  } catch (error: any) {
    console.error('Login API error:', error);

    // Handle CSRF Error
    if (error.message === 'CSRF Validation Failed') {
      return NextResponse.json(
        { success: false, message: 'Xavfsizlik xatoligi: Sahifani yangilang va qaytadan urinib ko\'ring.' },
        { status: 403 }
      );
    }

    // Handle specific auth database errors (e.g. JWT_SECRET missing)
    if (error.message && error.message.includes('JWT_SECRET')) {
      return NextResponse.json(
        { success: false, message: 'Server konfiguratsiya xatosi (Missing Secret).' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Server xatosi yuz berdi.' },
      { status: 500 }
    );
  }
}