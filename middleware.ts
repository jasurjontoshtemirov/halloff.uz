import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /docs route'larini himoya qilish - faqat access code bilan
  if (pathname.startsWith('/docs')) {
    // Cookie'dan access code tekshirish
    const hasAccess = request.cookies.get('has_access');
    
    // Agar access yo'q bo'lsa, access code sahifasiga yo'naltirish
    if (!hasAccess || hasAccess.value !== 'true') {
      const accessUrl = new URL('/access', request.url);
      accessUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(accessUrl);
    }

    // Access bor bo'lsa, davom etish
    return NextResponse.next();
  }

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
    '/docs/:path*',
    '/admin/:path*',
  ],
};
