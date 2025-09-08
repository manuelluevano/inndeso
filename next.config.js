/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Esto hace que Next.js genere archivos estáticos
  trailingSlash: true, // Importante para GitHub Pages
  images: {
    unoptimized: true // Necesario para export estático
  },
  // basePath: '/inndeso' // DESCOMENTA ESTA LÍNEA SI TU REPOSITORIO SE LLAMA "inndeso"
}

module.exports = nextConfig