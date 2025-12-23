import { NextRequest, NextResponse } from 'next/server';
import { registerUser } from '@/lib/auth-db';

export async function POST(request: NextRequest) {
  try {
    const { name, phone } = await request.json();

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: 'Ism va telefon raqam kiritilishi shart!' },
        { status: 400 }
      );
    }

    // Phone validation
    const phoneRegex = /^\+998[0-9]{9}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json({
        success: false,
        message: 'Telefon raqam formati noto\'g\'ri (+998XXXXXXXXX)'
      }, { status: 400 });
    }

    const result = await registerUser(name.trim(), phone);
    
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