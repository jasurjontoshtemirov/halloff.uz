import { NextRequest, NextResponse } from "next/server";

// Security monitoring data
const securityEvents = new Map<string, any[]>();
const suspiciousIPs = new Set<string>();
const blockedIPs = new Set<string>();

export async function GET(request: NextRequest) {
  try {
    // Only allow admin access
    const adminAuth = request.cookies.get('adminAuth')?.value;
    if (!adminAuth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const stats = {
      totalEvents: Array.from(securityEvents.values()).flat().length,
      suspiciousIPs: Array.from(suspiciousIPs),
      blockedIPs: Array.from(blockedIPs),
      recentEvents: getRecentEvents(50),
      topThreats: getTopThreats(),
      securityScore: calculateSecurityScore()
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Security monitor error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { action, ip, data } = await request.json();
    
    switch (action) {
      case 'block_ip':
        blockedIPs.add(ip);
        logSecurityEvent(ip, 'IP_BLOCKED', data);
        break;
      case 'unblock_ip':
        blockedIPs.delete(ip);
        logSecurityEvent(ip, 'IP_UNBLOCKED', data);
        break;
      case 'report_threat':
        suspiciousIPs.add(ip);
        logSecurityEvent(ip, 'THREAT_REPORTED', data);
        break;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Security action error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

function logSecurityEvent(ip: string, type: string, data: any) {
  const event = {
    timestamp: new Date().toISOString(),
    ip,
    type,
    data,
    severity: getSeverityLevel(type)
  };

  if (!securityEvents.has(ip)) {
    securityEvents.set(ip, []);
  }
  
  securityEvents.get(ip)!.push(event);
  
  // Keep only last 1000 events per IP
  const events = securityEvents.get(ip)!;
  if (events.length > 1000) {
    events.splice(0, events.length - 1000);
  }
}

function getRecentEvents(limit: number) {
  const allEvents = Array.from(securityEvents.values()).flat();
  return allEvents
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, limit);
}

function getTopThreats() {
  const threatCounts = new Map<string, number>();
  
  Array.from(securityEvents.values()).flat().forEach(event => {
    if (event.severity === 'HIGH' || event.severity === 'CRITICAL') {
      threatCounts.set(event.ip, (threatCounts.get(event.ip) || 0) + 1);
    }
  });

  return Array.from(threatCounts.entries())
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10)
    .map(([ip, count]) => ({ ip, count }));
}

function getSeverityLevel(type: string): string {
  const severityMap: Record<string, string> = {
    'FAILED_LOGIN': 'MEDIUM',
    'SUSPICIOUS_REQUEST': 'HIGH',
    'SQL_INJECTION_ATTEMPT': 'CRITICAL',
    'XSS_ATTEMPT': 'HIGH',
    'BRUTE_FORCE': 'CRITICAL',
    'IP_BLOCKED': 'HIGH',
    'THREAT_REPORTED': 'HIGH'
  };

  return severityMap[type] || 'LOW';
}

function calculateSecurityScore(): number {
  const events = Array.from(securityEvents.values()).flat();
  const recentEvents = events.filter(e => 
    new Date(e.timestamp).getTime() > Date.now() - 24 * 60 * 60 * 1000
  );

  let score = 100;
  
  // Deduct points for security events
  recentEvents.forEach(event => {
    switch (event.severity) {
      case 'CRITICAL': score -= 10; break;
      case 'HIGH': score -= 5; break;
      case 'MEDIUM': score -= 2; break;
      case 'LOW': score -= 1; break;
    }
  });

  return Math.max(0, Math.min(100, score));
}