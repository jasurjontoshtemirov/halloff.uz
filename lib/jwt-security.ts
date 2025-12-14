import jwt from 'jsonwebtoken';
import crypto from 'crypto';

// JWT Security Configuration
const JWT_SECRET = process.env.JWT_SECRET || crypto.randomBytes(64).toString('hex');
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || crypto.randomBytes(64).toString('hex');

export interface JWTPayload {
  userId: string;
  email: string;
  role: 'user' | 'admin';
  deviceFingerprint: string;
  sessionId: string;
  iat?: number;
  exp?: number;
}

// Generate secure tokens
export function generateTokens(payload: Omit<JWTPayload, 'iat' | 'exp'>) {
  const accessToken = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '15m', // Short-lived access token
    issuer: 'halloff.uz',
    audience: 'halloff-users'
  });

  const refreshToken = jwt.sign(
    { userId: payload.userId, sessionId: payload.sessionId },
    JWT_REFRESH_SECRET,
    {
      expiresIn: '7d', // Long-lived refresh token
      issuer: 'halloff.uz',
      audience: 'halloff-users'
    }
  );

  return { accessToken, refreshToken };
}

// Verify access token
export function verifyAccessToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET, {
      issuer: 'halloff.uz',
      audience: 'halloff-users'
    }) as JWTPayload;
  } catch (error) {
    console.error('Access token verification failed:', error);
    return null;
  }
}

// Verify refresh token
export function verifyRefreshToken(token: string) {
  try {
    return jwt.verify(token, JWT_REFRESH_SECRET, {
      issuer: 'halloff.uz',
      audience: 'halloff-users'
    });
  } catch (error) {
    console.error('Refresh token verification failed:', error);
    return null;
  }
}

// Generate session ID
export function generateSessionId(): string {
  return crypto.randomBytes(32).toString('hex');
}

// Generate CSRF token
export function generateCSRFToken(): string {
  return crypto.randomBytes(32).toString('hex');
}