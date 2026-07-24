import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile in the home directory makes Next infer the wrong workspace
  // root, which throws off file tracing. Pin it to this project. `process.cwd()`
  // rather than `__dirname`: vinext loads this config as ESM, where it is undefined.
  turbopack: { root: process.cwd() },
};

export default nextConfig;
