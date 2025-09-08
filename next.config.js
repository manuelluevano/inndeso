/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isProduction ? '/inndeso' : '',
  assetPrefix: isProduction ? '/inndeso/' : '',
}

module.exports = nextConfig