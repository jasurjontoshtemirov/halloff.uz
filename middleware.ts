import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // API route'larini o'tkazib yuborish
  if (pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // Public route'lar (ruxsat berilgan)
  const publicRoutes = [
    '/',
    '/auth/login',
    '/auth/signup',
    '/admin-test'
  ];

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Protected route'larni tekshirish
  if (pathname.startsWith('/docs') || pathname.startsWith('/admin')) {
    
    // Cookie'larni tekshirish
    const authToken = request.cookies.get('auth_token');
    const isAdmin = request.cookies.get('is_admin');
    const userId = request.cookies.get('user_id');
    
    console.log('=== MIDDLEWARE DEBUG ===');
    console.log('Path:', pathname);
    console.log('Request URL:', request.url);
    console.log('Request headers cookie:', request.headers.get('cookie'));
    console.log('Cookies object:', request.cookies.getAll());
    console.log('Auth token:', authToken?.value);
    console.log('Is admin:', isAdmin?.value);
    console.log('User ID:', userId?.value);
    
    // Auth token yo'q bo'lsa
    if (!authToken?.value || authToken.value !== 'authenticated') {
      console.log('❌ No valid auth token - redirecting to login');
      return NextResponse.redirect(new URL('/auth/login?error=auth_required', request.url));
    }

    // Admin panel uchun admin tekshirish
    if (pathname.startsWith('/admin')) {
      if (isAdmin?.value !== 'true') {
        console.log('❌ Not admin - redirecting to login');
        return NextResponse.redirect(new URL('/auth/login?error=admin_required', request.url));
      }
      console.log('✅ Admin access granted');
    }

    // Database validation (vaqtincha o'chirilgan - Edge runtime muammosi)
    // TODO: Database validation'ni alohida API orqali qilish
    console.log('⚠️ Database validation skipped (Edge runtime limitation)');

    console.log('✅ Access granted to:', pathname);
  }

  return NextResponse.next();
}

// Device tekshirish funksiyasi
async function checkUserDevice(request: NextRequest): Promise<{ isValid: boolean; message: string }> {
  try {
    // User ID'ni cookie'dan olish (JWT decode qilish kerak bo'lsa)
    const userIdCookie = request.cookies.get('user_id');
    const deviceFingerprint = request.headers.get('x-device-fingerprint');
    
    if (!userIdCookie?.value || !deviceFingerprint) {
      return { isValid: false, message: 'Device ma\'lumotlari topilmadi' };
    }

    // Database'dan tekshirish
    const { getPool } = await import('@/lib/db');
    const pool = getPool();
    
    const [devices]: any = await pool.execute(
      'SELECT * FROM user_devices WHERE user_id = ? AND device_fingerprint = ? AND is_active = TRUE',
      [userIdCookie.value, deviceFingerprint]
    );
    
    if (devices.length === 0) {
      return { isValid: false, message: 'Device aktiv emas' };
    }
    
    return { isValid: true, message: 'Device aktiv' };
  } catch (error) {
    console.error('Device check error:', error);
    return { isValid: true, message: 'Tekshirishda xatolik' }; // Xatolik bo'lsa ruxsat berish
  }
}

export const config = {
  matcher: [
    '/docs/:path*',
    '/admin/:path*',
  ],
  runtime: 'nodejs', // Edge runtime o'rniga Node.js
};