import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const pagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Pin file tracing to this project and keep the local preview presentation-only.
  turbopack: { root: process.cwd() },
  devIndicators: false,
  // All images are already stored in public/assets, so serve them directly.
  images: { unoptimized: true },
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: pagesBasePath,
        assetPrefix: pagesBasePath,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
