import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email kiritilmagan!' },
        { status: 400 }
      );
    }

    const pool = getPool();
    
    // Foydalanuvchini topish
    const [users] = await pool.execute(
      'SELECT id FROM users WHERE email = ?',
      [email]
    );
    
    const userRows = users as any[];
    if (userRows.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Foydalanuvchi topilmadi!' },
        { status: 404 }
      );
    }
    
    const userId = userRows[0].id;
    
    // Foydalanuvchining qurilmalarini olish
    const [devices] = await pool.execute(
      'SELECT id, device_name, last_login FROM user_devices WHERE user_id = ? AND is_active = TRUE ORDER BY last_login DESC',
      [userId]
    );
    
    return NextResponse.json({
      success: true,
      devices: devices
    });
  } catch (error) {
    console.error('Get devices error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi yuz berdi.' },
      { status: 500 }
    );
  }
}