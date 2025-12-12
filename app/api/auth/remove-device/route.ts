import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { deviceId } = await request.json();
    
    if (!deviceId) {
      return NextResponse.json(
        { success: false, message: 'Device ID kerak' },
        { status: 400 }
      );
    }
    
    const pool = getPool();
    
    // Deviceni nofaol qilish
    const [result]: any = await pool.execute(
      'UPDATE user_devices SET is_active = FALSE WHERE id = ?',
      [deviceId]
    );
    
    if (result.affectedRows === 0) {
      return NextResponse.json(
        { success: false, message: 'Device topilmadi' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Device muvaffaqiyatli o\'chirildi'
    });
    
  } catch (error) {
    console.error('Remove device API error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi' },
      { status: 500 }
    );
  }
}