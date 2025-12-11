import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { deviceId } = await request.json();

    if (!deviceId) {
      return NextResponse.json(
        { success: false, message: 'Device ID talab qilinadi!' },
        { status: 400 }
      );
    }

    const pool = getPool();
    
    // Qurilmani o'chirish (is_active = false qilish)
    await pool.execute(
      'UPDATE user_devices SET is_active = FALSE WHERE id = ?',
      [deviceId]
    );

    return NextResponse.json({
      success: true,
      message: 'Qurilma muvaffaqiyatli o\'chirildi!'
    });
  } catch (error) {
    console.error('Remove device error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi yuz berdi.' },
      { status: 500 }
    );
  }
}