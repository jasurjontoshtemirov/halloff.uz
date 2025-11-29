import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: 'Barcha maydonlarni to\'ldiring!' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { success: false, message: 'Parol kamida 6 ta belgidan iborat bo\'lishi kerak!' },
        { status: 400 }
      );
    }

    const pool = getPool();

    // Check if user exists
    const [existingUsers] = await pool.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if ((existingUsers as any[]).length > 0) {
      return NextResponse.json(
        { success: false, message: 'Bu email allaqachon ro\'yxatdan o\'tgan!' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    await pool.execute(
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [name, email, hashedPassword, 'user']
    );

    return NextResponse.json({
      success: true,
      message: 'Muvaffaqiyatli ro\'yxatdan o\'tdingiz!'
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi!' },
      { status: 500 }
    );
  }
}
