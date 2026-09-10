import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGitHubPages
  ? (process.env.NEXT_PUBLIC_BASE_PATH ?? '/Homepage')
  : '';

const nextConfig: NextConfig = {
  output: isGitHubPages ? 'export' : undefined,
  basePath,
  assetPrefix: basePath,
  trailingSlash: isGitHubPages,
};

export default nextConfig;
