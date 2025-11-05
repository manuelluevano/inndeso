import type { Metadata } from 'next'

const SERVICE_NAME = 'Tiendas en línea y automatización de ventas'
const SERVICE_DESCRIPTION =
  'Construimos tiendas en línea conectadas a inventario, pagos, logística y CRM para que vendas sin procesos manuales.'

export const metadata: Metadata = {
  title: 'Tiendas en línea y automatización',
  description: SERVICE_DESCRIPTION,
  keywords: [
    'tienda en línea profesional',
    'ecommerce en Guadalajara',
    'automatización de inventario',
    'pasarela de pagos México',
  ],
  alternates: { canonical: '/servicios/tienda-en-linea' },
  openGraph: {
    title: 'Tiendas en línea y automatización | INNDESO',
    description: SERVICE_DESCRIPTION,
    url: '/servicios/tienda-en-linea',
  },
}

const highlights = [
  {
    title: 'Integraciones clave',
    detail: 'Conectamos catálogo, inventario, ERP, facturación y logística (99Minutos, Estafeta, UPS).',
  },
  {
    title: 'Conversiones optimizadas',
    detail: 'Checkout de un paso, recuperación de carrito, promociones y analítica de comportamiento.',
  },
  {
    title: 'Operación centralizada',
    detail: 'Panel para pedidos, devoluciones, reportes diarios y conciliación de pagos.',
  },
]

const automations = [
  'Sincronización automática entre tiendas físicas y digital',
  'Alertas de stock crítico y flujos de reabastecimiento',
  'Notificaciones a clientes por email / WhatsApp en cada estado del pedido',
  'Conciliación bancaria y reportes para contabilidad',
  'Dashboards con métricas (ticket promedio, conversión, recurrencia)',
]

export default function TiendaEnLineaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: SERVICE_NAME,
    description: SERVICE_DESCRIPTION,
    serviceType: 'EcommerceDevelopment',
    provider: { '@type': 'Organization', name: 'INNDESO' },
    areaServed: 'MX',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'MXN',
      lowPrice: '7500',
      highPrice: '38000',
    },
  }

  const WHATSAPP_URL =
    'https://wa.me/523312050703?text=Hola%20INNDESO%2C%20necesito%20una%20tienda%20en%20l%C3%ADnea%20para%20mi%20negocio'

  return (
    <main className="relative bg-gradient-to-b from-white to-neutral-50 py-16 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <section className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-600">
              Ecommerce
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">{SERVICE_NAME}</h1>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Te entregamos una tienda lista para vender: catálogo administrable, pasarela de pagos, checkout optimizado y flujos
              automáticos para inventario, facturación y logística.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Cotizar mi tienda
              </a>
              <a
                href="/proyectos"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-6 py-3 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-50"
              >
                Ver e-commerce reales
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Stack recomendado</h2>
            <ul className="mt-4 space-y-3 text-sm text-neutral-700">
              {[
                'Frontend: Next.js + TailwindCSS',
                'Headless CMS: Sanity o Contentful',
                'Pasarelas: Stripe, OpenPay, Conekta',
                'Logística: 99Minutos, SkydropX, Estafeta',
                'Automatizaciones: Make, n8n o Zapier',
                'Analítica: GA4, Pixel, Klaviyo',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900">Beneficios para tu ecommerce</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <article key={item.title} className="rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-sm backdrop-blur">
                <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-3 text-sm text-neutral-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900">Automatizaciones clave</h2>
          <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-neutral-700">
            {automations.map((item) => (
              <li key={item} className="rounded-2xl border border-neutral-200 bg-white/80 px-5 py-4 shadow-sm backdrop-blur">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 text-xs font-semibold">
                  ✓
                </span>
                <span className="ml-3">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-emerald-100 bg-white shadow-lg shadow-emerald-500/5 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-neutral-900">¿Listo para vender sin fricciones?</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Agendemos una llamada para revisar tus procesos actuales y proponerte un plan de automatización por fases.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Agenda por WhatsApp
              </a>
              <a
                href="mailto:hola@inndeso.com.mx"
                className="inline-flex items-center justify-center rounded-xl border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-50"
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
