import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    
    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email kerak' },
        { status: 400 }
      );
    }
    
    const pool = getPool();
    
    // Foydalanuvchini topish
    const [users]: any = await pool.execute(
      'SELECT id FROM users WHERE email = ?',
      [email]
    );
    
    if (users.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Foydalanuvchi topilmadi' },
        { status: 404 }
      );
    }
    
    const userId = users[0].id;
    
    // Foydalanuvchining aktiv qurilmalarini olish
    const [devices]: any = await pool.execute(
      'SELECT * FROM user_devices WHERE user_id = ? AND is_active = TRUE ORDER BY last_login DESC',
      [userId]
    );
    
    return NextResponse.json({
      success: true,
      devices
    });
    
  } catch (error) {
    console.error('Get devices API error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi' },
      { status: 500 }
    );
  }
}