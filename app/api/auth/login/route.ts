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

      const pool = getPool();
      
      // Qurilmani tekshirish
      const [deviceRows] = await pool.execute(
        'SELECT id FROM user_devices WHERE user_id = ? AND device_fingerprint = ?',
        [result.user.id, deviceFingerprint]
      );
      
      // Qurilma ma'lumotlarini saqlash
      if ((deviceRows as any[]).length === 0) {
        // Yangi qurilma - foydalanuvchining qurilmalari sonini tekshirish
        const [userDevicesCount] = await pool.execute(
          'SELECT COUNT(*) as count FROM user_devices WHERE user_id = ? AND is_active = TRUE',
          [result.user.id]
        );
        
        const deviceCount = (userDevicesCount as any[])[0].count;
        
        if (deviceCount >= 2) {
          return NextResponse.json({
            success: false,
            message: 'Maksimal 2 ta qurilmada kirish mumkin. Avval boshqa qurilmani chiqaring.',
            needDeviceManagement: true
          }, { status: 403 });
        }
        
        // Yangi qurilmani qo'shish
        await pool.execute(
          'INSERT INTO user_devices (user_id, device_name, device_fingerprint, user_agent, ip_address) VALUES (?, ?, ?, ?, ?)',
          [result.user.id, deviceName, deviceFingerprint, userAgent, ipAddress]
        );
      } else {
        // Mavjud qurilmani yangilash
        await pool.execute(
          'UPDATE user_devices SET last_login = NOW(), user_agent = ?, ip_address = ? WHERE user_id = ? AND device_fingerprint = ?',
          [userAgent, ipAddress, result.user.id, deviceFingerprint]
        );
      }
      // Oddiy cookie o'rnatish
      const response = NextResponse.json(result);
      
      // Auth cookie
      response.cookies.set('auth_token', 'authenticated', {
        httpOnly: false,
        secure: false,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 kun
        path: '/'
      });
      
      // Admin cookie
      if (result.user.role === 'admin') {
        response.cookies.set('is_admin', 'true', {
          httpOnly: false,
          secure: false,
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