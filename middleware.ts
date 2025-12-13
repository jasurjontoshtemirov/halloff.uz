import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // API route'larini o'tkazib yuborish
  if (pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // /docs route'larini himoya qilish
  if (pathname.startsWith('/docs')) {
    const authToken = request.cookies.get('auth_token');
    const isAdmin = request.cookies.get('is_admin');
    
    console.log('Docs middleware check:');
    console.log('Path:', pathname);
    console.log('Auth token:', authToken?.value);
    console.log('Is admin:', isAdmin?.value);
    
    // Auth token tekshirish
    if (!authToken?.value || authToken.value !== 'authenticated') {
      console.log('Redirecting to login - no auth token');
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    // Admin bo'lsa to'g'ridan-to'g'ri ruxsat berish
    if (isAdmin?.value === 'true') {
      console.log('Admin access granted to docs');
      return NextResponse.next();
    }

    console.log('Regular user access to docs');
    // Device tekshirish (vaqtincha o'chirilgan)
    // const deviceCheck = await checkUserDevice(request);
    // if (!deviceCheck.isValid) {
    //   const response = NextResponse.redirect(new URL('/auth/login?message=device_changed', request.url));
    //   response.cookies.delete('auth_token');
    //   response.cookies.delete('is_admin');
    //   return response;
    // }
  }

  // /admin route'larini himoya qilish
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin-test')) {
    const authToken = request.cookies.get('auth_token');
    const isAdmin = request.cookies.get('is_admin');
    
    console.log('Admin middleware check:');
    console.log('Path:', pathname);
    console.log('Auth token:', authToken?.value);
    console.log('Is admin:', isAdmin?.value);
    
    // Auth token tekshirish
    if (!authToken?.value || authToken.value !== 'authenticated') {
      console.log('Redirecting to login - no auth token');
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    // Admin tekshirish
    if (isAdmin?.value !== 'true') {
      console.log('Redirecting to login - not admin');
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    console.log('Admin access granted');
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
};