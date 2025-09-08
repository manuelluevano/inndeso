/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/inndeso',
  assetPrefix: '/inndeso/',  // ← AGREGA ESTO
}

module.exports = nextConfig