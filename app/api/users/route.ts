import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import jwt from 'jsonwebtoken';

// Get all users (admin only)
export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const token = request.cookies.get('auth_token')?.value;
    
    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Autentifikatsiya talab qilinadi!' },
        { status: 401 }
      );
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as any;
    
    if (decoded.role !== 'admin') {
      return NextResponse.json(
        { success: false, message: 'Ruxsat yo\'q!' },
        { status: 403 }
      );
    }

    const pool = getPool();

    // Get all users
    const [users] = await pool.execute(
      'SELECT id, name, email, role, created_at FROM users ORDER BY created_at DESC'
    );

    return NextResponse.json({
      success: true,
      users,
    });
  } catch (error) {
    console.error('Get users error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi!' },
      { status: 500 }
    );
  }
}

// Delete user (admin only)
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('id');

    if (!userId) {
      return NextResponse.json(
        { success: false, message: 'User ID talab qilinadi!' },
        { status: 400 }
      );
    }

    // Check authentication
    const token = request.cookies.get('auth_token')?.value;
    
    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Autentifikatsiya talab qilinadi!' },
        { status: 401 }
      );
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as any;
    
    if (decoded.role !== 'admin') {
      return NextResponse.json(
        { success: false, message: 'Ruxsat yo\'q!' },
        { status: 403 }
      );
    }

    const pool = getPool();

    // Check if user is admin
    const [users] = await pool.execute(
      'SELECT role FROM users WHERE id = ?',
      [userId]
    );

    const user = (users as any[])[0];

    if (user && user.role === 'admin') {
      return NextResponse.json(
        { success: false, message: 'Adminni o\'chirish mumkin emas!' },
        { status: 400 }
      );
    }

    // Delete user
    await pool.execute('DELETE FROM users WHERE id = ?', [userId]);

    return NextResponse.json({
      success: true,
      message: 'Foydalanuvchi o\'chirildi!',
    });
  } catch (error) {
    console.error('Delete user error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi!' },
      { status: 500 }
    );
  }
}
