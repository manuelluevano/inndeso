import type { Metadata } from 'next'

const SERVICE_NAME = 'Páginas web corporativas y landing pages'
const SERVICE_DESCRIPTION =
  'Diseñamos y desarrollamos páginas web rápidas, optimizadas para buscadores y enfocadas en convertir visitas en clientes.'

export const metadata: Metadata = {
  title: 'Páginas web y landing pages',
  description: SERVICE_DESCRIPTION,
  keywords: [
    'páginas web profesionales',
    'landing page de ventas',
    'diseño web en Guadalajara',
    'sitio corporativo administrable',
  ],
  alternates: { canonical: '/servicios/paginas-web' },
  openGraph: {
    title: 'Páginas web y landing pages | INNDESO',
    description: SERVICE_DESCRIPTION,
    url: '/servicios/paginas-web',
  },
}

const benefits = [
  {
    title: 'Listas para anunciarse',
    detail: 'Creamos copy, diseño y estructura SEO-friendly para que puedas lanzar campañas en días, no semanas.',
  },
  {
    title: 'Integraciones listas',
    detail: 'Conectamos formularios con tu CRM, WhatsApp o correo y configuramos analítica (GA4, Meta Pixel, LinkedIn).',
  },
  {
    title: 'Gestión sencilla',
    detail: 'Usamos CMS ligeros para que puedas editar textos, productos o testimonios sin depender de nosotros.',
  },
]

const process = [
  {
    step: '1. Descubrimiento y estructura',
    detail: 'Sesión de 45 minutos para entender objetivos, público y oferta. Entregamos mapa del sitio y wireframe.',
  },
  {
    step: '2. Diseño y contenido',
    detail: 'Realizamos diseño responsivo en Figma y redactamos mensajes orientados a conversión.',
  },
  {
    step: '3. Desarrollo e integraciones',
    detail: 'Implementamos en Next.js, conectamos formularios y configuramos analítica.',
  },
  {
    step: '4. QA y lanzamiento',
    detail: 'Pruebas multi-dispositivo, checklist SEO técnico y capacitación de 30 minutos a tu equipo.',
  },
]

export default function PaginasWebPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: SERVICE_NAME,
    description: SERVICE_DESCRIPTION,
    provider: { '@type': 'Organization', name: 'INNDESO' },
    areaServed: 'MX',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landing page de lanzamiento' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sitio corporativo SEO' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Micrositio para campañas' } },
      ],
    },
  }

  const WHATSAPP_URL =
    'https://wa.me/523312050703?text=Hola%20INNDESO%2C%20quiero%20cotizar%20una%20p%C3%A1gina%20web%20para%20mi%20empresa'

  return (
    <main className="relative bg-gradient-to-b from-white to-neutral-50 py-16 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <section className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
              Servicio
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">{SERVICE_NAME}</h1>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Diseñamos páginas web que cargan rápido, comunican claramente tu valor y convierten visitas en contactos. Recupera el
              control de tu mensaje con un sitio administrable y listo para campañas de marketing digital.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Solicitar cotización
              </a>
              <a
                href="/proyectos"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-6 py-3 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-50"
              >
                Ver casos reales
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">¿Qué incluye?</h2>
            <ul className="mt-4 space-y-3 text-sm text-neutral-700">
              {[
                'Wireframe y arquitectura de información',
                'Diseño responsive en Figma (desktop + mobile)',
                'Desarrollo en Next.js optimizado para SEO',
                'Integración con CRM, newsletter o WhatsApp',
                'Configuración GA4, Meta Pixel y eventos clave',
                'Checklist técnico: sitemap, metatags y rendimiento',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900">Beneficios para tu negocio</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-sm backdrop-blur">
                <h3 className="text-lg font-semibold text-neutral-900">{benefit.title}</h3>
                <p className="mt-3 text-sm text-neutral-600">{benefit.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900">Proceso en 4 semanas</h2>
          <ul className="mt-6 space-y-4">
            {process.map((phase) => (
              <li key={phase.step} className="rounded-3xl border border-neutral-200 bg-white/80 p-5 shadow-sm backdrop-blur">
                <p className="text-sm font-semibold text-blue-600">{phase.step}</p>
                <p className="mt-2 text-sm text-neutral-600">{phase.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-blue-100 bg-white shadow-lg shadow-blue-500/5 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-neutral-900">¿Listo para tu nueva página?</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Agenda una llamada de 20 minutos y recibe una propuesta con tiempos, inversión y referencias.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Agendar por WhatsApp
              </a>
              <a
                href="mailto:hola@inndeso.com.mx"
                className="inline-flex items-center justify-center rounded-xl border border-blue-200 px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Solicitar propuesta
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
