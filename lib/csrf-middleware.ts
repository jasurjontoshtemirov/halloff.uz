import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import crypto from 'crypto';

// Generate a random CSRF token
export function generateToken(): string {
    return crypto.randomBytes(32).toString('hex');
}

// Verify the token
function verifyToken(token: string, storedToken: string): boolean {
    if (!token || !storedToken) return false;
    // Use timingSafeEqual to prevent timing attacks
    const tokenBuffer = Buffer.from(token);
    const storedBuffer = Buffer.from(storedToken);

    if (tokenBuffer.length !== storedBuffer.length) return false;
    return crypto.timingSafeEqual(tokenBuffer, storedBuffer);
}

export async function csrfProtection(request: NextRequest) {
    // Only check state-changing methods
    if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(request.method)) {
        const token = request.headers.get('x-csrf-token') || (await request.json()).csrfToken;
        const cookieStore = await cookies();
        const storedToken = cookieStore.get('csrf_token')?.value;

        if (!token) {
            console.error('CSRF Fail: Missing token in header/body');
            throw new Error('CSRF Validation Failed');
        }
        if (!storedToken) {
            console.error('CSRF Fail: Missing csrf_token cookie');
            throw new Error('CSRF Validation Failed');
        }
        if (!verifyToken(token, storedToken)) {
            console.error('CSRF Fail: Token mismatch');
            throw new Error('CSRF Validation Failed');
        }
    }
}

// Helper to set CSRF cookie
export function setCsrfCookie(response: NextResponse) {
    const token = generateToken();
    response.cookies.set('csrf_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/'
    });
    return token;
}
