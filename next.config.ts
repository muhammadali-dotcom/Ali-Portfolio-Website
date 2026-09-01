import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ─── Image optimisation ───────────────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    // Add remote domains here if you ever serve images from an external CDN:
    // remotePatterns: [{ protocol: "https", hostname: "example.com" }],
  },

  // ─── Compression ─────────────────────────────────────────────────────────
  compress: true,

  // ─── Security & performance headers ──────────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent the page from being embedded in an iframe (clickjacking)
          { key: "X-Frame-Options", value: "DENY" },
          // Prevent MIME-type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Control referrer information sent with requests
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Restrict access to browser features
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          // Force HTTPS for 1 year (only effective on production with HTTPS)
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          // Basic XSS protection header (legacy browsers)
          { key: "X-XSS-Protection", value: "1; mode=block" },
          // DNS prefetch control
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
      // Cache static assets aggressively
      {
        source: "/(.*)\\.(webp|avif|png|jpg|jpeg|svg|ico|woff2|woff|ttf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // ─── Redirects (clean up any legacy URLs if needed) ──────────────────────
  // async redirects() {
  //   return [];
  // },
};

export default nextConfig;
