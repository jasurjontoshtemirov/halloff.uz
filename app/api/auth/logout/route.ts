import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('Logout request received');
    
    const response = NextResponse.json({
      success: true,
      message: 'Muvaffaqiyatli chiqildi'
    });
    
    // Barcha auth cookie'larni o'chirish
    const cookieOptions = {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax' as const,
      path: '/',
      maxAge: 0 // Immediately expire
    };
    
    response.cookies.set('auth_token', '', cookieOptions);
    response.cookies.set('is_admin', '', cookieOptions);
    response.cookies.set('user_id', '', cookieOptions);
    
    console.log('All auth cookies cleared');
    
    return response;
    
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { success: false, message: 'Logout xatosi' },
      { status: 500 }
    );
  }
}