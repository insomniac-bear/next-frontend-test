/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
 sassOptions: {
  path: path.join(__dirname, 'styles')
  },
 images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'fakestoreapi.com',
      port: '',
      pathname: '/img/**',
    },
  ],
 }
}

module.exports = nextConfig
