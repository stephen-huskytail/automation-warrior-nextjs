import type { NextConfig } from "next";
import { legacyBlogRedirects } from "./lib/legacyBlogRedirects";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...legacyBlogRedirects,
      // OPS-289: AI Operator Plans is replaced by the AI Agent Teams page.
      { source: "/ai-operator-plans", destination: "/agent-teams", statusCode: 301 },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
    ],
  },
  // Note: naked domain → www redirect is handled by Vercel project domain settings
  // (automationwarrior.ai is configured as a redirect alias → www.automationwarrior.ai)
  // Do NOT add a Next.js redirect here — it creates a redirect loop.

  // Turbopack is the default in Next.js 16 — no webpack config needed.
  // Velite runs as a prebuild script ("prebuild": "velite build") in package.json.
  turbopack: {},
};

export default nextConfig;
