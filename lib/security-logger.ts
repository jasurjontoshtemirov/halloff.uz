import fs from 'fs/promises';
import path from 'path';
import { telegramService } from './telegram';

export enum SecurityEventType {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILED = 'LOGIN_FAILED',
  LOGIN_BLOCKED = 'LOGIN_BLOCKED',
  ADMIN_ACCESS = 'ADMIN_ACCESS',
  UNAUTHORIZED_ACCESS = 'UNAUTHORIZED_ACCESS',
  SUSPICIOUS_ACTIVITY = 'SUSPICIOUS_ACTIVITY',
  PASSWORD_CHANGE = 'PASSWORD_CHANGE',
  ACCOUNT_LOCKED = 'ACCOUNT_LOCKED',
  SQL_INJECTION_ATTEMPT = 'SQL_INJECTION_ATTEMPT',
  XSS_ATTEMPT = 'XSS_ATTEMPT',
  RATE_LIMIT_EXCEEDED = 'RATE_LIMIT_EXCEEDED',
  SESSION_HIJACK_ATTEMPT = 'SESSION_HIJACK_ATTEMPT'
}

export interface SecurityEvent {
  timestamp: string;
  type: SecurityEventType;
  userId?: string;
  email?: string;
  ip: string;
  userAgent: string;
  details: Record<string, any>;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}

class SecurityLogger {
  private logDir = path.join(process.cwd(), 'logs', 'security');

  constructor() {
    this.ensureLogDirectory();
  }

  private async ensureLogDirectory() {
    try {
      await fs.mkdir(this.logDir, { recursive: true });
    } catch (error) {
      console.error('Failed to create log directory:', error);
    }
  }

  async log(event: Omit<SecurityEvent, 'timestamp'>) {
    const logEvent: SecurityEvent = {
      ...event,
      timestamp: new Date().toISOString()
    };

    // Console log for immediate visibility
    console.log(`🔒 SECURITY [${event.severity}] ${event.type}:`, {
      email: event.email,
      ip: event.ip,
      details: event.details
    });

    // File logging
    await this.writeToFile(logEvent);

    // Critical events - immediate notification
    if (event.severity === 'CRITICAL') {
      await this.handleCriticalEvent(logEvent);
    }
  }

  private async writeToFile(event: SecurityEvent) {
    try {
      const date = new Date().toISOString().split('T')[0];
      const filename = `security-${date}.log`;
      const filepath = path.join(this.logDir, filename);
      
      const logLine = JSON.stringify(event) + '\n';
      await fs.appendFile(filepath, logLine);
    } catch (error) {
      console.error('Failed to write security log:', error);
    }
  }

  private async handleCriticalEvent(event: SecurityEvent) {
    // Send to monitoring system, Telegram, email, etc.
    console.error('🚨 CRITICAL SECURITY EVENT:', event);
    
    // Send to Telegram
    await telegramService.sendSecurityAlert({
      type: `CRITICAL: ${event.type}`,
      message: `${event.email ? `User: ${event.email} | ` : ''}${JSON.stringify(event.details)}`,
      ip: event.ip,
      userAgent: event.userAgent,
      details: {
        type: event.type,
        severity: event.severity,
        userId: event.userId,
        timestamp: event.timestamp
      }
    });
  }

  // Helper methods for common events
  async logLoginSuccess(userId: string, email: string, ip: string, userAgent: string, deviceInfo?: any) {
    await this.log({
      type: SecurityEventType.LOGIN_SUCCESS,
      userId,
      email,
      ip,
      userAgent,
      details: { deviceInfo },
      severity: 'LOW'
    });
  }

  async logLoginFailed(email: string, ip: string, userAgent: string, reason: string) {
    await this.log({
      type: SecurityEventType.LOGIN_FAILED,
      email,
      ip,
      userAgent,
      details: { reason },
      severity: 'MEDIUM'
    });
  }

  async logLoginBlocked(email: string, ip: string, userAgent: string, attempts: number) {
    await this.log({
      type: SecurityEventType.LOGIN_BLOCKED,
      email,
      ip,
      userAgent,
      details: { attempts },
      severity: 'HIGH'
    });
  }

  async logAdminAccess(userId: string, email: string, ip: string, userAgent: string, resource: string) {
    await this.log({
      type: SecurityEventType.ADMIN_ACCESS,
      userId,
      email,
      ip,
      userAgent,
      details: { resource },
      severity: 'MEDIUM'
    });
  }

  async logUnauthorizedAccess(ip: string, userAgent: string, attemptedResource: string) {
    await this.log({
      type: SecurityEventType.UNAUTHORIZED_ACCESS,
      ip,
      userAgent,
      details: { attemptedResource },
      severity: 'HIGH'
    });
  }

  async logSuspiciousActivity(ip: string, userAgent: string, activity: string, details: any) {
    await this.log({
      type: SecurityEventType.SUSPICIOUS_ACTIVITY,
      ip,
      userAgent,
      details: { activity, ...details },
      severity: 'HIGH'
    });
  }

  async logSQLInjectionAttempt(ip: string, userAgent: string, payload: string, endpoint: string) {
    await this.log({
      type: SecurityEventType.SQL_INJECTION_ATTEMPT,
      ip,
      userAgent,
      details: { payload, endpoint },
      severity: 'CRITICAL'
    });
  }

  async logRateLimitExceeded(ip: string, userAgent: string, endpoint: string, attempts: number) {
    await this.log({
      type: SecurityEventType.RATE_LIMIT_EXCEEDED,
      ip,
      userAgent,
      details: { endpoint, attempts },
      severity: 'MEDIUM'
    });
  }

  // Get security statistics
  async getSecurityStats(days: number = 7) {
    try {
      const stats = {
        totalEvents: 0,
        eventsByType: {} as Record<string, number>,
        eventsBySeverity: {} as Record<string, number>,
        topIPs: {} as Record<string, number>,
        recentCritical: [] as SecurityEvent[]
      };

      // Read log files for the specified period
      const endDate = new Date();
      const startDate = new Date(endDate.getTime() - (days * 24 * 60 * 60 * 1000));

      for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
        const dateStr = d.toISOString().split('T')[0];
        const filename = `security-${dateStr}.log`;
        const filepath = path.join(this.logDir, filename);

        try {
          const content = await fs.readFile(filepath, 'utf-8');
          const lines = content.trim().split('\n').filter(line => line);

          for (const line of lines) {
            try {
              const event: SecurityEvent = JSON.parse(line);
              stats.totalEvents++;

              // Count by type
              stats.eventsByType[event.type] = (stats.eventsByType[event.type] || 0) + 1;

              // Count by severity
              stats.eventsBySeverity[event.severity] = (stats.eventsBySeverity[event.severity] || 0) + 1;

              // Count by IP
              stats.topIPs[event.ip] = (stats.topIPs[event.ip] || 0) + 1;

              // Collect critical events
              if (event.severity === 'CRITICAL') {
                stats.recentCritical.push(event);
              }
            } catch (parseError) {
              // Skip invalid JSON lines
            }
          }
        } catch (fileError) {
          // File doesn't exist for this date, skip
        }
      }

      // Sort and limit results
      stats.recentCritical = stats.recentCritical
        .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
        .slice(0, 10);

      return stats;
    } catch (error) {
      console.error('Failed to get security stats:', error);
      return null;
    }
  }
}

// Export singleton instance
export const securityLogger = new SecurityLogger();