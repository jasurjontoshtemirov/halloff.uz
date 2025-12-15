import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/token';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public routes
  const publicRoutes = [
    '/',
    '/auth/login',
    '/auth/signup',
    '/admin-test'
  ];

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Protected routes check
  if (pathname.startsWith('/docs') || pathname.startsWith('/admin')) {
    const authToken = request.cookies.get('auth_token');

    console.log('=== AUTH CHECK ===');
    console.log('Path:', pathname);

    if (!authToken?.value) {
      console.log('❌ No auth token - redirecting to login');
      return NextResponse.redirect(new URL('/auth/login?error=auth_required', request.url));
    }

    const payload = await verifyToken(authToken.value);

    if (!payload) {
      console.log('❌ Invalid token - redirecting to login');
      return NextResponse.redirect(new URL('/auth/login?error=invalid_token', request.url));
    }

    if (pathname.startsWith('/admin') && payload.role !== 'admin') {
      console.log('❌ Not admin - redirecting to login');
      return NextResponse.redirect(new URL('/auth/login?error=admin_required', request.url));
    }

    console.log('✅ Access granted to:', payload.userId);
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
  ]
};