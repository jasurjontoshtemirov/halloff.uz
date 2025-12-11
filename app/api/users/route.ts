import { NextRequest, NextResponse } from 'next/server';
import { getUsers, deleteUser } from '@/lib/auth-db';
import { initDatabase } from '@/lib/db';
import jwt from 'jsonwebtoken';

// Verify admin access
async function verifyAdmin(request: NextRequest) {
  try {
    const authToken = request.cookies.get('auth_token');
    if (!authToken) {
      return null;
    }
    
    const decoded = jwt.verify(authToken.value, process.env.JWT_SECRET || 'secret') as any;
    return decoded.role === 'admin' ? decoded : null;
  } catch (error) {
    return null;
  }
}

// GET - Get all users (admin only)
export async function GET(request: NextRequest) {
  try {
    // Check admin access
    const admin = await verifyAdmin(request);
    if (!admin) {
      return NextResponse.json(
        { success: false, message: 'Ruxsat yo\'q!' },
        { status: 403 }
      );
    }
    
    // Initialize database
    await initDatabase();
    
    // Get users
    const users = await getUsers();
    
    return NextResponse.json({ success: true, users }, { status: 200 });
  } catch (error) {
    console.error('Get users API error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi yuz berdi!' },
      { status: 500 }
    );
  }
}

// DELETE - Delete user (admin only)
export async function DELETE(request: NextRequest) {
  try {
    // Check admin access
    const admin = await verifyAdmin(request);
    if (!admin) {
      return NextResponse.json(
        { success: false, message: 'Ruxsat yo\'q!' },
        { status: 403 }
      );
    }
    
    const { userId } = await request.json();
    
    if (!userId) {
      return NextResponse.json(
        { success: false, message: 'User ID kerak!' },
        { status: 400 }
      );
    }
    
    // Initialize database
    await initDatabase();
    
    // Delete user
    const result = await deleteUser(userId);
    
    if (result.success) {
      return NextResponse.json(result, { status: 200 });
    } else {
      return NextResponse.json(result, { status: 400 });
    }
  } catch (error) {
    console.error('Delete user API error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi yuz berdi!' },
      { status: 500 }
    );
  }
}