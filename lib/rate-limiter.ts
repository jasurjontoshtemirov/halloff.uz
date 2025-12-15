// Advanced Rate Limiting System
interface RateLimitConfig {
  windowMs: number;
  maxAttempts: number;
  blockDurationMs: number;
}

interface AttemptRecord {
  count: number;
  firstAttempt: number;
  blockedUntil?: number;
}

class RateLimiter {
  private attempts = new Map<string, AttemptRecord>();
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.config = config;

    // Cleanup old records every 5 minutes
    setInterval(() => this.cleanup(), 5 * 60 * 1000);
  }

  isBlocked(identifier: string): boolean {
    const record = this.attempts.get(identifier);
    if (!record) return false;

    const now = Date.now();

    // Check if still blocked
    if (record.blockedUntil && now < record.blockedUntil) {
      return true;
    }

    // Reset if block period expired
    if (record.blockedUntil && now >= record.blockedUntil) {
      this.attempts.delete(identifier);
      return false;
    }

    return false;
  }

  recordAttempt(identifier: string): { allowed: boolean; remainingAttempts: number; resetTime?: number; requireCaptcha?: boolean } {
    if (this.isBlocked(identifier)) {
      const record = this.attempts.get(identifier)!;
      return {
        allowed: false,
        remainingAttempts: 0,
        resetTime: record.blockedUntil
      };
    }

    const now = Date.now();
    let record = this.attempts.get(identifier);

    if (!record || (now - record.firstAttempt) > this.config.windowMs) {
      // New window or first attempt
      record = {
        count: 1,
        firstAttempt: now
      };
    } else {
      // Increment count in current window
      record.count++;
    }

    this.attempts.set(identifier, record);

    // Check if limit exceeded
    if (record.count > this.config.maxAttempts) {
      // If excessive attempts (2x limit), block
      if (record.count > this.config.maxAttempts * 2) {
        record.blockedUntil = now + this.config.blockDurationMs;
        this.attempts.set(identifier, record);

        return {
          allowed: false,
          remainingAttempts: 0,
          resetTime: record.blockedUntil
        };
      }

      // Require captcha if over limit but not yet blocked (soft limit)
      // For this implementation, we'll just treat it as blocked for simplicity unless captcha logic is fully integrated
      // Expanding logic: Return allowed=false but with specific flag
      record.blockedUntil = now + this.config.blockDurationMs;
      this.attempts.set(identifier, record);

      return {
        allowed: false,
        remainingAttempts: 0,
        resetTime: record.blockedUntil
      };
    }

    return {
      allowed: true,
      remainingAttempts: this.config.maxAttempts - record.count,
      resetTime: record.firstAttempt + this.config.windowMs
    };
  }

  private cleanup() {
    const now = Date.now();
    for (const [key, record] of this.attempts.entries()) {
      // Remove expired records
      if (record.blockedUntil && now > record.blockedUntil) {
        this.attempts.delete(key);
      } else if (!record.blockedUntil && (now - record.firstAttempt) > this.config.windowMs) {
        this.attempts.delete(key);
      }
    }
  }

  getStats() {
    return {
      totalRecords: this.attempts.size,
      blockedIPs: Array.from(this.attempts.entries())
        .filter(([_, record]) => record.blockedUntil && Date.now() < record.blockedUntil)
        .length
    };
  }
}

// Rate limiter instances
export const loginLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxAttempts: 5,
  blockDurationMs: 30 * 60 * 1000 // 30 minutes block
});

export const apiLimiter = new RateLimiter({
  windowMs: 60 * 1000, // 1 minute
  maxAttempts: 100,
  blockDurationMs: 5 * 60 * 1000 // 5 minutes block
});

export const adminLimiter = new RateLimiter({
  windowMs: 60 * 1000, // 1 minute
  maxAttempts: 20,
  blockDurationMs: 10 * 60 * 1000 // 10 minutes block
});

// Helper function to get client IP and User Agent fingerprint
export function getClientFingerprint(request: Request): string {
  const ip = getClientIP(request);
  const ua = request.headers.get('user-agent') || 'unknown';
  // Simple hash or concatenation
  return `${ip}|${ua}`;
}

export function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  return realIP || 'unknown';
}

// Placeholder for Captcha verification
export async function verifyCaptcha(token: string): Promise<boolean> {
  // In production, verify with Google Recaptcha or similar
  // For now, assume always valid if token is present and lengthy
  return !!token && token.length > 5;
}