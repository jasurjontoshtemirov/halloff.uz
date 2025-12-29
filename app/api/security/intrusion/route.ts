import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// Intrusion Detection System (IDS)
interface IntrusionEvent {
  timestamp: string;
  ip: string;
  type: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  data: any;
  blocked: boolean;
}

// In-memory storage (use database in production)
const intrusionEvents: IntrusionEvent[] = [];
const suspiciousIPs = new Map<string, { score: number; events: string[] }>();
const blockedIPs = new Set<string>();

// IDS Configuration
const IDS_CONFIG = {
  maxEvents: 10000,
  scoreThresholds: {
    suspicious: 50,
    block: 100,
    critical: 200
  },
  patterns: {
    sqlInjection: [
      /union.*select/gi,
      /drop.*table/gi,
      /insert.*into/gi,
      /delete.*from/gi,
      /update.*set/gi,
      /exec.*xp_/gi,
      /sp_executesql/gi,
      /'.*or.*'.*=/gi,
      /'.*and.*'.*=/gi,
      /1=1/gi,
      /1=0/gi
    ],
    xss: [
      /<script.*>/gi,
      /javascript:/gi,
      /vbscript:/gi,
      /onload=/gi,
      /onerror=/gi,
      /onclick=/gi,
      /onmouseover=/gi,
      /alert\(/gi,
      /document\.cookie/gi,
      /document\.write/gi
    ],
    commandInjection: [
      /;.*cat/gi,
      /;.*ls/gi,
      /;.*pwd/gi,
      /;.*whoami/gi,
      /\|.*cat/gi,
      /\|.*ls/gi,
      /&&.*cat/gi,
      /exec\(/gi,
      /system\(/gi,
      /passthru\(/gi,
      /shell_exec/gi,
      /`.*`/gi
    ],
    pathTraversal: [
      /\.\.\//gi,
      /\.\.%2f/gi,
      /\.\.%5c/gi,
      /%2e%2e%2f/gi,
      /%2e%2e%5c/gi,
      /\.\.\\\//gi
    ],
    bruteForce: [
      /admin/gi,
      /login/gi,
      /password/gi,
      /passwd/gi,
      /root/gi,
      /administrator/gi
    ]
  }
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const limit = parseInt(searchParams.get('limit') || '100');
    
    let events = intrusionEvents;
    
    if (type) {
      events = events.filter(e => e.type === type);
    }
    
    // Sort by timestamp (newest first) and limit
    events = events
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, limit);
    
    return NextResponse.json({
      success: true,
      events,
      stats: {
        totalEvents: intrusionEvents.length,
        suspiciousIPs: suspiciousIPs.size,
        blockedIPs: blockedIPs.size,
        recentEvents: intrusionEvents.filter(e => 
          new Date(e.timestamp).getTime() > Date.now() - 3600000 // Last hour
        ).length
      }
    });
  } catch (error) {
    console.error('IDS API error:', error);
    return NextResponse.json({
      success: false,
      message: 'IDS error'
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { action, ip, data } = await request.json();
    
    switch (action) {
      case 'unblock_ip':
        blockedIPs.delete(ip);
        suspiciousIPs.delete(ip);
        logIntrusionEvent(ip, 'IP_UNBLOCKED', 'LOW', { unblockedBy: 'admin', ...data });
        break;
        
      case 'block_ip':
        blockedIPs.add(ip);
        logIntrusionEvent(ip, 'IP_MANUALLY_BLOCKED', 'HIGH', { blockedBy: 'admin', ...data });
        break;
        
      case 'clear_events':
        intrusionEvents.length = 0;
        suspiciousIPs.clear();
        break;
        
      default:
        return NextResponse.json({
          success: false,
          message: 'Invalid action'
        }, { status: 400 });
    }
    
    return NextResponse.json({
      success: true,
      message: 'Action completed successfully'
    });
  } catch (error) {
    console.error('IDS action error:', error);
    return NextResponse.json({
      success: false,
      message: 'Action failed'
    }, { status: 500 });
  }
}

// Main intrusion detection function
export function detectIntrusion(request: NextRequest): { threat: boolean; severity?: string; type?: string; details?: any } {
  const clientIP = getClientIP(request);
  const userAgent = request.headers.get('user-agent') || '';
  const path = request.nextUrl.pathname;
  const query = request.nextUrl.search;
  const method = request.method;
  const referer = request.headers.get('referer') || '';
  
  const fullUrl = `${path}${query}`;
  const allData = `${fullUrl} ${userAgent} ${referer}`;
  
  let threatScore = 0;
  const detectedThreats: string[] = [];
  
  // SQL Injection Detection
  for (const pattern of IDS_CONFIG.patterns.sqlInjection) {
    if (pattern.test(allData)) {
      threatScore += 30;
      detectedThreats.push('SQL_INJECTION');
      logIntrusionEvent(clientIP, 'SQL_INJECTION_ATTEMPT', 'HIGH', {
        path, query, userAgent, pattern: pattern.toString()
      });
    }
  }
  
  // XSS Detection
  for (const pattern of IDS_CONFIG.patterns.xss) {
    if (pattern.test(allData)) {
      threatScore += 25;
      detectedThreats.push('XSS');
      logIntrusionEvent(clientIP, 'XSS_ATTEMPT', 'HIGH', {
        path, query, userAgent, pattern: pattern.toString()
      });
    }
  }
  
  // Command Injection Detection
  for (const pattern of IDS_CONFIG.patterns.commandInjection) {
    if (pattern.test(allData)) {
      threatScore += 35;
      detectedThreats.push('COMMAND_INJECTION');
      logIntrusionEvent(clientIP, 'COMMAND_INJECTION_ATTEMPT', 'CRITICAL', {
        path, query, userAgent, pattern: pattern.toString()
      });
    }
  }
  
  // Path Traversal Detection
  for (const pattern of IDS_CONFIG.patterns.pathTraversal) {
    if (pattern.test(allData)) {
      threatScore += 20;
      detectedThreats.push('PATH_TRAVERSAL');
      logIntrusionEvent(clientIP, 'PATH_TRAVERSAL_ATTEMPT', 'MEDIUM', {
        path, query, userAgent, pattern: pattern.toString()
      });
    }
  }
  
  // Brute Force Detection (for login attempts)
  if (path.includes('login') || path.includes('admin')) {
    for (const pattern of IDS_CONFIG.patterns.bruteForce) {
      if (pattern.test(allData)) {
        threatScore += 15;
        detectedThreats.push('BRUTE_FORCE');
        logIntrusionEvent(clientIP, 'BRUTE_FORCE_ATTEMPT', 'MEDIUM', {
          path, query, userAgent, pattern: pattern.toString()
        });
      }
    }
  }
  
  // Suspicious User Agent Detection
  const suspiciousUAs = [
    /bot|crawler|spider|scraper/gi,
    /curl|wget|python|java|go-http/gi,
    /sqlmap|nikto|nmap|masscan|burp|zap/gi,
    /scanner|exploit|hack|attack/gi
  ];
  
  for (const pattern of suspiciousUAs) {
    if (pattern.test(userAgent)) {
      threatScore += 10;
      detectedThreats.push('SUSPICIOUS_USER_AGENT');
      logIntrusionEvent(clientIP, 'SUSPICIOUS_USER_AGENT', 'LOW', {
        userAgent, pattern: pattern.toString()
      });
    }
  }
  
  // Empty or very short user agent
  if (!userAgent || userAgent.length < 10) {
    threatScore += 5;
    detectedThreats.push('EMPTY_USER_AGENT');
    logIntrusionEvent(clientIP, 'EMPTY_USER_AGENT', 'LOW', { userAgent });
  }
  
  // Suspicious file access
  const suspiciousFiles = [
    '.env', '.git', '.svn', '.htaccess', 'wp-config.php',
    'config.php', 'database.php', 'settings.php', 'admin.php'
  ];
  
  for (const file of suspiciousFiles) {
    if (path.includes(file)) {
      threatScore += 20;
      detectedThreats.push('SUSPICIOUS_FILE_ACCESS');
      logIntrusionEvent(clientIP, 'SUSPICIOUS_FILE_ACCESS', 'HIGH', {
        path, file, userAgent
      });
    }
  }
  
  // Update IP score
  updateIPScore(clientIP, threatScore, detectedThreats);
  
  // Determine if this is a threat
  if (threatScore >= IDS_CONFIG.scoreThresholds.critical) {
    blockedIPs.add(clientIP);
    return { 
      threat: true, 
      severity: 'CRITICAL', 
      type: detectedThreats.join(','),
      details: { score: threatScore, threats: detectedThreats }
    };
  } else if (threatScore >= IDS_CONFIG.scoreThresholds.block) {
    blockedIPs.add(clientIP);
    return { 
      threat: true, 
      severity: 'HIGH', 
      type: detectedThreats.join(','),
      details: { score: threatScore, threats: detectedThreats }
    };
  } else if (threatScore >= IDS_CONFIG.scoreThresholds.suspicious) {
    return { 
      threat: true, 
      severity: 'MEDIUM', 
      type: detectedThreats.join(','),
      details: { score: threatScore, threats: detectedThreats }
    };
  }
  
  return { threat: false };
}

function logIntrusionEvent(ip: string, type: string, severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL', data: any) {
  const event: IntrusionEvent = {
    timestamp: new Date().toISOString(),
    ip,
    type,
    severity,
    data,
    blocked: blockedIPs.has(ip)
  };
  
  intrusionEvents.push(event);
  
  // Keep only recent events
  if (intrusionEvents.length > IDS_CONFIG.maxEvents) {
    intrusionEvents.splice(0, intrusionEvents.length - IDS_CONFIG.maxEvents);
  }
  
  // Console logging for high severity events
  if (severity === 'CRITICAL' || severity === 'HIGH') {
    console.error(`[IDS ${severity}] ${type} from ${ip}:`, data);
  } else if (severity === 'MEDIUM') {
    console.warn(`[IDS ${severity}] ${type} from ${ip}:`, data);
  }
}

function updateIPScore(ip: string, score: number, threats: string[]) {
  if (!suspiciousIPs.has(ip)) {
    suspiciousIPs.set(ip, { score: 0, events: [] });
  }
  
  const ipData = suspiciousIPs.get(ip)!;
  ipData.score += score;
  ipData.events.push(...threats);
  
  // Auto-block if score is too high
  if (ipData.score >= IDS_CONFIG.scoreThresholds.block) {
    blockedIPs.add(ip);
    logIntrusionEvent(ip, 'AUTO_BLOCKED_HIGH_SCORE', 'CRITICAL', {
      totalScore: ipData.score,
      events: ipData.events
    });
  }
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfIP = request.headers.get('cf-connecting-ip');
  
  return cfIP || realIP || forwarded?.split(',')[0] || 'unknown';
}

// Cleanup old events periodically
setInterval(() => {
  const cutoff = Date.now() - (24 * 60 * 60 * 1000); // 24 hours
  
  // Remove old events
  const recentEvents = intrusionEvents.filter(e => 
    new Date(e.timestamp).getTime() > cutoff
  );
  
  intrusionEvents.length = 0;
  intrusionEvents.push(...recentEvents);
  
  // Reset IP scores for old entries
  for (const [ip, data] of suspiciousIPs.entries()) {
    if (data.score > 0) {
      data.score = Math.max(0, data.score - 10); // Decay score
      if (data.score === 0) {
        suspiciousIPs.delete(ip);
      }
    }
  }
}, 3600000); // Every hour