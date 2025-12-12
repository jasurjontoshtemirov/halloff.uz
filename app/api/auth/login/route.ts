import { NextRequest, NextResponse } from 'next/server';
import { loginUser } from '@/lib/auth-db';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email va parolni kiriting!' },
        { status: 400 }
      );
    }

    const result = await loginUser(email, password);
    
    if (result.success && result.user) {
      // Oddiy cookie o'rnatish
      const response = NextResponse.json(result);
      
      // Auth cookie
      response.cookies.set('auth_token', 'authenticated', {
        httpOnly: false,
        secure: false,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 kun
        path: '/'
      });
      
      // Admin cookie
      if (result.user.role === 'admin') {
        response.cookies.set('is_admin', 'true', {
          httpOnly: false,
          secure: false,
          sameSite: 'lax',
          maxAge: 60 * 60 * 24 * 7,
          path: '/'
        });
      }
      
      console.log('Cookies set for user:', result.user.email);
      return response;
    }
    
    return NextResponse.json(result, { 
      status: result.success ? 200 : 401 
    });
  } catch (error) {
    console.error('Login API error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi yuz berdi.' },
      { status: 500 }
    );
  }
}