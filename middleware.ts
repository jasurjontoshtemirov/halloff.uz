import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/jwt';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /docs route'larini himoya qilish - login talab qilish
  if (pathname.startsWith('/docs')) {
    const authToken = request.cookies.get('auth_token');
    
    if (!authToken?.value) {
      console.log('No auth token found, redirecting to login');
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    
    // JWT tokenni tekshirish
    const payload = verifyToken(authToken.value);
    if (!payload) {
      console.log('Invalid JWT token, redirecting to login');
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    
    console.log('Valid token for user:', payload.email);
  }

  // /admin route'larini himoya qilish
  if (pathname.startsWith('/admin')) {
    const authToken = request.cookies.get('auth_token');
    
    if (!authToken?.value) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    
    // JWT tokenni tekshirish va admin rolini tekshirish
    const payload = verifyToken(authToken.value);
    if (!payload || payload.role !== 'admin') {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  return NextResponse.next();
}

// Middleware qaysi route'larda ishlashini belgilash
export const config = {
  matcher: [
    '/docs/:path*',
    '/admin/:path*',
  ],
};
