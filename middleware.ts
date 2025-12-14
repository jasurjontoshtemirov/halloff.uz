import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // API route'larini o'tkazib yuborish
  if (pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // Middleware'ni butunlay o'chirish - faqat client-side tekshirish
  console.log('Middleware disabled - allowing all access to:', pathname);
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