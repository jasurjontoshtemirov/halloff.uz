import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { deviceFingerprint, userId } = await request.json();

    if (!deviceFingerprint || !userId) {
      return NextResponse.json(
        { success: false, message: 'Ma\'lumot yetishmaydi!' },
        { status: 400 }
      );
    }

    const pool = getPool();
    
    // Qurilma active ekanligini tekshirish
    const [deviceRows] = await pool.execute(
      'SELECT id FROM user_devices WHERE user_id = ? AND device_fingerprint = ? AND is_active = TRUE',
      [userId, deviceFingerprint]
    );
    
    const isActive = (deviceRows as any[]).length > 0;
    
    return NextResponse.json({
      success: true,
      isActive: isActive
    });
  } catch (error) {
    console.error('Check device error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi yuz berdi.' },
      { status: 500 }
    );
  }
}