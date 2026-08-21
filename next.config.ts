import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const isDev = process.env.NODE_ENV === "development";
const isVercel = process.env.VERCEL === "1";
const vercelLive = isVercel ? " https://vercel.live" : "";

const LEGACY_PUBLIC_ROOTS = [
  "app",
  "solutions",
  "features",
  "institutions",
  "roles",
  "timetable",
  "security",
  "about",
  "demo",
  "contact",
  "faq",
  "guides",
  "privacy",
  "terms",
  "support",
  "data-deletion",
  "compliance",
  "privacy-center",
  "trust-center",
  "legal-notice",
  "cookies",
  "accessibility",
  "child-parent-data-notice",
  "data-processing-agreement",
  "subprocessors",
  "data-retention",
  "backup-recovery",
  "service-status",
  "service-level-agreement",
  "business-continuity",
  "disaster-recovery",
  "incident-response",
  "vulnerability-disclosure",
  "security-contact",
  "support-policy",
  "maintenance-policy",
  "security-whitepaper",
  "responsible-ai",
] as const;

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://challenges.cloudflare.com${vercelLive}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self' https://challenges.cloudflare.com${vercelLive}`,
  `frame-src https://challenges.cloudflare.com${vercelLive}`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
];

const staticAssetCacheHeaders = [
  {
    key: "Cache-Control",
    value: "public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000",
  },
];

const nextConfig: NextConfig = {
  // Standalone output is used for self-hosted (Docker) deployments.
  // `next start` (used locally and by Playwright) needs the default output.
  // Never set BUILD_STANDALONE=1 on Vercel — it breaks the default Next.js output layout.
  ...(process.env.BUILD_STANDALONE === "1" ? { output: "standalone" as const } : {}),
  poweredByHeader: false,
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 604800,
  },
  async redirects() {
    return LEGACY_PUBLIC_ROOTS.map((root) => ({
      source: `/${root}/:path*`,
      destination: `/ar/${root}/:path*`,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Content-Type", value: "application/xml; charset=utf-8" },
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
      { source: "/brand/:path*", headers: staticAssetCacheHeaders },
      { source: "/icons/:path*", headers: staticAssetCacheHeaders },
      { source: "/screenshots/:path*", headers: staticAssetCacheHeaders },
      { source: "/social/:path*", headers: staticAssetCacheHeaders },
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/welcome/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, max-age=0" },
          { key: "Referrer-Policy", value: "no-referrer" },
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
