
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { verifyToken } from './lib/token';

async function testLogin() {
    console.log('Testing JWT Login Flow...');

    // 1. Simulate Login Request with VALID credentials
    const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: 'k6yd2007@gmail.com',
            password: '@Qwer1234'
        })
    });

    const data = await response.json();
    console.log('Login Status:', response.status);

    if (!response.ok) {
        console.error('Login Failed:', data);
        return;
    }

    // 2. Check Set-Cookie Header
    const setCookie = response.headers.get('set-cookie');
    console.log('Set-Cookie Header:', setCookie);

    if (!setCookie || !setCookie.includes('auth_token=')) {
        console.error('FAILED: No auth_token cookie set!');
        return;
    }

    if (setCookie.includes('HttpOnly')) {
        console.log('✅ PASS: auth_token is HttpOnly');
    } else {
        console.error('FAILED: auth_token is NOT HttpOnly');
    }

    // 3. Extract Token (Simple parsing for test)
    const tokenMatch = setCookie.match(/auth_token=([^;]+)/);
    if (tokenMatch) {
        const token = tokenMatch[1];
        console.log('Token extracted:', token.substring(0, 20) + '...');

        // 4. Verify Token
        const payload = await verifyToken(token);
        if (payload) {
            console.log('✅ PASS: Token is valid JWT. Payload:', payload);
        } else {
            console.error('FAILED: Token verification failed!');
        }
    } else {
        console.error('FAILED: Could not extract token from cookie');
    }
}

testLogin();
