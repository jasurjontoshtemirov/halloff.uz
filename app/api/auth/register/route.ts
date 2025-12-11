import { NextRequest, NextResponse } from 'next/server';
import { registerUser } from '@/lib/auth-db';
import { initDatabase } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    // Initialize database
    await initDatabase();
    
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
    
    // Register user
    const result = await registerUser(name, email, password);
    
    if (result.success) {
      return NextResponse.json(result, { status: 201 });
    } else {
      return NextResponse.json(result, { status: 400 });
    }
  } catch (error) {
    console.error('Register API error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi yuz berdi!' },
      { status: 500 }
    );
  }
}