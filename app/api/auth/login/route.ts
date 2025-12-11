import { NextRequest, NextResponse } from 'next/server';
import { loginUser } from '@/lib/auth-db';
import { initDatabase } from '@/lib/db';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
  try {
    // Initialize database
    await initDatabase();
    
    const { email, password } = await request.json();
    
    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email va parolni kiriting!' },
        { status: 400 }
      );
    }
    
    // Login user
    const result = await loginUser(email, password);
    
    if (result.success && result.user) {
      // Create JWT token
      const token = jwt.sign(
        { 
          id: result.user.id, 
          email: result.user.email, 
          role: result.user.role 
        },
        process.env.JWT_SECRET || 'secret',
        { expiresIn: '7d' }
      );
      
      // Create response
      const response = NextResponse.json(result, { status: 200 });
      
      // Set cookies
      response.cookies.set('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60, // 7 days
      });
      
      response.cookies.set('is_admin', result.user.role === 'admin' ? 'true' : 'false', {
        httpOnly: false, // Client-side'da o'qish uchun
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60, // 7 days
      });
      
      return response;
    } else {
      return NextResponse.json(result, { status: 401 });
    }
  } catch (error) {
    console.error('Login API error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi yuz berdi!' },
      { status: 500 }
    );
  }
}