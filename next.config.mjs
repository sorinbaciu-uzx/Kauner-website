/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Security headers on every route (defense-in-depth; the site has no
  // third-party scripts, embeds or external API calls).
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Site-ul nu are nevoie să fie încadrat în iframe-uri externe.
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Blochează MIME-sniffing-ul răspunsurilor.
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Nu scurge URL-uri complete către alte origini.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Dezactivează API-urile de senzori pe care nu le folosim.
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // CSP: totul din propriul origin. `unsafe-inline` e necesar pentru
          // stilurile inline Next/Framer și pentru scripturile inline Next
          // (App Router); fără alte origini permise.
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data:",
              "media-src 'self'",
              "font-src 'self'",
              "connect-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
