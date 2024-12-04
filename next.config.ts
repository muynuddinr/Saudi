import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['your-image-domain.com'], // Add your image domains here
  },
  compiler: {
    styledComponents: true, // Enable styled-components
  },
};

export default nextConfig;
