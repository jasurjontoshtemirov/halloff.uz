import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { deviceId } = await request.json();

    if (!deviceId) {
      return NextResponse.json(
        { success: false, message: 'Qurilma ID kiritilmagan!' },
        { status: 400 }
      );
    }

    const pool = getPool();
    
    // Qurilmani o'chirish (is_active = FALSE qilish)
    const [result] = await pool.execute(
      'UPDATE user_devices SET is_active = FALSE WHERE id = ?',
      [deviceId]
    );
    
    const updateResult = result as any;
    if (updateResult.affectedRows === 0) {
      return NextResponse.json(
        { success: false, message: 'Qurilma topilmadi!' },
        { status: 404 }
      );
    }
    
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