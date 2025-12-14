import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyAccessToken } from '@/lib/jwt-security';
import { apiLimiter, adminLimiter, getClientIP } from '@/lib/rate-limiter';
import { securityLogger } from '@/lib/security-logger';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ip = getClientIP(request);
  const userAgent = request.headers.get('user-agent') || 'Unknown';

  // API rate limiting
  if (pathname.startsWith('/api/')) {
    const limiter = pathname.startsWith('/api/admin/') ? adminLimiter : apiLimiter;
    const rateLimitResult = limiter.recordAttempt(ip);
    
    if (!rateLimitResult.allowed) {
      await securityLogger.logRateLimitExceeded(ip, userAgent, pathname, 0);
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { status: 429 }
      );
    }
    
    return NextResponse.next();
  }

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

  // Protected routes security check
  if (pathname.startsWith('/docs') || pathname.startsWith('/admin')) {
    
    // Try JWT token first (new secure method)
    const accessToken = request.cookies.get('access_token');
    const csrfToken = request.cookies.get('csrf_token');
    
    if (accessToken?.value) {
      const payload = verifyAccessToken(accessToken.value);
      
      if (payload) {
        // CSRF protection for state-changing operations
        if (request.method !== 'GET' && !csrfToken?.value) {
          await securityLogger.logSuspiciousActivity(ip, userAgent, 'Missing CSRF token', {
            path: pathname,
            method: request.method
          });
          return NextResponse.redirect(new URL('/auth/login?error=csrf_required', request.url));
        }

        // Admin access check
        if (pathname.startsWith('/admin') && payload.role !== 'admin') {
          await securityLogger.logUnauthorizedAccess(ip, userAgent, pathname);
          return NextResponse.redirect(new URL('/auth/login?error=admin_required', request.url));
        }

        // Log admin access
        if (pathname.startsWith('/admin')) {
          await securityLogger.logAdminAccess(payload.userId, payload.email, ip, userAgent, pathname);
        }

        console.log('✅ JWT Access granted:', payload.email, 'to', pathname);
        return NextResponse.next();
      }
    }

    // Fallback to legacy cookie system (temporary)
    const authToken = request.cookies.get('auth_token');
    const isAdmin = request.cookies.get('is_admin');
    
    console.log('=== LEGACY AUTH CHECK ===');
    console.log('Path:', pathname);
    console.log('Auth token:', authToken?.value);
    console.log('Is admin:', isAdmin?.value);
    
    if (!authToken?.value || authToken.value !== 'authenticated') {
      console.log('❌ No valid auth - redirecting to login');
      await securityLogger.logUnauthorizedAccess(ip, userAgent, pathname);
      return NextResponse.redirect(new URL('/auth/login?error=auth_required', request.url));
    }

    if (pathname.startsWith('/admin') && isAdmin?.value !== 'true') {
      console.log('❌ Not admin - redirecting to login');
      await securityLogger.logUnauthorizedAccess(ip, userAgent, pathname);
      return NextResponse.redirect(new URL('/auth/login?error=admin_required', request.url));
    }

    console.log('✅ Legacy access granted to:', pathname);
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