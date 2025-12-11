import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

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
    
    // Foydalanuvchining barcha access keylarini olish
    const [rows] = await pool.execute(
      'SELECT access_key, is_used, created_at FROM user_access_keys WHERE user_id = ? ORDER BY created_at DESC',
      [userId]
    );
    
    const keyRows = rows as any[];
    const accessKeys = keyRows.map(row => row.access_key);

    return NextResponse.json({
      success: true,
      accessKeys: accessKeys
    });
  } catch (error) {
    console.error('Get access keys error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi yuz berdi.' },
      { status: 500 }
    );
  }
}