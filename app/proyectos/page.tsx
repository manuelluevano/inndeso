import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Proyectos de software (portafolio)',
  description:
    'Muestra de proyectos: ERP, e‑commerce, apps móviles, integraciones y dashboards. Productos reales, mantenibles y en producción.',
  keywords: [
    'portafolio de páginas web',
    'ejemplos de tiendas en línea',
    'casos de éxito en apps móviles',
    'sistemas de punto de venta desarrollados',
  ],
  alternates: { canonical: '/proyectos' },
  openGraph: {
    title: 'Proyectos | INNDESO',
    description: 'Portafolio con ejemplos web, móvil, APIs e integraciones.',
    url: '/proyectos'
  },
}

const items = [
  {
    title: 'E-commerce con gestión integral',
    tags: ['Next.js', 'NestJS', 'Stripe'],
    img: '/portfolio/ECCOMERCE-SERCOMIN/ecommerce-sercomin-4.jpeg',
    result: '+32% en ventas mayoristas con pedidos automatizados',
    summary: 'Catálogo B2B, inventario sincronizado, conciliación de pagos y reportes diarios.',
    badge: 'Caso destacado',
    message: 'Hola INNDESO, quiero que me muestren el caso del e-commerce con gestión integral.',
  },
  {
    title: 'App móvil multirrol para pollería',
    tags: ['React Native', 'FastAPI', 'iOS', 'Android'],
    img: '/portfolio/APP-POLLOS/app-polleria-cover.jpeg',
    result: 'Pedidos organizados por rol (cliente, repartidor y almacén)',
    summary: 'Compras en app, rutas de reparto y control de inventario conectado al POS.',
    message: 'Hola INNDESO, necesito una app como la multirrol para pollería.',
  },
  {
    title: 'Sistema administrativo de servicios',
    tags: ['Next.js', 'NestJS', 'PostgreSQL'],
    img: '/portfolio/ADMINISTRACION-LOCAL/admin-local-1.png',
    result: 'Seguimiento de servicios y almacén en más de 3 sucursales',
    summary: 'Órdenes de trabajo, cobranza, inventario y reportes por sucursal en un panel.',
    message: 'Hola INNDESO, me interesa un sistema administrativo de servicios.',
  },
  {
    title: 'Landing industrial para envases',
    tags: ['Next.js', 'Landing', 'WhatsApp'],
    img: '/portfolio/SUPERENVASES/superenvases-1.png',
    result: 'Cotizaciones rápidas con CTA directo a WhatsApp',
    summary: 'Página informativa para fabricación de envases plásticos con catálogo y proceso.',
    message: 'Hola INNDESO, quiero una landing como la de Super Envases.',
  },
  {
    title: 'Landing química de fertilizantes',
    tags: ['Next.js', 'B2B', 'Lead Gen'],
    img: '/portfolio/FERTIKHOR/fertikhor-1.png',
    result: 'Prospectos industriales captados por formulario y redes',
    summary: 'Fertilizantes de alta concentración con secciones técnicas y contactos.',
    message: 'Hola INNDESO, quiero una landing como la de Fertikhor.',
  },
  {
    title: 'Punto de Venta Omnicanal',
    tags: ['NestJS', 'Auth', 'Hardware'],
    img: '/portfolio/POS/Screenshot 2025-11-03 230138.png',
    result: 'Inventarios centralizados y cajas conciliadas en tiempo real',
    summary: 'Ventas, stock, usuarios y reportes fiscales integrados con hardware y sucursales.',
    message: 'Hola INNDESO, quiero un punto de venta omnicanal como el del portafolio.',
  },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Proyectos',
    hasPart: items.map((p) => ({
      '@type': 'CreativeWork',
      name: p.title,
      description: p.result,
    })),
  }

  const WHATSAPP_URL =
    'https://wa.me/523312050703?text=Hola%20INNDESO%2C%20quiero%20conocer%20sus%20proyectos.'
  const buildQuoteLink = (message: string) =>
    `https://wa.me/523312050703?text=${encodeURIComponent(message)}`

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
        name: 'Proyectos',
        item: 'https://inndeso.com.mx/proyectos',
      },
    ],
  }

  return (
    <main className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-neutral-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold text-blue-700">
              Casos reales
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Productos digitales que ya están en producción
            </h1>
            <p className="mt-4 max-w-2xl text-neutral-700">
              Cada proyecto resolvió un problema concreto de negocio: ventas, logística, inventarios o atención a clientes.
              Aquí puedes ver capturas reales y los resultados obtenidos.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              {[
                'E-commerce B2B con pedidos automatizados y conciliación bancaria',
                'Apps móviles que organizan pedidos, repartidores y almacén',
                'Sistemas administrativos que reemplazan hojas de cálculo en sucursales',
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
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Pedir demo en vivo
              </a>
              <a
                href="/#proyectos"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-6 py-3 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-100"
              >
                Volver al portafolio principal
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
            <h2 className="text-sm font-semibold text-neutral-600 uppercase tracking-wide">Métricas clave</h2>
            <dl className="mt-4 space-y-3">
              {[
                { label: 'Tasa de repetición', value: '85%', caption: 'Clientes que vuelven a contratarnos' },
                { label: 'Tiempo promedio de entrega', value: '6 semanas', caption: 'De kickoff a despliegue en producción' },
                { label: 'Equipos involucrados', value: 'Ventas · Operaciones · Dirección', caption: 'Participamos con stakeholders clave' },
              ].map((metric) => (
                <div key={metric.label}>
                  <dt className="text-xs uppercase tracking-wide text-neutral-400">{metric.label}</dt>
                  <dd className="text-lg font-semibold text-neutral-900">{metric.value}</dd>
                  <p className="text-xs text-neutral-500">{metric.caption}</p>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white/80 shadow-sm backdrop-blur transition hover:border-blue-200 hover:shadow-lg"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-neutral-900/5">
                {p.badge && (
                  <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold text-blue-700">
                    {p.badge}
                  </span>
                )}
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  priority={i < 2}
                />
              </div>
              <div className="p-5">
                <h2 className="text-lg font-semibold text-neutral-900">{p.title}</h2>
                {p.result && <p className="mt-2 text-sm text-neutral-600">{p.result}</p>}
                {p.summary && <p className="mt-2 text-xs text-neutral-500">{p.summary}</p>}
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t, idx) => (
                    <span key={idx} className="text-xs rounded-full bg-neutral-100 px-2 py-1 text-neutral-700">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={buildQuoteLink(p.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-800 transition hover:border-blue-200 hover:text-blue-700"
                >
                  Solicitar demo de este caso
                </a>
              </div>
            </article>
          ))}
        </div>
        <section className="mt-14 rounded-3xl border border-neutral-200 bg-white/85 p-6 sm:p-10 shadow-sm backdrop-blur">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold text-neutral-900">Qué cuidamos en cada proyecto</h2>
              <p className="mt-2 text-sm text-neutral-600">
                No solo entregamos código. Documentamos decisiones, métricas y accesos para que tu equipo pueda operar con confianza.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-neutral-700">
              {[
                'Documentación funcional y técnica',
                'Tableros de métricas y reportes',
                'Procesos de QA y seguridad',
                'Capacitación al equipo interno',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3">
                  <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-blue-100 bg-white shadow-lg shadow-blue-500/5 p-6 sm:p-9">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-neutral-900">¿Quieres ver uno de estos proyectos en vivo?</h3>
              <p className="mt-1 text-sm text-neutral-600">Agenda una demo y te mostramos el flujo completo, métricas y aprendizajes.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Agendar demo
              </a>
              <a
                href="mailto:hola@inndeso.com.mx"
                className="inline-flex items-center justify-center rounded-xl border border-blue-200 px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Pedir dossier PDF
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
