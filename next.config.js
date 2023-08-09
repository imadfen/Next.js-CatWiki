/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  images: {
    domains: ["cdn2.thecatapi.com"],
  },
};

module.exports = nextConfig;
