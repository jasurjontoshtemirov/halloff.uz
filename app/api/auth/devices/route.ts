import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email talab qilinadi!' },
        { status: 400 }
      );
    }

    const pool = getPool();
    
    // Foydalanuvchi ID sini olish
    const [userRows] = await pool.execute(
      'SELECT id FROM users WHERE email = ?',
      [email]
    );
    
    const users = userRows as any[];
    if (users.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Foydalanuvchi topilmadi!' },
        { status: 404 }
      );
    }

    // Foydalanuvchining qurilmalarini olish
    const [deviceRows] = await pool.execute(
      'SELECT id, device_name, last_login, created_at FROM user_devices WHERE user_id = ? AND is_active = TRUE ORDER BY last_login DESC',
      [users[0].id]
    );

    return NextResponse.json({
      success: true,
      devices: deviceRows
    });
  } catch (error) {
    console.error('Get devices error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi yuz berdi.' },
      { status: 500 }
    );
  }
}