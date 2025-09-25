import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    domains: ['localhost'],
  },
  productionBrowserSourceMaps: true
};

module.exports = nextConfig
export default nextConfig;

