/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // genera /out estático
  trailingSlash: true,       // evita 404 en GitHub Pages
  images: { unoptimized: true } // desactiva Image Optimization del server
};
module.exports = nextConfig;
