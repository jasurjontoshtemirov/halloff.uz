import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { userId } = await request.json();

    if (!userId) {
      return NextResponse.json(
        { success: false, message: 'User ID talab qilinadi!' },
        { status: 400 }
      );
    }

    // Admin huquqini tekshirish
    const authToken = request.cookies.get('auth_token');
    if (!authToken) {
      return NextResponse.json(
        { success: false, message: 'Ruxsat yo\'q!' },
        { status: 401 }
      );
    }

    const pool = getPool();
    
    // Tasodifiy access key yaratish
    const accessKey = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
    // Access key ni ma'lumotlar bazasiga saqlash
    await pool.execute(
      'INSERT INTO user_access_keys (user_id, access_key) VALUES (?, ?)',
      [userId, accessKey]
    );

    return NextResponse.json({
      success: true,
      accessKey: accessKey,
      message: 'Kirish kaliti yaratildi!'
    });
  } catch (error) {
    console.error('Create access key error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi yuz berdi.' },
      { status: 500 }
    );
  }
}