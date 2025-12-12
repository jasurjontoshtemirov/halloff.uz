import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import { generateDeviceFingerprint } from '@/lib/device-fingerprint';

export async function POST(request: NextRequest) {
  try {
    const { userId } = await request.json();

    if (!userId) {
      return NextResponse.json(
        { success: false, message: 'User ID talab qilinadi!' },
        { status: 400 }
      );
    }

    const pool = getPool();
    
    // Foydalanuvchining hozirgi qurilmasini topish
    const deviceFingerprint = request.headers.get('x-device-fingerprint');
    
    if (!deviceFingerprint) {
      return NextResponse.json(
        { success: false, expired: true, message: 'Qurilma ma\'lumotlari topilmadi!' },
        { status: 401 }
      );
    }

    // Qurilmani va kalit muddatini tekshirish
    const [rows] = await pool.execute(
      'SELECT access_key_expires_at FROM user_devices WHERE user_id = ? AND device_fingerprint = ? AND is_active = TRUE',
      [userId, deviceFingerprint]
    );
    
    const deviceRows = rows as any[];
    
    if (deviceRows.length === 0) {
      return NextResponse.json(
        { success: false, expired: true, message: 'Qurilma topilmadi!' },
        { status: 401 }
      );
    }

    const device = deviceRows[0];
    const now = new Date();
    
    // Kalit muddatini tekshirish
    if (!device.access_key_expires_at || new Date(device.access_key_expires_at) < now) {
      return NextResponse.json(
        { success: false, expired: true, message: 'Kirish kaliti muddati tugagan!' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      expired: false,
      message: 'Kirish kaliti hali amal qilmoqda.'
    });
  } catch (error) {
    console.error('Access key expiration check error:', error);
    return NextResponse.json(
      { success: false, expired: true, message: 'Server xatosi yuz berdi.' },
      { status: 500 }
    );
  }
}