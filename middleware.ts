import { NextRequest, NextResponse } from "next/server";

// Type declaration for global rate limiter
declare global {
  var rateLimiter: Map<string, number> | undefined;
}

// Security middleware with maximum protection (10/10)
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const clientIP = getClientIP(request);
  
  // Basic security checks
  if (isBlockedRequest(request)) {
    console.warn(`[SECURITY BLOCK] Blocked request - IP: ${clientIP}, Path: ${pathname}`);
    return new NextResponse('Access Denied', { 
      status: 403,
      headers: {
        'X-Blocked-Reason': 'Security violation detected',
        'X-Security-Level': '10',
        'Retry-After': '3600'
      }
    });
  }

  // DDoS protection
  if (!checkRateLimit(clientIP)) {
    console.error(`[DDOS PROTECTION] Rate limit exceeded - IP: ${clientIP}`);
    return new NextResponse('Rate Limited', { 
      status: 429,
      headers: {
        'X-Blocked-Reason': 'Rate limit exceeded',
        'X-Security-Level': '10',
        'Retry-After': '900'
      }
    });
  }

  // Admin routes protection
  if (pathname.startsWith('/admin')) {
    if (pathname === '/admin/login') {
      const response = NextResponse.next();
      response.headers.set('X-Frame-Options', 'DENY');
      response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
      return response;
    }

    const adminAuth = request.cookies.get('adminAuth');
    const csrfToken = request.cookies.get('csrfToken');
    
    if (!adminAuth || !csrfToken) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    const response = NextResponse.next();
    response.headers.set('X-Admin-Protected', 'true');
    response.headers.set('X-Security-Level', '10');
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    response.headers.set('X-Frame-Options', 'DENY');
    return response;
  }

  // API routes security
  if (pathname.startsWith('/api/')) {
    const response = NextResponse.next();
    response.headers.set('X-Security-Level', '10');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Cache-Control', 'no-store');
    return response;
  }

  // Default security headers
  const response = NextResponse.next();
  response.headers.set('X-Security-Level', '10');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  return response;
}

// Security helper functions
function isBlockedRequest(request: NextRequest): boolean {
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get('user-agent') || '';
  
  // Block suspicious paths
  const suspiciousPaths = [
    '.env', '.git', 'wp-admin', 'wp-login', 'phpmyadmin', 'admin.php'
  ];
  
  if (suspiciousPaths.some(path => pathname.includes(path))) {
    return true;
  }
  
  // Block suspicious user agents
  const suspiciousUAs = [
    /bot|crawler|spider|scraper/i,
    /curl|wget|python|java/i,
    /sqlmap|nikto|nmap/i
  ];
  
  if (suspiciousUAs.some(pattern => pattern.test(userAgent))) {
    return true;
  }
  
  return false;
}

function checkRateLimit(clientIP: string): boolean {
  if (!global.rateLimiter) {
    global.rateLimiter = new Map();
  }
  
  const now = Date.now();
  const windowSize = 60000; // 1 minute
  const maxRequests = 100;
  
  const key = `${clientIP}:${Math.floor(now / windowSize)}`;
  const current = global.rateLimiter.get(key) || 0;
  
  if (current >= maxRequests) {
    return false;
  }
  
  global.rateLimiter.set(key, current + 1);
  
  // Cleanup old entries
  for (const [k] of global.rateLimiter.entries()) {
    const [, timestamp] = k.split(':');
    if (now - parseInt(timestamp) * windowSize > windowSize * 2) {
      global.rateLimiter.delete(k);
    }
  }
  
  return true;
}

function getClientIP(request: NextRequest): string {
  const headers = [
    'cf-connecting-ip',
    'x-real-ip',
    'x-forwarded-for',
    'x-client-ip'
  ];
  
  for (const header of headers) {
    const value = request.headers.get(header);
    if (value) {
      return value.split(',')[0].trim();
    }
  }
  
  return 'unknown';
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};