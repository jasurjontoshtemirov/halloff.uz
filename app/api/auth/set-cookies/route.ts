import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { isAdmin } = await request.json();
    
    const response = NextResponse.json({ success: true });
    
    if (isAdmin) {
      // Set cookies for admin
      response.cookies.set('is_admin', 'true', {
        path: '/',
        maxAge: 86400, // 24 hours
        httpOnly: false,
        sameSite: 'lax',
      });
      
      response.cookies.set('auth_token', 'true', {
        path: '/',
        maxAge: 86400,
        httpOnly: false,
        sameSite: 'lax',
      });
    }
    
    return response;
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to set cookies' }, { status: 500 });
  }
}
