import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { userId, deviceFingerprint } = await request.json();
    
    if (!userId || !deviceFingerprint) {
      return NextResponse.json(
        { success: false, message: 'User ID va device fingerprint kerak' },
        { status: 400 }
      );
    }
    
    const pool = getPool();
    
    // Deviceni nofaol qilish
    await pool.execute(
      'UPDATE user_devices SET is_active = FALSE WHERE user_id = ? AND device_fingerprint = ?',
      [userId, deviceFingerprint]
    );
    
    return NextResponse.json({
      success: true,
      message: 'Device muvaffaqiyatli nofaol qilindi'
    });
    
  } catch (error) {
    console.error('Logout device API error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi' },
      { status: 500 }
    );
  }
}