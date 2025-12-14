import { NextRequest, NextResponse } from 'next/server';
import { loginUser } from '@/lib/auth-db';
import { getPool } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email va parolni kiriting!' },
        { status: 400 }
      );
    }

    const result = await loginUser(email, password);
    
    if (result.success && result.user) {
      // Device management (vaqtincha o'chirilgan - keyinroq yoqiladi)
      try {
        const deviceFingerprint = request.headers.get('x-device-fingerprint') || '';
        const deviceName = request.headers.get('x-device-name') || 'Unknown Device';
        const userAgent = request.headers.get('user-agent') || '';
        const ipAddress = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '';

        console.log('Device info for user:', result.user.email);
        
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
        
        console.log(`Device logged: ${deviceName}`);
      } catch (deviceError) {
        console.error('Device management error (ignored):', deviceError);
        // Device xatosi bo'lsa ham login'ga ruxsat berish
      }
      // Oddiy cookie o'rnatish
      const response = NextResponse.json(result);
      
      // Cookie sozlamalari (xavfsiz)
      const isProduction = process.env.NODE_ENV === 'production';
      const cookieOptions = {
        httpOnly: false, // Client-side access uchun
        secure: isProduction, // HTTPS'da true
        sameSite: 'lax' as const,
        maxAge: 60 * 60 * 24 * 7, // 7 kun
        path: '/',
        // Domain muammosini hal qilish
        domain: undefined // Auto-detect, subdomain muammolarini oldini olish
      };

      console.log('Setting cookies with options:', cookieOptions);

      // Auth cookie
      response.cookies.set('auth_token', 'authenticated', cookieOptions);
      
      // User ID cookie
      response.cookies.set('user_id', result.user.id.toString(), cookieOptions);
      
      // Admin cookie
      if (result.user.role === 'admin') {
        response.cookies.set('is_admin', 'true', cookieOptions);
        console.log('Admin cookie set for:', result.user.email);
      }
      
      console.log('All cookies set for user:', result.user.email, 'Role:', result.user.role);
      
      console.log('Cookies set for user:', result.user.email);
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