import { NextResponse } from 'next/server';
import { setCsrfCookie } from '@/lib/csrf-middleware';

export async function GET() {
    const response = NextResponse.json({ message: 'CSRF token set' });
    const token = setCsrfCookie(response);
    // Return token in body as well for convenience (e.g. for Client Components to read if needed, though they should use the cookie if httpOnly=false, but we set httpOnly=true, so we pass it in simple way or rely on header injection if we had it. Actually, if httpOnly=true, JS can't read it. So we must return it in the body so the client can include it in the header for the next request.)
    return NextResponse.json({ csrfToken: token }, {
        headers: response.headers
    });
}
