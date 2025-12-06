import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/tool-rental',
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
};

export default nextConfig;
