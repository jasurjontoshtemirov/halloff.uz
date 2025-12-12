import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /docs route'larini himoya qilish - login talab qilish
  if (pathname.startsWith('/docs')) {
    const authToken = request.cookies.get('auth_token');
    
    console.log('Middleware - checking /docs access');
    console.log('Auth token exists:', !!authToken?.value);
    console.log('Auth token value length:', authToken?.value?.length || 0);
    
    if (!authToken?.value) {
      console.log('No auth token found, redirecting to login');
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    
    // Hozircha faqat cookie mavjudligini tekshiramiz
    console.log('Auth token found, allowing access to docs');
  }

  // /admin route'larini himoya qilish
  if (pathname.startsWith('/admin')) {
    const authToken = request.cookies.get('auth_token');
    const isAdmin = request.cookies.get('is_admin');
    
    if (!authToken?.value || isAdmin?.value !== 'true') {
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
