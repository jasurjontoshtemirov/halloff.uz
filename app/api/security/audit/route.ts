import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// Security Audit Log System
interface AuditEvent {
  id: string;
  timestamp: string;
  userId: string;
  userIP: string;
  action: string;
  resource: string;
  details: any;
  severity: 'INFO' | 'WARNING' | 'ERROR' | 'CRITICAL';
  success: boolean;
  userAgent: string;
}

// In-memory storage (use database in production)
const auditLogs: AuditEvent[] = [];
const MAX_LOGS = 50000;

// Audit configuration
const AUDIT_CONFIG = {
  retentionDays: 90,
  criticalActions: [
    'ADMIN_LOGIN',
    'ADMIN_LOGOUT', 
    'USER_DELETE',
    'CONTENT_DELETE',
    'SETTINGS_CHANGE',
    'SECURITY_CHANGE',
    'IP_BLOCK',
    'IP_UNBLOCK'
  ],
  sensitiveResources: [
    '/admin',
    '/api/admin',
    '/api/security',
    '/api/users',
    '/api/content'
  ]
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '100');
    const offset = parseInt(searchParams.get('offset') || '0');
    const action = searchParams.get('action');
    const severity = searchParams.get('severity');
    const userId = searchParams.get('userId');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    
    let filteredLogs = [...auditLogs];
    
    // Apply filters
    if (action) {
      filteredLogs = filteredLogs.filter(log => log.action.includes(action));
    }
    
    if (severity) {
      filteredLogs = filteredLogs.filter(log => log.severity === severity);
    }
    
    if (userId) {
      filteredLogs = filteredLogs.filter(log => log.userId === userId);
    }
    
    if (startDate) {
      const start = new Date(startDate);
      filteredLogs = filteredLogs.filter(log => new Date(log.timestamp) >= start);
    }
    
    if (endDate) {
      const end = new Date(endDate);
      filteredLogs = filteredLogs.filter(log => new Date(log.timestamp) <= end);
    }
    
    // Sort by timestamp (newest first)
    filteredLogs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    
    // Pagination
    const paginatedLogs = filteredLogs.slice(offset, offset + limit);
    
    // Generate statistics
    const stats = generateAuditStats(filteredLogs);
    
    return NextResponse.json({
      success: true,
      logs: paginatedLogs,
      total: filteredLogs.length,
      stats,
      pagination: {
        limit,
        offset,
        hasMore: offset + limit < filteredLogs.length
      }
    });
  } catch (error) {
    console.error('Audit log API error:', error);
    return NextResponse.json({
      success: false,
      message: 'Audit log error'
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { action, resource, details, severity = 'INFO' } = await request.json();
    
    const clientIP = getClientIP(request);
    const userAgent = request.headers.get('user-agent') || '';
    
    // Create audit event
    const auditEvent: AuditEvent = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      userId: 'admin', // Get from session in production
      userIP: clientIP,
      action,
      resource,
      details,
      severity,
      success: true,
      userAgent: userAgent.substring(0, 200)
    };
    
    storeAuditEvent(auditEvent);
    
    return NextResponse.json({
      success: true,
      message: 'Audit event logged',
      eventId: auditEvent.id
    });
  } catch (error) {
    console.error('Audit log creation error:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to log audit event'
    }, { status: 500 });
  }
}

// Main audit logging function
export function logAuditEvent(
  userId: string,
  userIP: string,
  action: string,
  resource: string,
  details: any = {},
  success: boolean = true,
  userAgent: string = ''
): void {
  const severity = determineSeverity(action, success);
  
  const auditEvent: AuditEvent = {
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    userId,
    userIP,
    action,
    resource,
    details,
    severity,
    success,
    userAgent: userAgent.substring(0, 200)
  };
  
  storeAuditEvent(auditEvent);
}

function storeAuditEvent(event: AuditEvent): void {
  auditLogs.push(event);
  
  // Keep only recent logs
  if (auditLogs.length > MAX_LOGS) {
    auditLogs.splice(0, auditLogs.length - MAX_LOGS);
  }
  
  // Console logging for critical events
  if (event.severity === 'CRITICAL' || event.severity === 'ERROR') {
    console.error(`[AUDIT ${event.severity}] ${event.action} by ${event.userId} from ${event.userIP}:`, event.details);
  } else if (event.severity === 'WARNING') {
    console.warn(`[AUDIT ${event.severity}] ${event.action} by ${event.userId} from ${event.userIP}:`, event.details);
  }
  
  // Real-time alerts for critical actions
  if (event.severity === 'CRITICAL') {
    sendSecurityAlert(event);
  }
}

function determineSeverity(action: string, success: boolean): 'INFO' | 'WARNING' | 'ERROR' | 'CRITICAL' {
  if (!success) {
    if (AUDIT_CONFIG.criticalActions.includes(action)) {
      return 'CRITICAL';
    }
    return 'ERROR';
  }
  
  if (AUDIT_CONFIG.criticalActions.includes(action)) {
    return 'WARNING';
  }
  
  if (action.includes('DELETE') || action.includes('BLOCK')) {
    return 'WARNING';
  }
  
  return 'INFO';
}

function generateAuditStats(logs: AuditEvent[]) {
  const now = Date.now();
  const last24h = logs.filter(log => now - new Date(log.timestamp).getTime() < 24 * 60 * 60 * 1000);
  const last7d = logs.filter(log => now - new Date(log.timestamp).getTime() < 7 * 24 * 60 * 60 * 1000);
  
  const actionCounts = logs.reduce((acc, log) => {
    acc[log.action] = (acc[log.action] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const severityCounts = logs.reduce((acc, log) => {
    acc[log.severity] = (acc[log.severity] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const userCounts = logs.reduce((acc, log) => {
    acc[log.userId] = (acc[log.userId] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const failedActions = logs.filter(log => !log.success);
  
  return {
    total: logs.length,
    last24h: last24h.length,
    last7d: last7d.length,
    failed: failedActions.length,
    topActions: Object.entries(actionCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([action, count]) => ({ action, count })),
    severityBreakdown: severityCounts,
    topUsers: Object.entries(userCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([user, count]) => ({ user, count })),
    recentCritical: logs
      .filter(log => log.severity === 'CRITICAL')
      .slice(0, 5),
    suspiciousPatterns: detectSuspiciousPatterns(logs)
  };
}

function detectSuspiciousPatterns(logs: AuditEvent[]): any[] {
  const patterns = [];
  const now = Date.now();
  const last1h = logs.filter(log => now - new Date(log.timestamp).getTime() < 60 * 60 * 1000);
  
  // Multiple failed login attempts
  const failedLogins = last1h.filter(log => 
    log.action === 'ADMIN_LOGIN' && !log.success
  );
  
  if (failedLogins.length > 5) {
    patterns.push({
      type: 'MULTIPLE_FAILED_LOGINS',
      count: failedLogins.length,
      description: `${failedLogins.length} ta muvaffaqiyatsiz kirish urinishi so'nggi soatda`,
      severity: 'HIGH'
    });
  }
  
  // Unusual activity patterns
  const adminActions = last1h.filter(log => log.action.startsWith('ADMIN_'));
  if (adminActions.length > 50) {
    patterns.push({
      type: 'HIGH_ADMIN_ACTIVITY',
      count: adminActions.length,
      description: `${adminActions.length} ta admin harakati so'nggi soatda`,
      severity: 'MEDIUM'
    });
  }
  
  // Multiple IPs for same user
  const userIPs = logs.reduce((acc, log) => {
    if (!acc[log.userId]) acc[log.userId] = new Set();
    acc[log.userId].add(log.userIP);
    return acc;
  }, {} as Record<string, Set<string>>);
  
  for (const [userId, ips] of Object.entries(userIPs)) {
    if (ips.size > 3) {
      patterns.push({
        type: 'MULTIPLE_IPS_PER_USER',
        user: userId,
        ipCount: ips.size,
        description: `${userId} foydalanuvchisi ${ips.size} ta turli IP'dan foydalangan`,
        severity: 'MEDIUM'
      });
    }
  }
  
  return patterns;
}

function sendSecurityAlert(event: AuditEvent): void {
  // Implement real-time alerting (email, Telegram, etc.)
  console.error(`🚨 SECURITY ALERT: ${event.action} by ${event.userId} from ${event.userIP}`);
  
  // You can integrate with notification services here
  // Example: send to Telegram bot, email, Slack, etc.
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfIP = request.headers.get('cf-connecting-ip');
  
  return cfIP || realIP || forwarded?.split(',')[0] || 'unknown';
}

// Cleanup old logs periodically
setInterval(() => {
  const cutoff = Date.now() - (AUDIT_CONFIG.retentionDays * 24 * 60 * 60 * 1000);
  
  const recentLogs = auditLogs.filter(log => 
    new Date(log.timestamp).getTime() > cutoff
  );
  
  if (recentLogs.length !== auditLogs.length) {
    auditLogs.length = 0;
    auditLogs.push(...recentLogs);
    console.log(`[AUDIT] Cleaned up ${auditLogs.length - recentLogs.length} old audit logs`);
  }
}, 24 * 60 * 60 * 1000); // Daily cleanup