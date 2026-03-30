import type { NextConfig } from 'next';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.framer.com',
      },
      {
        protocol: 'https',
        hostname: 'y4pdgnepgswqffpt.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: '5pdgnepgswqffpt.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dribbble.com',
      },
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
      },
      { protocol: 'https',
         hostname: '*' 
      },
    ],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
