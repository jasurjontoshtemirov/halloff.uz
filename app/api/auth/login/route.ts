import { NextRequest, NextResponse } from 'next/server';
import { loginUser } from '@/lib/auth-db';
import { getPool } from '@/lib/db';
import { generateToken } from '@/lib/jwt';

export async function POST(request: NextRequest) {
  try {
    // Request body ni olish
    const body = await request.text();
    console.log('Raw request body:', body);
    
    if (!body) {
      return NextResponse.json(
        { success: false, message: 'Ma\'lumot yuborilmagan!' },
        { status: 400 }
      );
    }

    let parsedBody;
    try {
      parsedBody = JSON.parse(body);
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return NextResponse.json(
        { success: false, message: 'Noto\'g\'ri ma\'lumot formati!' },
        { status: 400 }
      );
    }

    const { email, password } = parsedBody;
    console.log('Parsed data:', { email: email ? 'exists' : 'missing', password: password ? 'exists' : 'missing' });

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email va parolni kiriting!' },
        { status: 400 }
      );
    }

    const result = await loginUser(email, password);
    console.log('Login result:', { success: result.success, message: result.message });
    
    if (result.success && result.user) {
      // Qurilma ma'lumotlarini olish
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
      
      // Qurilma ma'lumotlarini saqlash (login da access key so'ralmasin)
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

      // JWT token yaratish
      const token = generateToken({
        userId: result.user.id,
        email: result.user.email,
        role: result.user.role
      });
      
      console.log('Generated JWT token for user:', result.user.email);
      console.log('Token length:', token.length);
      
      // Multiple cookie setting approaches
      const cookieOptions = {
        httpOnly: false,
        secure: false, // HTTP uchun false
        sameSite: 'lax' as const,
        maxAge: 60 * 60 * 24 * 7, // 7 kun
        path: '/'
      };
      
      // Approach 1: NextResponse with Set-Cookie header
      const setCookieHeaders = [
        `auth_token=${token}; Path=/; Max-Age=604800; SameSite=Lax`,
      ];
      
      if (result.user.role === 'admin') {
        setCookieHeaders.push(`is_admin=true; Path=/; Max-Age=604800; SameSite=Lax`);
      }
      
      const response = new NextResponse(JSON.stringify(result), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': setCookieHeaders
        }
      });
      
      console.log('Set-Cookie headers:', setCookieHeaders);
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