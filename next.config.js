/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "images.pexels.com",
      "i.postimg.cc",
      "i.ibb.co",
    ],
  },
};

module.exports = nextConfig;
