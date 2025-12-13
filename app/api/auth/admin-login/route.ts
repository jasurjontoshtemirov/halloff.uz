import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email va parolni kiriting!' },
        { status: 400 }
      );
    }

    const pool = getPool();
    
    // Admin foydalanuvchini topish
    const [users] = await pool.execute(
      'SELECT id, name, email, password, role, created_at FROM users WHERE email = ? AND role = ?',
      [email, 'admin']
    );
    
    const userRows = users as any[];
    if (userRows.length === 0) {
      return NextResponse.json({ 
        success: false, 
        message: 'Admin hisobi topilmadi!' 
      });
    }
    
    const user = userRows[0];
    
    // Parolni tekshirish
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ 
        success: false, 
        message: 'Email yoki parol noto\'g\'ri!' 
      });
    }

    // Admin uchun device management (ixtiyoriy)
    const deviceFingerprint = request.headers.get('x-device-fingerprint') || '';
    const deviceName = request.headers.get('x-device-name') || 'Admin Device';
    const userAgent = request.headers.get('user-agent') || '';
    const ipAddress = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '';

    // Admin device'ni saqlash/yangilash
    if (deviceFingerprint) {
      try {
        await pool.execute(
          `INSERT INTO user_devices (user_id, device_name, device_fingerprint, user_agent, ip_address, is_active) 
           VALUES (?, ?, ?, ?, ?, TRUE) 
           ON DUPLICATE KEY UPDATE 
           is_active = TRUE, 
           last_login = NOW(),
           device_name = VALUES(device_name),
           user_agent = VALUES(user_agent),
           ip_address = VALUES(ip_address)`,
          [user.id, deviceName, deviceFingerprint, userAgent, ipAddress]
        );
      } catch (deviceError) {
        console.error('Admin device save error:', deviceError);
        // Device xatosi bo'lsa ham login'ga ruxsat berish
      }
    }

    // Response yaratish
    const userResponse = {
      id: user.id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.created_at,
    };

    const response = NextResponse.json({
      success: true,
      message: 'Admin muvaffaqiyatli kirdi!',
      user: userResponse
    });
    
    // Admin cookies o'rnatish
    response.cookies.set('auth_token', 'authenticated', {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 kun
      path: '/'
    });
    
    response.cookies.set('is_admin', 'true', {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/'
    });

    response.cookies.set('user_id', user.id.toString(), {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/'
    });
    
    console.log('Admin login successful:', user.email);
    return response;
    
  } catch (error) {
    console.error('Admin login API error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi yuz berdi.' },
      { status: 500 }
    );
  }
}