import { NextResponse } from 'next/server';
import { generateToken } from '@/lib/csrf-middleware';

export async function GET() {
    // Generate token directly
    const token = generateToken();

    // Create the final response with the token in body
    const response = NextResponse.json({ csrfToken: token });

    // Set the cookie directly on this response
    response.cookies.set('csrf_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/'
    });

    return response;
}
