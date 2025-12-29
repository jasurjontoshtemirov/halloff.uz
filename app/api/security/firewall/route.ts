import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// Advanced firewall rules
const FIREWALL_RULES = {
  // Blocked countries (by IP ranges - simplified)
  blockedCountries: ['CN', 'RU', 'KP'], // China, Russia, North Korea
  
  // Blocked ASNs (known malicious networks)
  blockedASNs: [
    'AS13335', // Cloudflare (example - remove in production)
    'AS15169', // Google (example - remove in production)
  ],
  
  // Allowed user agents patterns
  allowedUserAgents: [
    /Mozilla\/5\.0.*Chrome/i,
    /Mozilla\/5\.0.*Firefox/i,
    /Mozilla\/5\.0.*Safari/i,
    /Mozilla\/5\.0.*Edge/i,
  ],
  
  // Blocked file extensions
  blockedExtensions: [
    '.php', '.asp', '.aspx', '.jsp', '.cgi', '.pl', '.py', '.rb',
    '.exe', '.bat', '.cmd', '.sh', '.ps1', '.vbs', '.jar'
  ],
  
  // Suspicious patterns in URLs
  suspiciousPatterns: [
    /\.\./g, // Directory traversal
    /%2e%2e/gi, // Encoded directory traversal
    /union.*select/gi, // SQL injection
    /<script/gi, // XSS
    /javascript:/gi, // XSS
    /vbscript:/gi, // XSS
    /onload=/gi, // XSS
    /onerror=/gi, // XSS
    /eval\(/gi, // Code injection
    /base64_decode/gi, // Code injection
    /exec\(/gi, // Command injection
    /system\(/gi, // Command injection
    /passthru\(/gi, // Command injection
    /shell_exec/gi, // Command injection
  ],
  
  // Rate limiting rules
  rateLimits: {
    perSecond: 10,
    perMinute: 100,
    perHour: 1000,
    perDay: 10000,
  }
};

// In-memory storage (use Redis in production)
const requestCounts = new Map<string, any>();
const blockedIPs = new Set<string>();
const whitelistedIPs = new Set<string>([
  '127.0.0.1',
  '::1',
  'localhost'
]);

export async function POST(request: NextRequest) {
  try {
    const { action, ip, rule, value } = await request.json();
    
    switch (action) {
      case 'block_ip':
        blockedIPs.add(ip);
        logFirewallEvent('IP_BLOCKED', { ip, rule, value });
        break;
        
      case 'unblock_ip':
        blockedIPs.delete(ip);
        logFirewallEvent('IP_UNBLOCKED', { ip, rule, value });
        break;
        
      case 'whitelist_ip':
        whitelistedIPs.add(ip);
        logFirewallEvent('IP_WHITELISTED', { ip, rule, value });
        break;
        
      case 'remove_whitelist':
        whitelistedIPs.delete(ip);
        logFirewallEvent('IP_REMOVED_FROM_WHITELIST', { ip, rule, value });
        break;
        
      case 'get_stats':
        return NextResponse.json(getFirewallStats());
        
      default:
        return NextResponse.json({
          success: false,
          message: 'Invalid action'
        }, { status: 400 });
    }
    
    return NextResponse.json({
      success: true,
      message: 'Firewall rule updated successfully'
    });
    
  } catch (error) {
    console.error('Firewall API error:', error);
    return NextResponse.json({
      success: false,
      message: 'Firewall error'
    }, { status: 500 });
  }
}

// Main firewall check function
export function checkFirewallRules(request: NextRequest): { allowed: boolean; reason?: string; severity?: string } {
  const clientIP = getClientIP(request);
  const userAgent = request.headers.get('user-agent') || '';
  const path = request.nextUrl.pathname;
  const method = request.method;
  
  // Whitelist check
  if (whitelistedIPs.has(clientIP)) {
    return { allowed: true };
  }
  
  // Blocked IP check
  if (blockedIPs.has(clientIP)) {
    logFirewallEvent('BLOCKED_IP_ACCESS', { ip: clientIP, path, userAgent });
    return { allowed: false, reason: 'IP blocked by firewall', severity: 'CRITICAL' };
  }
  
  // Rate limiting check
  const rateLimitResult = checkRateLimit(clientIP);
  if (!rateLimitResult.allowed) {
    logFirewallEvent('RATE_LIMIT_EXCEEDED', { 
      ip: clientIP, 
      path, 
      limit: rateLimitResult.limit,
      current: rateLimitResult.current 
    });
    return { allowed: false, reason: 'Rate limit exceeded', severity: 'HIGH' };
  }
  
  // User agent check
  if (!isValidUserAgent(userAgent)) {
    logFirewallEvent('INVALID_USER_AGENT', { ip: clientIP, userAgent, path });
    return { allowed: false, reason: 'Invalid user agent', severity: 'HIGH' };
  }
  
  // Suspicious pattern check
  const suspiciousCheck = checkSuspiciousPatterns(path, userAgent);
  if (!suspiciousCheck.allowed) {
    logFirewallEvent('SUSPICIOUS_PATTERN', { 
      ip: clientIP, 
      path, 
      pattern: suspiciousCheck.pattern,
      userAgent 
    });
    return { allowed: false, reason: 'Suspicious pattern detected', severity: 'HIGH' };
  }
  
  // File extension check
  const extensionCheck = checkFileExtension(path);
  if (!extensionCheck.allowed) {
    logFirewallEvent('BLOCKED_EXTENSION', { 
      ip: clientIP, 
      path, 
      extension: extensionCheck.extension 
    });
    return { allowed: false, reason: 'Blocked file extension', severity: 'MEDIUM' };
  }
  
  // Method check for sensitive paths
  if (path.startsWith('/admin') && !['GET', 'POST'].includes(method)) {
    logFirewallEvent('INVALID_METHOD', { ip: clientIP, path, method });
    return { allowed: false, reason: 'Invalid HTTP method for admin path', severity: 'HIGH' };
  }
  
  // All checks passed
  return { allowed: true };
}

function checkRateLimit(ip: string): { allowed: boolean; limit?: string; current?: number } {
  const now = Date.now();
  const secondKey = `${ip}:${Math.floor(now / 1000)}`;
  const minuteKey = `${ip}:${Math.floor(now / 60000)}`;
  const hourKey = `${ip}:${Math.floor(now / 3600000)}`;
  const dayKey = `${ip}:${Math.floor(now / 86400000)}`;
  
  // Get or initialize counters
  const secondCount = requestCounts.get(secondKey) || { count: 0, expiry: now + 1000 };
  const minuteCount = requestCounts.get(minuteKey) || { count: 0, expiry: now + 60000 };
  const hourCount = requestCounts.get(hourKey) || { count: 0, expiry: now + 3600000 };
  const dayCount = requestCounts.get(dayKey) || { count: 0, expiry: now + 86400000 };
  
  // Increment counters
  secondCount.count++;
  minuteCount.count++;
  hourCount.count++;
  dayCount.count++;
  
  // Store updated counters
  requestCounts.set(secondKey, secondCount);
  requestCounts.set(minuteKey, minuteCount);
  requestCounts.set(hourKey, hourCount);
  requestCounts.set(dayKey, dayCount);
  
  // Check limits
  if (secondCount.count > FIREWALL_RULES.rateLimits.perSecond) {
    return { allowed: false, limit: 'per-second', current: secondCount.count };
  }
  if (minuteCount.count > FIREWALL_RULES.rateLimits.perMinute) {
    return { allowed: false, limit: 'per-minute', current: minuteCount.count };
  }
  if (hourCount.count > FIREWALL_RULES.rateLimits.perHour) {
    return { allowed: false, limit: 'per-hour', current: hourCount.count };
  }
  if (dayCount.count > FIREWALL_RULES.rateLimits.perDay) {
    return { allowed: false, limit: 'per-day', current: dayCount.count };
  }
  
  return { allowed: true };
}

function isValidUserAgent(userAgent: string): boolean {
  if (!userAgent || userAgent.length < 10) {
    return false;
  }
  
  // Check against allowed patterns
  return FIREWALL_RULES.allowedUserAgents.some(pattern => pattern.test(userAgent));
}

function checkSuspiciousPatterns(path: string, userAgent: string): { allowed: boolean; pattern?: string } {
  const fullString = `${path} ${userAgent}`;
  
  for (const pattern of FIREWALL_RULES.suspiciousPatterns) {
    if (pattern.test(fullString)) {
      return { allowed: false, pattern: pattern.toString() };
    }
  }
  
  return { allowed: true };
}

function checkFileExtension(path: string): { allowed: boolean; extension?: string } {
  for (const ext of FIREWALL_RULES.blockedExtensions) {
    if (path.toLowerCase().endsWith(ext)) {
      return { allowed: false, extension: ext };
    }
  }
  
  return { allowed: true };
}

function logFirewallEvent(type: string, data: any) {
  const event = {
    timestamp: new Date().toISOString(),
    type,
    data,
    severity: data.severity || 'INFO'
  };
  
  console.log(`[FIREWALL] ${type}:`, data);
  
  // Store event for monitoring (implement proper storage in production)
}

function getFirewallStats() {
  return {
    blockedIPs: Array.from(blockedIPs),
    whitelistedIPs: Array.from(whitelistedIPs),
    activeConnections: requestCounts.size,
    rules: {
      rateLimits: FIREWALL_RULES.rateLimits,
      blockedExtensions: FIREWALL_RULES.blockedExtensions.length,
      suspiciousPatterns: FIREWALL_RULES.suspiciousPatterns.length
    },
    lastUpdated: new Date().toISOString()
  };
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfIP = request.headers.get('cf-connecting-ip');
  
  return cfIP || realIP || forwarded?.split(',')[0] || 'unknown';
}

// Cleanup expired counters
setInterval(() => {
  const now = Date.now();
  for (const [key, data] of requestCounts.entries()) {
    if (now > data.expiry) {
      requestCounts.delete(key);
    }
  }
}, 60000); // Clean every minute