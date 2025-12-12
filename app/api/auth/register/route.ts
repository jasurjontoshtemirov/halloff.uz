import { NextRequest, NextResponse } from 'next/server';
import { registerUser } from '@/lib/auth-db';

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: 'Barcha maydonlarni to\'ldiring!' },
        { status: 400 }
      );
    }

    const result = await registerUser(name, email, password);
    
    if (result.success) {
      // Yangi foydalanuvchi uchun access key talab qilish
      const responseData = {
        ...result,
        needsAccessKey: true
      };
      return NextResponse.json(responseData, { status: 201 });
    }
    
    return NextResponse.json(result, { status: 400 });
  } catch (error) {
    console.error('Register API error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi yuz berdi.' },
      { status: 500 }
    );
  }
}