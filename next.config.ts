import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // command next config to include all assets in the build phase
  }
};

export default nextConfig;
