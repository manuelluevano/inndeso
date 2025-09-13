import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://inndeso.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/servicios', '/proyectos', '/proceso'].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '/' ? 1 : 0.7,
  }))
  return routes
}
