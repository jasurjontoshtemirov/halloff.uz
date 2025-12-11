import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { isAdmin, isUser } = await request.json();
    
    const response = NextResponse.json({ success: true });
    
    // Har qanday login qilgan foydalanuvchi uchun auth_token o'rnatish
    if (isUser) {
      response.cookies.set('auth_token', 'true', {
        path: '/',
        maxAge: 86400, // 24 hours
        httpOnly: false,
        sameSite: 'lax',
      });
    }
    
    // Admin uchun qo'shimcha cookie
    if (isAdmin) {
      response.cookies.set('is_admin', 'true', {
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
