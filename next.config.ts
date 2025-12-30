import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // Use remotePatterns for external images (preferred over `domains`). Keep this list minimal and trusted.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "chatgpt.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
