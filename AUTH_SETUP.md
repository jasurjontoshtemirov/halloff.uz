# Authentication Setup Guide

## Google OAuth Setup

1. **Google Cloud Console**ga o'ting: https://console.cloud.google.com/

2. Yangi project yarating yoki mavjudini tanlang

3. **APIs & Services** > **Credentials** ga o'ting

4. **Create Credentials** > **OAuth client ID** ni tanlang

5. **Application type**: Web application

6. **Authorized redirect URIs** ga qo'shing:
   ```
   http://localhost:3000/api/auth/callback/google
   ```

7. Client ID va Client Secret ni oling

8. `.env.local` fayliga qo'shing:
   ```
   GOOGLE_CLIENT_ID=your-client-id-here
   GOOGLE_CLIENT_SECRET=your-client-secret-here
   ```

## GitHub OAuth Setup

1. **GitHub Settings**ga o'ting: https://github.com/settings/developers

2. **OAuth Apps** > **New OAuth App** ni bosing

3. Ma'lumotlarni to'ldiring:
   - **Application name**: Halloff
   - **Homepage URL**: http://localhost:3000
   - **Authorization callback URL**: http://localhost:3000/api/auth/callback/github

4. **Register application** ni bosing

5. Client ID va Client Secret ni oling

6. `.env.local` fayliga qo'shing:
   ```
   GITHUB_ID=your-github-client-id
   GITHUB_SECRET=your-github-client-secret
   ```

## NextAuth Secret

1. Terminal'da random secret yarating:
   ```bash
   openssl rand -base64 32
   ```

2. `.env.local` fayliga qo'shing:
   ```
   NEXTAUTH_SECRET=generated-secret-here
   ```

## Production Setup

Production uchun redirect URL'larni o'zgartiring:
- Google: `https://yourdomain.com/api/auth/callback/google`
- GitHub: `https://yourdomain.com/api/auth/callback/github`
- NEXTAUTH_URL: `https://yourdomain.com`

## Test qilish

1. Serverni ishga tushiring: `npm run dev`
2. `/auth/login` sahifasiga o'ting
3. Google yoki GitHub tugmasini bosing
4. Muvaffaqiyatli kirganingizdan keyin `/docs` sahifasiga yo'naltirilasiz
