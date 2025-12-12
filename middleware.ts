import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /docs route'larini himoya qilish
  if (pathname.startsWith('/docs')) {
    const authToken = request.cookies.get('auth_token');
    
    if (!authToken?.value || authToken.value !== 'authenticated') {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  // /admin route'larini himoya qilish
  if (pathname.startsWith('/admin')) {
    const authToken = request.cookies.get('auth_token');
    const isAdmin = request.cookies.get('is_admin');
    
    if (!authToken?.value || authToken.value !== 'authenticated' || isAdmin?.value !== 'true') {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/docs/:path*',
    '/admin/:path*',
  ],
};