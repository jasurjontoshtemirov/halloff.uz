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
      // Device management
      const deviceFingerprint = request.headers.get('x-device-fingerprint') || '';
      const deviceName = request.headers.get('x-device-name') || 'Unknown Device';
      const userAgent = request.headers.get('user-agent') || '';
      const ipAddress = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '';

      console.log('Device info for user:', result.user.email);
      console.log('Device fingerprint:', deviceFingerprint);
      console.log('Device name:', deviceName);

      const pool = getPool();
      
      // Foydalanuvchining aktiv qurilmalari sonini tekshirish
      const [userDevicesCount] = await pool.execute(
        'SELECT COUNT(*) as count FROM user_devices WHERE user_id = ? AND is_active = TRUE',
        [result.user.id]
      );
      
      const deviceCount = (userDevicesCount as any[])[0].count;
      
      // Qurilmani tekshirish
      const [deviceRows] = await pool.execute(
        'SELECT id FROM user_devices WHERE user_id = ? AND device_fingerprint = ? AND is_active = TRUE',
        [result.user.id, deviceFingerprint]
      );
      
      // Agar bu yangi qurilma bo'lsa va 1 tadan ko'p aktiv qurilma bo'lsa
      if ((deviceRows as any[]).length === 0 && deviceCount >= 1) {
        // Barcha eski qurilmalarni nofaol qilish (faqat 1 ta aktiv bo'lishi kerak)
        await pool.execute(
          'UPDATE user_devices SET is_active = FALSE WHERE user_id = ?',
          [result.user.id]
        );
        
        // Yangi qurilmani aktiv qilish
        await pool.execute(
          'INSERT INTO user_devices (user_id, device_name, device_fingerprint, user_agent, ip_address, is_active) VALUES (?, ?, ?, ?, ?, TRUE)',
          [result.user.id, deviceName, deviceFingerprint, userAgent, ipAddress]
        );
        
        console.log(`Eski qurilmalar o'chirildi, yangi qurilma qo'shildi: ${deviceName}`);
      } else if ((deviceRows as any[]).length === 0) {
        // Birinchi qurilma
        await pool.execute(
          'INSERT INTO user_devices (user_id, device_name, device_fingerprint, user_agent, ip_address, is_active) VALUES (?, ?, ?, ?, ?, TRUE)',
          [result.user.id, deviceName, deviceFingerprint, userAgent, ipAddress]
        );
        
        console.log(`Yangi qurilma qo'shildi: ${deviceName}`);
      } else {
        // Mavjud qurilmani yangilash
        await pool.execute(
          'UPDATE user_devices SET last_login = NOW(), user_agent = ?, ip_address = ?, is_active = TRUE WHERE user_id = ? AND device_fingerprint = ?',
          [userAgent, ipAddress, result.user.id, deviceFingerprint]
        );
        
        console.log(`Mavjud qurilma yangilandi: ${deviceName}`);
      }
      // Oddiy cookie o'rnatish
      const response = NextResponse.json(result);
      
      // Auth cookie
      response.cookies.set('auth_token', 'authenticated', {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 kun
        path: '/'
      });
      
      // User ID cookie
      response.cookies.set('user_id', result.user.id.toString(), {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
      });
      
      // Admin cookie
      if (result.user.role === 'admin') {
        response.cookies.set('is_admin', 'true', {
          httpOnly: false,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 60 * 60 * 24 * 7,
          path: '/'
        });
      }
      
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