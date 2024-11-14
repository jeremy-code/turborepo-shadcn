import bundleAnalyzer from "@next/bundle-analyzer";

import type { NextConfig } from "next";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  // Only enable transpilePackages if you are using Pages Router instead of App Router
  // transpilePackages: ["@repo/ui"],
  experimental: {
    webpackBuildWorker: true,
    reactCompiler: true,
  },
} satisfies NextConfig;

export default withBundleAnalyzer(nextConfig);
