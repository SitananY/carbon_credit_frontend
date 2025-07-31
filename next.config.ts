import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ ปิด ESLint Error ตอน build
  },
   typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true, // ✅ ทำให้ใช้ fill="currentColor"
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
