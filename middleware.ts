import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /admin route'larini himoya qilish
  if (pathname.startsWith('/admin')) {
    const authToken = request.cookies.get('auth_token');
    const isAdmin = request.cookies.get('is_admin');
    
    if (!authToken || isAdmin?.value !== 'true') {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  return NextResponse.next();
}

// Middleware qaysi route'larda ishlashini belgilash
export const config = {
  matcher: [
    '/admin/:path*',
  ],
};
