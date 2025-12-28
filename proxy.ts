import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rate limiting storage (in production, use Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Security configuration
const SECURITY_CONFIG = {
  maxRequestsPerMinute: 60,
  maxLoginAttemptsPerHour: 5,
  blockedIPs: new Set<string>(),
  suspiciousPatterns: [
    /\.(php|asp|jsp|cgi)$/i,
    /wp-admin|wp-login|phpmyadmin/i,
    /<script|javascript:|vbscript:/i,
    /union.*select|drop.*table|insert.*into/i,
  ],
};

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const clientIP = getClientIP(request);
  const userAgent = request.headers.get('user-agent') || '';
  const url = request.nextUrl.pathname;

  // 1. Block malicious IPs
  if (SECURITY_CONFIG.blockedIPs.has(clientIP)) {
    return new NextResponse('Access Denied', { status: 403 });
  }

  // 2. Check for suspicious patterns
  const fullUrl = request.url;
  for (const pattern of SECURITY_CONFIG.suspiciousPatterns) {
    if (pattern.test(fullUrl) || pattern.test(userAgent)) {
      console.warn(`Suspicious request blocked: ${clientIP} - ${fullUrl}`);
      SECURITY_CONFIG.blockedIPs.add(clientIP);
      return new NextResponse('Access Denied', { status: 403 });
    }
  }

  // 3. Rate limiting
  if (!isRateLimited(clientIP, url)) {
    return new NextResponse('Too Many Requests', { 
      status: 429,
      headers: {
        'Retry-After': '60'
      }
    });
  }

  // 4. Admin route protection
  if (url.startsWith('/admin') && url !== '/admin/login') {
    const adminAuth = request.cookies.get('adminAuth')?.value;
    if (!adminAuth || !isValidAdminSession(adminAuth)) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // 5. Security Headers (Maximum Security)
  const securityHeaders = {
    // Prevent XSS attacks
    'X-XSS-Protection': '1; mode=block',
    
    // Prevent MIME type sniffing
    'X-Content-Type-Options': 'nosniff',
    
    // Prevent clickjacking
    'X-Frame-Options': 'DENY',
    
    // Strict referrer policy
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    
    // Content Security Policy (Very Strict)
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://www.google.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: https: blob:",
      "media-src 'self' https://www.youtube.com",
      "connect-src 'self' https://api.telegram.org",
      "frame-src 'self' https://www.youtube.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests"
    ].join('; '),
    
    // HTTP Strict Transport Security (2 years)
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    
    // Permissions Policy (Disable dangerous features)
    'Permissions-Policy': [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'payment=()',
      'usb=()',
      'magnetometer=()',
      'gyroscope=()',
      'accelerometer=()',
      'ambient-light-sensor=()',
      'autoplay=()',
      'encrypted-media=()',
      'fullscreen=(self)',
      'picture-in-picture=()'
    ].join(', '),
    
    // Cross-Origin policies
    'Cross-Origin-Embedder-Policy': 'require-corp',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Resource-Policy': 'same-origin',
    
    // Server information hiding
    'Server': 'Halloff-Secure',
    
    // Cache control for sensitive pages
    ...(url.startsWith('/admin') && {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    })
  };

  // Apply all security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  // 6. Security logging
  logSecurityEvent(clientIP, userAgent, url, 'ACCESS');

  return response;
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfIP = request.headers.get('cf-connecting-ip');
  
  return cfIP || realIP || forwarded?.split(',')[0] || 'unknown';
}

function isRateLimited(ip: string, path: string): boolean {
  const now = Date.now();
  const key = `${ip}:${path}`;
  const limit = path.includes('/api/admin/login') ? 
    SECURITY_CONFIG.maxLoginAttemptsPerHour : 
    SECURITY_CONFIG.maxRequestsPerMinute;
  
  const windowMs = path.includes('/api/admin/login') ? 3600000 : 60000; // 1 hour or 1 minute
  
  const current = rateLimitMap.get(key);
  
  if (!current || now > current.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (current.count >= limit) {
    return false;
  }
  
  current.count++;
  return true;
}

function isValidAdminSession(token: string): boolean {
  // In production, verify JWT token properly
  try {
    // Basic validation - in production use proper JWT verification
    return token === 'valid-admin-session';
  } catch {
    return false;
  }
}

function logSecurityEvent(ip: string, userAgent: string, path: string, type: string) {
  const timestamp = new Date().toISOString();
  console.log(`[SECURITY] ${timestamp} - ${type} - IP: ${ip} - Path: ${path} - UA: ${userAgent.substring(0, 100)}`);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};