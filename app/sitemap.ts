import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://inndeso.com.mx'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/servicios',
    '/servicios/paginas-web',
    '/servicios/tienda-en-linea',
    '/proyectos',
    '/proyectos/geojornada',
    '/proyectos/sana-life',
    '/proyectos/movilsource',
    '/proyectos/marshop',
    '/proyectos/cellgo',
    '/proyectos/libremente',
    '/proyectos/planifica40',
    '/precios',
    '/proceso',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '/' ? 1 : route === '/servicios' || route === '/proyectos' ? 0.85 : 0.7,
  }))
  return routes
}
