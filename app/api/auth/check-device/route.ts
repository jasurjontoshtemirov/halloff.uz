import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { userId, deviceFingerprint } = await request.json();

    if (!userId || !deviceFingerprint) {
      return NextResponse.json(
        { success: false, message: 'User ID va device fingerprint talab qilinadi!' },
        { status: 400 }
      );
    }

    const pool = getPool();
    
    // Qurilmani tekshirish
    const [rows] = await pool.execute(
      'SELECT id FROM user_devices WHERE user_id = ? AND device_fingerprint = ? AND is_active = TRUE',
      [userId, deviceFingerprint]
    );
    
    const deviceRows = rows as any[];
    const deviceExists = deviceRows.length > 0;

    return NextResponse.json({
      success: true,
      deviceExists: deviceExists
    });
  } catch (error) {
    console.error('Check device error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi yuz berdi.' },
      { status: 500 }
    );
  }
}