import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Servicios de desarrollo de software',
  description:
    'Aplicaciones web y móviles, APIs e integraciones, Cloud & DevOps. Equipo senior con entregas ágiles y enfoque en calidad.',
  keywords: [
    'páginas web a la medida',
    'tiendas en línea Guadalajara',
    'desarrollo de sistemas internos',
    'automatización de procesos para negocios',
    'apps móviles para empresas',
  ],
  alternates: { canonical: '/servicios' },
  openGraph: {
    title: 'Servicios | INNDESO',
    description:
      'Soluciones end‑to‑end: Web, Móvil, APIs, Integraciones y DevOps.',
    url: '/servicios'
  },
}

const services = [
  {
    title: 'Sistema o página web',
    desc: 'Creamos páginas web y portales que cargan rápido, se ven bien en celular y convierten visitas en contactos.',
    bullets: [
      'Copy y diseño orientados a ventas',
      'Formularios que llegan directo a tu correo/CRM',
      'Optimización técnica para buscadores',
    ],
    href: '/servicios/paginas-web',
  },
  {
    title: 'Aplicación móvil',
    desc: 'Desarrollamos apps iOS y Android para pedidos, reservas o atención a clientes con seguimiento en tiempo real.',
    bullets: [
      'Pantallas UX listas para producción',
      'Notificaciones push, pagos y uso sin conexión',
      'Publicación y soporte en App Store / Google Play',
    ],
  },
  {
    title: 'Integración entre sistemas',
    desc: 'Conectamos ERP, POS, pagos y WhatsApp para que la información se actualice sola y tu equipo deje las hojas de cálculo.',
    bullets: [
      'Bots y webhooks que disparan tareas automáticas',
      'Dashboards y reportes listos para gerencia',
      'Control de accesos y registros de auditoría',
    ],
    href: '/servicios/tienda-en-linea',
  },
]

const packageHighlights = [
  {
    name: 'Lanzamiento web',
    price: 'Desde $3,500 MXN',
    summary: 'Ideal para campañas, eventos o negocios que necesitan presencia digital inmediata.',
    message: 'Hola INNDESO, quiero cotizar el paquete Lanzamiento web.',
  },
  {
    name: 'Tienda con automatizaciones',
    price: 'Desde $8,000 MXN',
    summary: 'Perfecta para vender en línea con pagos, envíos y facturación conectados.',
    message: 'Hola INNDESO, me interesa la Tienda con automatizaciones.',
    featured: true,
  },
  {
    name: 'Sistema administrativo a la medida',
    price: 'Cotización personalizada',
    summary: 'Para empresas que manejan inventario, sucursales y procesos internos complejos.',
    message: 'Hola INNDESO, necesito un sistema administrativo a la medida.',
  },
]

// FAQ removido por solicitud

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Servicios',
    hasPart: services.map((s) => ({
      '@type': 'Service',
      name: s.title,
      description: s.desc,
      provider: { '@type': 'Organization', name: 'INNDESO' },
      areaServed: 'MX',
      availableLanguage: ['es'],
    })),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://inndeso.com.mx/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Servicios',
        item: 'https://inndeso.com.mx/servicios',
      },
    ],
  }

  const WHATSAPP_URL =
    'https://wa.me/523312050703?text=Hola%20INNDESO%2C%20quiero%20cotizar%20un%20proyecto%20de%20software'
  const buildQuoteLink = (message: string) =>
    `https://wa.me/523312050703?text=${encodeURIComponent(message)}`

  return (
    <main className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-neutral-50 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 text-blue-700 px-3 py-1 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Qué hacemos
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">Servicios pensados para tu negocio</h1>
            <p className="mt-4 max-w-2xl text-neutral-700">
              Hablamos en claro, sin tecnicismos. Diseñamos, desarrollamos y entregamos soluciones que generan ventas reales desde el primer mes.
            </p>
            <ul className="mt-5 max-w-xl space-y-2 text-sm text-neutral-700">
              {[
                'Sitios listos para anunciarse en menos de 4 semanas',
                'Automatizaciones que eliminan tareas manuales',
                'Equipo senior con comunicación semanal y soporte incluido',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-600/30 transition"
              >
                Solicitar cotización
              </a>
              <a
                href="/proyectos"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-6 py-3 text-sm font-semibold text-neutral-800 hover:bg-neutral-50 transition"
              >
                Ver proyectos reales
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-neutral-500">
              <span className="inline-flex items-center gap-2">
                <span className="inline-flex -space-x-2 overflow-hidden">
                  <span className="h-5 w-5 rounded-full bg-emerald-500/20 border border-emerald-500/30" />
                  <span className="h-5 w-5 rounded-full bg-amber-500/20 border border-amber-500/30" />
                  <span className="h-5 w-5 rounded-full bg-blue-500/20 border border-blue-500/30" />
                </span>
                50+ proyectos entregados
              </span>
              <span>Clientes: SERCOMIN • Pollería Express • Servicios Locales</span>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-blue-500/10 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <Image src="/portfolio/ecommerce.svg" alt="Ejemplo de proyecto" width={640} height={420} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios detallados, en palabras simples */}
      <section className="bg-neutral-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Soluciones que construimos para ti</h2>
            <p className="mt-3 text-neutral-600">
              Cada servicio incluye diseño, desarrollo, QA y documentación para que puedas operar sin depender de nosotros.
            </p>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="group rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:border-blue-200 hover:shadow-lg"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-700 text-lg">
                  {i === 0 ? '🌐' : i === 1 ? '📱' : '🔗'}
                </div>
                <h2 className="mt-3 text-lg font-semibold">{s.title}</h2>
                <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <svg className="mt-1 h-4 w-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                  {s.href && (
                    <li className="pt-3">
                      <a
                        href={s.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                      >
                        Ver detalles del servicio
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </li>
                  )}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Qué recibes siempre */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-dots" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold">Siempre recibes</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Plan y calendario claros',
              'Diseño + desarrollo + pruebas',
              'Capacitación breve para tu equipo',
              'Garantía y soporte inicial',
            ].map((i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-5 text-sm text-neutral-800 flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
                {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paquetes sugeridos */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-neutral-50 border-t border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Paquetes listos para iniciar rápido</h2>
            <p className="mt-3 text-neutral-600">
              Ajustamos cada plan a tu industria. Escríbenos y te mostramos casos y estimados basados en proyectos reales.
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packageHighlights.map((pkg) => (
              <article
                key={pkg.name}
                className={`group rounded-3xl border bg-white/85 p-6 shadow-sm backdrop-blur transition hover:border-blue-200 hover:shadow-lg ${
                  pkg.featured ? 'border-blue-200 shadow-blue-200/40' : 'border-neutral-200'
                }`}
              >
                {pkg.featured && (
                  <span className="inline-flex items-center rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold text-blue-700">
                    Más solicitado
                  </span>
                )}
                <h3 className="mt-3 text-xl font-semibold text-neutral-900">{pkg.name}</h3>
                <p className="mt-1 text-sm text-neutral-500">{pkg.summary}</p>
                <p className="mt-4 text-sm font-semibold text-blue-600">{pkg.price}</p>
                <a
                  href={buildQuoteLink(pkg.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Cotizar este plan
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo trabajamos contigo */}
      <section className="bg-neutral-50 py-12 sm:py-16 border-t border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold">Cómo trabajamos contigo</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              { t: 'Proyecto definido', d: 'Presupuesto y tiempos aproximados desde el inicio.' },
              { t: 'Acompañamiento cercano', d: 'Reuniones cortas y avances visibles cada semana.' },
              { t: 'Soporte y mejoras', d: 'Seguimos contigo para pulir y crecer el sistema.' },
            ].map((m, idx) => (
              <article key={m.t} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600/10 text-blue-700 font-semibold">{idx+1}</span>
                  <h3 className="font-semibold">{m.t}</h3>
                </div>
                <p className="mt-2 text-sm text-neutral-600">{m.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Garantía */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl border border-neutral-200 bg-white/80 shadow-sm backdrop-blur">
          <div className="grid gap-8 lg:grid-cols-[2fr,3fr] items-center p-8 sm:p-10">
            <div>
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Garantía
              </span>
              <h3 className="mt-4 text-2xl font-bold text-neutral-900">Entrega con seguimiento semanal y soporte incluido</h3>
              <p className="mt-3 text-sm text-neutral-600">
                Reportamos avances cada 7 días. Si algo no va conforme a lo esperado, hacemos ajustes en la siguiente iteración sin costo adicional.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: 'Kickoff claro', desc: 'Mapeamos objetivos, métricas y responsables en la primera semana.' },
                { title: 'Demo constante', desc: 'Te mostramos el producto navegable para recoger feedback temprano.' },
                { title: 'Soporte 30 días', desc: 'Incluido para ajustes, dudas y monitoreo después del lanzamiento.' },
                { title: 'Propiedad completa', desc: 'Código, documentación y accesos quedan a nombre de tu empresa.' },
              ].map((item) => (
                <article key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                  <h4 className="font-semibold text-neutral-900">{item.title}</h4>
                  <p className="mt-2 text-sm text-neutral-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-blue-50 via-white to-blue-50" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-blue-100 bg-white shadow-lg shadow-blue-500/5 p-6 sm:p-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900">Agenda una llamada de diagnóstico gratuita</h3>
              <p className="mt-2 text-neutral-600 text-sm sm:text-base">En 20 minutos evaluamos tu idea y te compartimos referencias y estimados reales.</p>
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
        </div>
      </section>

      {/* Sección de preguntas frecuentes removida */}
    </main>
  )
}
