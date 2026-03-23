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
  async redirects() {
    return [
      // Redirect naked domain to www — prevents duplicate content
      {
        source: "/:path*",
        has: [{ type: "host", value: "automationwarrior.ai" }],
        destination: "https://www.automationwarrior.ai/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
