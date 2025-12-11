import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { userId, accessKey } = await request.json();

    if (!userId || !accessKey) {
      return NextResponse.json(
        { success: false, message: 'User ID va kirish kaliti talab qilinadi!' },
        { status: 400 }
      );
    }

    const pool = getPool();
    
    // Kirish kalitini tekshirish
    const [rows] = await pool.execute(
      'SELECT id, is_used FROM user_access_keys WHERE user_id = ? AND access_key = ?',
      [userId, accessKey]
    );
    
    const keyRows = rows as any[];
    if (keyRows.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Noto\'g\'ri kirish kaliti!' },
        { status: 401 }
      );
    }

    const keyRecord = keyRows[0];
    if (keyRecord.is_used) {
      return NextResponse.json(
        { success: false, message: 'Bu kalit allaqachon ishlatilgan!' },
        { status: 401 }
      );
    }

    // Kalitni ishlatilgan deb belgilash
    await pool.execute(
      'UPDATE user_access_keys SET is_used = TRUE, used_at = NOW() WHERE id = ?',
      [keyRecord.id]
    );

    return NextResponse.json({
      success: true,
      message: 'Kirish kaliti tasdiqlandi!'
    });
  } catch (error) {
    console.error('Access key verification error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi yuz berdi.' },
      { status: 500 }
    );
  }
}