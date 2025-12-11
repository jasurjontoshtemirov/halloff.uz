import { NextRequest, NextResponse } from 'next/server';
import { getUsers, deleteUser } from '@/lib/auth-db';

export async function GET() {
  try {
    const users = await getUsers();
    return NextResponse.json({ success: true, users });
  } catch (error) {
    console.error('Get users API error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi yuz berdi.' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('id');

    if (!userId) {
      return NextResponse.json(
        { success: false, message: 'Foydalanuvchi ID si kerak!' },
        { status: 400 }
      );
    }

    const result = await deleteUser(userId);
    
    return NextResponse.json(result, { 
      status: result.success ? 200 : 400 
    });
  } catch (error) {
    console.error('Delete user API error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi yuz berdi.' },
      { status: 500 }
    );
  }
}