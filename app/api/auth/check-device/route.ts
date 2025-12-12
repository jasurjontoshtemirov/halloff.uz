import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { userId, deviceFingerprint } = await request.json();
    
    if (!userId || !deviceFingerprint) {
      return NextResponse.json(
        { isValid: false, message: 'User ID va device fingerprint kerak' },
        { status: 400 }
      );
    }
    
    const pool = getPool();
    
    // Foydalanuvchining aktiv deviceini tekshirish
    const [devices]: any = await pool.execute(
      'SELECT * FROM user_devices WHERE user_id = ? AND device_fingerprint = ? AND is_active = TRUE',
      [userId, deviceFingerprint]
    );
    
    if (devices.length === 0) {
      return NextResponse.json({
        isValid: false,
        message: 'Bu device aktiv emas. Boshqa joydan login qilingan bo\'lishi mumkin.'
      });
    }
    
    // Last login vaqtini yangilash
    await pool.execute(
      'UPDATE user_devices SET last_login = NOW() WHERE user_id = ? AND device_fingerprint = ?',
      [userId, deviceFingerprint]
    );
    
    return NextResponse.json({
      isValid: true,
      message: 'Device aktiv'
    });
    
  } catch (error) {
    console.error('Check device API error:', error);
    return NextResponse.json(
      { isValid: false, message: 'Server xatosi' },
      { status: 500 }
    );
  }
}