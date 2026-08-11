import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const pagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // A stray lockfile in the home directory makes Next infer the wrong workspace
  // root, which throws off file tracing. Pin it to this project. `process.cwd()`
  // rather than `__dirname`: vinext loads this config as ESM, where it is undefined.
  turbopack: { root: process.cwd() },
  // All images are already stored in public/assets. Serving them directly keeps
  // local vinext development independent from Cloudflare's ASSETS/IMAGES bindings.
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
