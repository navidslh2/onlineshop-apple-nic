import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    domains: ['localhost','navidsalehi-cv.ir'],
  },
  productionBrowserSourceMaps: true
};

module.exports = nextConfig
export default nextConfig;

