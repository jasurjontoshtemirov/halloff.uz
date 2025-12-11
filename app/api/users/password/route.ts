import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('id');

    if (!userId) {
      return NextResponse.json(
        { success: false, message: 'User ID talab qilinadi!' },
        { status: 400 }
      );
    }

    // Faqat k6yd2007@gmail.com uchun ruxsat tekshirish
    const authToken = request.cookies.get('auth_token');
    if (!authToken) {
      return NextResponse.json(
        { success: false, message: 'Ruxsat yo\'q!' },
        { status: 401 }
      );
    }

    const pool = getPool();
    
    // Hozircha barcha adminlar uchun ruxsat beramiz (keyinchalik cheklash mumkin)
    // const [adminRows] = await pool.execute(
    //   'SELECT email FROM users WHERE email = ? AND role = ?',
    //   ['k6yd2007@gmail.com', 'admin']
    // );
    
    // if ((adminRows as any[]).length === 0) {
    //   return NextResponse.json(
    //     { success: false, message: 'Ruxsat yo\'q! Faqat asosiy admin ko\'ra oladi.' },
    //     { status: 403 }
    //   );
    // }
    
    // Ochiq parolni olish
    const [rows] = await pool.execute(
      'SELECT upp.plain_password FROM user_plain_passwords upp WHERE upp.user_id = ?',
      [userId]
    );
    
    const passwordRows = rows as any[];
    if (passwordRows.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Parol topilmadi!' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      password: passwordRows[0].plain_password
    });
  } catch (error) {
    console.error('Get password error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi yuz berdi.' },
      { status: 500 }
    );
  }
}