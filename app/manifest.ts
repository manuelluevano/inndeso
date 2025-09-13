import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'INNDESO',
    short_name: 'INNDESO',
    description: 'Desarrollo de software a la medida: web, móvil, APIs e integraciones.',
    start_url: '/',
    lang: 'es',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      { src: '/icono.png', type: 'image/png', sizes: '512x512' },
      { src: '/favicon.PNG', type: 'image/png', sizes: '192x192' },
    ],
  }
}

