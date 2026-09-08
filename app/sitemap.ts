import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://inndeso.com.mx'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/servicios/',
    '/servicios/paginas-web/',
    '/servicios/tienda-en-linea/',
    '/servicios/software-a-la-medida-guadalajara/',
    '/servicios/sistemas-de-inventario-y-ventas/',
    '/servicios/desarrollo-de-aplicaciones-moviles/',
    '/servicios/gps-y-mapas-en-vivo/',
    '/servicios/control-de-personal/',
    '/servicios/sistema-punto-de-venta/',
    '/servicios/crm-para-empresas/',
    '/servicios/software-para-talleres/',
    '/servicios/sistemas-para-distribuidoras/',
    '/servicios/automatizacion-de-procesos/',
    '/servicios/servidores-y-respaldos-para-empresas/',
    '/proyectos/',
    '/proyectos/geojornada/',
    '/proyectos/sana-life/',
    '/proyectos/movilsource/',
    '/proyectos/marshop/',
    '/proyectos/cellgo/',
    '/proyectos/sercomin/',
    '/proyectos/fertikhor/',
    '/proyectos/libremente/',
    '/proyectos/planifica40/',
    '/precios/',
    '/proceso/',
    '/privacidad/',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: 'weekly' as const,
    priority: route === '/' ? 1 : route === '/servicios/' || route === '/proyectos/' ? 0.85 : 0.7,
  }))
  return routes
}
