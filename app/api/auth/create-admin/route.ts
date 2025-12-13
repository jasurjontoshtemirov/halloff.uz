import { NextRequest, NextResponse } from 'next/server';
import { getPool, initDatabase } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    // Database'ni initialize qilish
    await initDatabase();
    
    return NextResponse.json({
      success: true,
      message: 'Admin userlar yaratildi',
      admins: [
        {
          email: 'admin@halloff.uz',
          password: 'admin123',
          role: 'admin'
        },
        {
          email: 'k6yd2007@gmail.com', 
          password: '@Qwer1234',
          role: 'admin'
        }
      ]
    });
    
  } catch (error) {
    console.error('Create admin error:', error);
    return NextResponse.json(
      { success: false, message: 'Admin yaratishda xatolik', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const pool = getPool();
    
    // Admin userlarni ko'rsatish
    const [admins] = await pool.execute(
      'SELECT id, name, email, role, created_at FROM users WHERE role = ?',
      ['admin']
    );
    
    return NextResponse.json({
      success: true,
      admins: admins
    });
    
  } catch (error) {
    console.error('Get admins error:', error);
    return NextResponse.json(
      { success: false, message: 'Adminlarni olishda xatolik' },
      { status: 500 }
    );
  }
}