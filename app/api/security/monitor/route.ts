import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// Security monitoring storage (use Redis in production)
const securityEvents = new Map<string, any[]>();
const blockedIPs = new Set<string>();
const suspiciousIPs = new Set<string>();
const rateLimits = new Map<string, { count: number; resetTime: number }>();

// Security configuration
const SECURITY_CONFIG = {
  maxRequestsPerMinute: 60,
  maxRequestsPerHour: 1000,
  suspiciousThreshold: 100,
  blockThreshold: 200,
  monitoringWindow: 24 * 60 * 60 * 1000, // 24 hours
};

export async function GET(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);
    
    // Log monitoring access
    logSecurityEvent(clientIP, 'SECURITY_MONITOR_ACCESS', {
      userAgent: request.headers.get('user-agent'),
      timestamp: new Date().toISOString()
    }, 'INFO');

    // Calculate security stats
    const stats = calculateSecurityStats();
    
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Security monitor error:', error);
    return NextResponse.json({
      success: false,
      message: 'Monitoring xatosi'
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);
    const { action, ip, data } = await request.json();

    // Log admin action
    logSecurityEvent(clientIP, 'ADMIN_SECURITY_ACTION', {
      action,
      targetIP: ip,
      data,
      timestamp: new Date().toISOString()
    }, 'HIGH');

    switch (action) {
      case 'block_ip':
        blockedIPs.add(ip);
        logSecurityEvent(ip, 'IP_BLOCKED', {
          reason: data?.reason || 'Manual block',
          blockedBy: clientIP
        }, 'CRITICAL');
        break;
        
      case 'unblock_ip':
        blockedIPs.delete(ip);
        suspiciousIPs.delete(ip);
        logSecurityEvent(ip, 'IP_UNBLOCKED', {
          reason: data?.reason || 'Manual unblock',
          unblockedBy: clientIP
        }, 'HIGH');
        break;
        
      default:
        return NextResponse.json({
          success: false,
          message: 'Noto\'g\'ri harakat'
        }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: 'Harakat muvaffaqiyatli bajarildi'
    });
  } catch (error) {
    console.error('Security action error:', error);
    return NextResponse.json({
      success: false,
      message: 'Harakat bajarilmadi'
    }, { status: 500 });
  }
}

// Security monitoring middleware function
export function monitorRequest(request: NextRequest): boolean {
  const clientIP = getClientIP(request);
  const userAgent = request.headers.get('user-agent') || '';
  const path = request.nextUrl.pathname;
  
  // Check if IP is blocked
  if (blockedIPs.has(clientIP)) {
    logSecurityEvent(clientIP, 'BLOCKED_IP_ACCESS_ATTEMPT', {
      path,
      userAgent: userAgent.substring(0, 200)
    }, 'CRITICAL');
    return false;
  }

  // Rate limiting
  const now = Date.now();
  const rateKey = `${clientIP}:${Math.floor(now / 60000)}`; // Per minute
  const hourKey = `${clientIP}:${Math.floor(now / 3600000)}`; // Per hour
  
  const minuteLimit = rateLimits.get(rateKey) || { count: 0, resetTime: now + 60000 };
  const hourLimit = rateLimits.get(hourKey) || { count: 0, resetTime: now + 3600000 };
  
  minuteLimit.count++;
  hourLimit.count++;
  
  rateLimits.set(rateKey, minuteLimit);
  rateLimits.set(hourKey, hourLimit);
  
  // Check rate limits
  if (minuteLimit.count > SECURITY_CONFIG.maxRequestsPerMinute) {
    suspiciousIPs.add(clientIP);
    logSecurityEvent(clientIP, 'RATE_LIMIT_EXCEEDED_MINUTE', {
      count: minuteLimit.count,
      limit: SECURITY_CONFIG.maxRequestsPerMinute,
      path
    }, 'HIGH');
    
    if (minuteLimit.count > SECURITY_CONFIG.maxRequestsPerMinute * 2) {
      blockedIPs.add(clientIP);
      logSecurityEvent(clientIP, 'AUTO_BLOCKED_RATE_LIMIT', {
        count: minuteLimit.count,
        path
      }, 'CRITICAL');
      return false;
    }
  }
  
  if (hourLimit.count > SECURITY_CONFIG.maxRequestsPerHour) {
    suspiciousIPs.add(clientIP);
    logSecurityEvent(clientIP, 'RATE_LIMIT_EXCEEDED_HOUR', {
      count: hourLimit.count,
      limit: SECURITY_CONFIG.maxRequestsPerHour,
      path
    }, 'HIGH');
  }

  // Detect suspicious patterns
  detectSuspiciousActivity(clientIP, path, userAgent);
  
  // Log normal request
  logSecurityEvent(clientIP, 'REQUEST', {
    path,
    method: request.method,
    userAgent: userAgent.substring(0, 100)
  }, 'INFO');

  return true;
}

function detectSuspiciousActivity(ip: string, path: string, userAgent: string) {
  const suspiciousPatterns = [
    /wp-admin|wp-login|phpmyadmin|admin\.php/i,
    /\.env|\.git|\.svn|\.htaccess/i,
    /eval\(|base64_decode|exec\(|system\(/i,
    /<script|javascript:|vbscript:/i,
    /union.*select|drop.*table|insert.*into/i,
    /\.\./,
    /null|undefined|NaN/i
  ];

  const maliciousUserAgents = [
    /bot|crawler|spider|scraper/i,
    /curl|wget|python|java|go-http/i,
    /sqlmap|nikto|nmap|masscan/i
  ];

  let suspiciousScore = 0;

  // Check path patterns
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(path)) {
      suspiciousScore += 50;
      logSecurityEvent(ip, 'SUSPICIOUS_PATH', {
        path,
        pattern: pattern.toString()
      }, 'HIGH');
    }
  }

  // Check user agent
  for (const pattern of maliciousUserAgents) {
    if (pattern.test(userAgent)) {
      suspiciousScore += 30;
      logSecurityEvent(ip, 'SUSPICIOUS_USER_AGENT', {
        userAgent,
        pattern: pattern.toString()
      }, 'MEDIUM');
    }
  }

  // Empty or suspicious user agent
  if (!userAgent || userAgent.length < 10) {
    suspiciousScore += 20;
    logSecurityEvent(ip, 'SUSPICIOUS_USER_AGENT_EMPTY', {
      userAgent
    }, 'MEDIUM');
  }

  // Mark as suspicious or block
  if (suspiciousScore >= SECURITY_CONFIG.suspiciousThreshold) {
    suspiciousIPs.add(ip);
    logSecurityEvent(ip, 'MARKED_SUSPICIOUS', {
      score: suspiciousScore,
      path,
      userAgent
    }, 'HIGH');
  }

  if (suspiciousScore >= SECURITY_CONFIG.blockThreshold) {
    blockedIPs.add(ip);
    logSecurityEvent(ip, 'AUTO_BLOCKED_SUSPICIOUS', {
      score: suspiciousScore,
      path,
      userAgent
    }, 'CRITICAL');
  }
}

function logSecurityEvent(ip: string, type: string, data: any, severity: string) {
  const event = {
    timestamp: new Date().toISOString(),
    ip,
    type,
    data,
    severity
  };

  if (!securityEvents.has(ip)) {
    securityEvents.set(ip, []);
  }

  const events = securityEvents.get(ip)!;
  events.push(event);

  // Keep only recent events (24 hours)
  const cutoff = Date.now() - SECURITY_CONFIG.monitoringWindow;
  const recentEvents = events.filter(e => new Date(e.timestamp).getTime() > cutoff);
  securityEvents.set(ip, recentEvents);

  // Console logging for critical events
  if (severity === 'CRITICAL') {
    console.error(`[SECURITY CRITICAL] ${type} from ${ip}:`, data);
  } else if (severity === 'HIGH') {
    console.warn(`[SECURITY HIGH] ${type} from ${ip}:`, data);
  }
}

function calculateSecurityStats() {
  const now = Date.now();
  const cutoff = now - SECURITY_CONFIG.monitoringWindow;
  
  let totalEvents = 0;
  const recentEvents: any[] = [];
  const threatCounts = new Map<string, number>();

  // Collect all recent events
  for (const [ip, events] of securityEvents.entries()) {
    const recentIPEvents = events.filter(e => new Date(e.timestamp).getTime() > cutoff);
    totalEvents += recentIPEvents.length;
    recentEvents.push(...recentIPEvents);
    
    // Count threats per IP
    const threatCount = recentIPEvents.filter(e => 
      ['SUSPICIOUS_PATH', 'RATE_LIMIT_EXCEEDED_MINUTE', 'BLOCKED_IP_ACCESS_ATTEMPT'].includes(e.type)
    ).length;
    
    if (threatCount > 0) {
      threatCounts.set(ip, threatCount);
    }
  }

  // Sort events by timestamp (newest first)
  recentEvents.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  // Top threats
  const topThreats = Array.from(threatCounts.entries())
    .map(([ip, count]) => ({ ip, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  // Calculate security score
  const securityScore = calculateSecurityScore(totalEvents, blockedIPs.size, suspiciousIPs.size);

  return {
    totalEvents,
    suspiciousIPs: Array.from(suspiciousIPs),
    blockedIPs: Array.from(blockedIPs),
    recentEvents: recentEvents.slice(0, 50), // Last 50 events
    topThreats,
    securityScore,
    lastUpdated: new Date().toISOString()
  };
}

function calculateSecurityScore(totalEvents: number, blockedCount: number, suspiciousCount: number): number {
  let score = 100;
  
  // Deduct points for blocked IPs
  score -= Math.min(blockedCount * 5, 30);
  
  // Deduct points for suspicious IPs
  score -= Math.min(suspiciousCount * 2, 20);
  
  // Deduct points for high event volume
  if (totalEvents > 10000) score -= 20;
  else if (totalEvents > 5000) score -= 10;
  else if (totalEvents > 1000) score -= 5;
  
  return Math.max(score, 0);
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfIP = request.headers.get('cf-connecting-ip');
  
  return cfIP || realIP || forwarded?.split(',')[0] || 'unknown';
}

// Cleanup old data periodically
setInterval(() => {
  const cutoff = Date.now() - SECURITY_CONFIG.monitoringWindow;
  
  // Clean rate limits
  for (const [key, limit] of rateLimits.entries()) {
    if (Date.now() > limit.resetTime) {
      rateLimits.delete(key);
    }
  }
  
  // Clean old events
  for (const [ip, events] of securityEvents.entries()) {
    const recentEvents = events.filter(e => new Date(e.timestamp).getTime() > cutoff);
    if (recentEvents.length === 0) {
      securityEvents.delete(ip);
    } else {
      securityEvents.set(ip, recentEvents);
    }
  }
}, 60000); // Clean every minute