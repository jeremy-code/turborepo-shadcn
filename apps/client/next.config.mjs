import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only enable this if you are using Pages Router instead of App Router
  // transpilePackages: ["@repo/ui"],
  experimental: {
    ppr: true,
    reactCompiler: true,
    webpackBuildWorker: true,
  },
};

export default withBundleAnalyzer(nextConfig);
