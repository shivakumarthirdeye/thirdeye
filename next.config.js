/** @type {import('next').NextConfig} */
const withVideos = require('next-videos');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withVideos();

// module.exports = nextConfig;

// // next.config.js
