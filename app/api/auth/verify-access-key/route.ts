import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { userId, accessKey, deviceFingerprint } = await request.json();

    if (!userId || !accessKey) {
      return NextResponse.json(
        { success: false, message: 'User ID va kirish kaliti talab qilinadi!' },
        { status: 400 }
      );
    }

    const pool = getPool();
    
    // Kirish kalitini tekshirish (is_used ni tekshirmaymiz, har doim ishlatish mumkin)
    const [rows] = await pool.execute(
      'SELECT id FROM user_access_keys WHERE user_id = ? AND access_key = ?',
      [userId, accessKey]
    );
    
    const keyRows = rows as any[];
    if (keyRows.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Noto\'g\'ri kirish kaliti!' },
        { status: 401 }
      );
    }

    // Qurilmaga kalit muddatini o'rnatish (31 kun)
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 31);
    
    // Foydalanuvchining hozirgi qurilmasini topish va muddatni yangilash
    const finalDeviceFingerprint = deviceFingerprint || request.headers.get('x-device-fingerprint');
    if (finalDeviceFingerprint) {
      await pool.execute(
        'UPDATE user_devices SET access_key_expires_at = ? WHERE user_id = ? AND device_fingerprint = ?',
        [expiresAt, userId, finalDeviceFingerprint]
      );
    }

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