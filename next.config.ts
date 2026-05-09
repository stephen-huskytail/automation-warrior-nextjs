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
  webpack(config) {
    // Velite Next.js plugin snippet — runs velite build during next build
    // Source: https://velite.js.org/guide/with-nextjs#start-velite-with-next-js-plugin
    config.plugins.push(
      new (class VeliteWebpackPlugin {
        static _instance?: VeliteWebpackPlugin;
        constructor() {
          if (VeliteWebpackPlugin._instance) return VeliteWebpackPlugin._instance;
          VeliteWebpackPlugin._instance = this;
        }
        apply(compiler: import("webpack").Compiler) {
          compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
            if (this.isWatching(compiler)) return;
            const { build } = await import("velite");
            await build({ logLevel: "error" });
          });
          compiler.hooks.watchRun.tapPromise("VeliteWebpackPlugin", async () => {
            const { build } = await import("velite");
            await build({ logLevel: "error", watch: true });
          });
        }
        private isWatching(compiler: import("webpack").Compiler) {
          return compiler.options.watch;
        }
      })()
    );
    return config;
  },
};

export default nextConfig;
