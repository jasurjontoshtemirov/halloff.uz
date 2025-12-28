import crypto from 'crypto';
import bcrypt from 'bcryptjs';

// Rate limiting storage
const loginAttempts = new Map<string, { count: number; lastAttempt: number; blocked: boolean }>();

export class SecurityManager {
  private static readonly MAX_LOGIN_ATTEMPTS = 3;
  private static readonly BLOCK_DURATION = 15 * 60 * 1000; // 15 minutes
  private static readonly SESSION_DURATION = 2 * 60 * 60 * 1000; // 2 hours
  
  // Generate secure random token
  static generateSecureToken(): string {
    return crypto.randomBytes(32).toString('hex');
  }
  
  // Hash password with salt
  static async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(12);
    return bcrypt.hash(password, salt);
  }
  
  // Verify password
  static async verifyPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
  
  // Check rate limiting
  static checkRateLimit(ip: string): { allowed: boolean; remainingAttempts: number; blockTimeLeft: number } {
    const now = Date.now();
    const attempt = loginAttempts.get(ip);
    
    if (!attempt) {
      loginAttempts.set(ip, { count: 0, lastAttempt: now, blocked: false });
      return { allowed: true, remainingAttempts: this.MAX_LOGIN_ATTEMPTS, blockTimeLeft: 0 };
    }
    
    // Check if block period has expired
    if (attempt.blocked && (now - attempt.lastAttempt) > this.BLOCK_DURATION) {
      attempt.blocked = false;
      attempt.count = 0;
    }
    
    if (attempt.blocked) {
      const blockTimeLeft = this.BLOCK_DURATION - (now - attempt.lastAttempt);
      return { allowed: false, remainingAttempts: 0, blockTimeLeft };
    }
    
    const remainingAttempts = this.MAX_LOGIN_ATTEMPTS - attempt.count;
    return { allowed: true, remainingAttempts, blockTimeLeft: 0 };
  }
  
  // Record failed login attempt
  static recordFailedAttempt(ip: string): void {
    const now = Date.now();
    const attempt = loginAttempts.get(ip) || { count: 0, lastAttempt: now, blocked: false };
    
    attempt.count++;
    attempt.lastAttempt = now;
    
    if (attempt.count >= this.MAX_LOGIN_ATTEMPTS) {
      attempt.blocked = true;
      // Log security incident
      console.warn(`🚨 SECURITY ALERT: IP ${ip} blocked after ${attempt.count} failed login attem