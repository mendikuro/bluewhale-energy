import type { NextConfig } from "next";

/**
 * Two build modes:
 *
 * 1. Default (server mode) — runs locally / on Node hosts with the
 *    /api/contact route and SQLite persistence.
 *
 * 2. Static export (STATIC_EXPORT=1) — emits a fully static site into
 *    ./out for GitHub Pages / Netlify / any static host.
 *    Set NEXT_PUBLIC_BASE_PATH="/<repo-name>" when the site is served
 *    from a sub-path (e.g. https://user.github.io/<repo-name>/).
 */
const isStaticExport = process.env.STATIC_EXPORT === "1";
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");

const nextConfig: NextConfig = isStaticExport
  ? {
      output: "export",
      images: { unoptimized: true },
      basePath: basePath || undefined,
      typescript: {
        ignoreBuildErrors: true,
      },
      reactStrictMode: false,
    }
  : {
      output: "standalone",
      typescript: {
        ignoreBuildErrors: true,
      },
      reactStrictMode: false,
    };

export default nextConfig;
