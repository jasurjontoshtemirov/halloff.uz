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
    
    return NextResponse.json(result, { 
      status: result.success ? 201 : 400 
    });
  } catch (error) {
    console.error('Register API error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi yuz berdi.' },
      { status: 500 }
    );
  }
}