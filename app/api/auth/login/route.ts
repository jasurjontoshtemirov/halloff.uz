import { NextRequest, NextResponse } from 'next/server';
import { loginUser } from '@/lib/auth-db';

export async function POST(request: NextRequest) {
  try {
    // Request body ni olish
    const body = await request.text();
    console.log('Raw request body:', body);
    
    if (!body) {
      return NextResponse.json(
        { success: false, message: 'Ma\'lumot yuborilmagan!' },
        { status: 400 }
      );
    }

    let parsedBody;
    try {
      parsedBody = JSON.parse(body);
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return NextResponse.json(
        { success: false, message: 'Noto\'g\'ri ma\'lumot formati!' },
        { status: 400 }
      );
    }

    const { email, password } = parsedBody;
    console.log('Parsed data:', { email: email ? 'exists' : 'missing', password: password ? 'exists' : 'missing' });

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email va parolni kiriting!' },
        { status: 400 }
      );
    }

    const result = await loginUser(email, password);
    console.log('Login result:', { success: result.success, message: result.message });
    
    if (result.success && result.user) {
      // Cookie o'rnatish
      const response = NextResponse.json(result, { status: 200 });
      
      // Auth token cookie
      response.cookies.set('auth_token', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 kun
        path: '/'
      });
      
      // Admin huquqi cookie
      if (result.user.role === 'admin') {
        response.cookies.set('is_admin', 'true', {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 60 * 60 * 24 * 7, // 7 kun
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