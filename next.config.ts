import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  
  // Security headers (Maximum Security)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // DNS prefetch control
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          // HSTS (2 years)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          // Prevent clickjacking
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          // Prevent MIME sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // XSS Protection
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // Referrer Policy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://www.google.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; media-src 'self' https://www.youtube.com; connect-src 'self' https://api.telegram.org; frame-src 'self' https://www.youtube.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;"
          },
          // Permissions Policy
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=(), ambient-light-sensor=(), autoplay=(), encrypted-media=(), fullscreen=(self), picture-in-picture=()'
          },
          // Cross-Origin policies
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp'
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin'
          }
        ]
      },
      // Admin pages - no cache
      {
        source: '/admin/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate'
          },
          {
            key: 'Pragma',
            value: 'no-cache'
          },
          {
            key: 'Expires',
            value: '0'
          }
        ]
      }
    ];
  },

  // Redirect malicious requests
  async redirects() {
    return [
      {
        source: '/wp-admin/:path*',
        destination: '/404',
        permanent: false
      },
      {
        source: '/wp-login.php',
        destination: '/404',
        permanent: false
      },
      {
        source: '/phpmyadmin/:path*',
        destination: '/404',
        permanent: false
      },
      {
        source: '/admin.php',
        destination: '/404',
        permanent: false
      },
      {
        source: '/.env',
        destination: '/404',
        permanent: false
      }
    ];
  },

  // Webpack security
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
      };
    }
    return config;
  },

  // Image security
  images: {
    domains: ['localhost', 'halloff.uz'],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Disable powered by header
  poweredByHeader: false,

  // Experimental features
  experimental: {
    serverComponentsExternalPackages: ['mysql2'],
  },
};

export default nextConfig;
