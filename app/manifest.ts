import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'INNDESO',
    short_name: 'INNDESO',
    description: 'Software a la medida, GPS en vivo, apps multiplataforma, web, sistemas empresariales y servidores.',
    start_url: '/',
    lang: 'es',
    display: 'standalone',
    background_color: '#07101f',
    theme_color: '#07101f',
    icons: [
      { src: '/icono.png', type: 'image/png', sizes: '512x512' },
      { src: '/favicon.PNG', type: 'image/png', sizes: '192x192' },
    ],
  }
}
