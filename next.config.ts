import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
