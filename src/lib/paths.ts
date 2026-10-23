/**
 * Resolves a public asset path against the deployment base path.
 *
 * NEXT_PUBLIC_BASE_PATH is inlined at build time:
 *  - empty string for normal server hosting and root-domain deployments
 *    (e.g. https://<user>.github.io/)
 *  - "/<repo-name>" for GitHub Pages sub-path deployments
 *    (e.g. https://<user>.github.io/<repo-name>/)
 *
 * Next.js prefixes _next/* assets automatically, but unoptimized
 * next/image sources and metadata icons are NOT prefixed, hence
 * every direct reference to /images/* or /logo.svg goes through here.
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
