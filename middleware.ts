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
    console.log('All cookies:', request.cookies.toString());
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

    // Database'dan user tekshirish (qo'shimcha xavfsizlik)
    if (userId?.value) {
      try {
        const { getPool } = await import('@/lib/db');
        const pool = getPool();
        
        const [users]: any = await pool.execute(
          'SELECT id, role FROM users WHERE id = ?',
          [userId.value]
        );
        
        if (users.length === 0) {
          console.log('❌ User not found in database');
          const response = NextResponse.redirect(new URL('/auth/login?error=user_not_found', request.url));
          response.cookies.delete('auth_token');
          response.cookies.delete('is_admin');
          response.cookies.delete('user_id');
          return response;
        }
        
        const user = users[0];
        
        // Admin panel uchun database'dan ham tekshirish
        if (pathname.startsWith('/admin') && user.role !== 'admin') {
          console.log('❌ Database confirms user is not admin');
          return NextResponse.redirect(new URL('/auth/login?error=not_admin', request.url));
        }
        
        console.log('✅ Database validation passed');
        
      } catch (dbError) {
        console.error('Database validation error:', dbError);
        // Database xatosi bo'lsa ham davom etish (fallback)
      }
    }

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
};