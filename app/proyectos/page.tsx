import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Proyectos de software (portafolio)',
  description:
    'Muestra de proyectos: ERP, e‑commerce, apps móviles, integraciones y dashboards. Productos reales, mantenibles y en producción.',
  alternates: { canonical: '/proyectos' },
  openGraph: {
    title: 'Proyectos | INNDESO',
    description: 'Portafolio con ejemplos web, móvil, APIs e integraciones.',
    url: '/proyectos'
  },
}

const items = [
  { title: 'ERP ligero', tags: ['Next.js', 'Node', 'PostgreSQL'], img: '/portfolio/erp.svg' },
  { title: 'App móvil de pedidos', tags: ['React Native', 'FastAPI'], img: '/portfolio/mobile-orders.svg' },
  { title: 'Dashboard IoT', tags: ['React', 'WebSockets'], img: '/portfolio/dashboard-iot.svg' },
  { title: 'E‑commerce B2B', tags: ['Next.js', 'Stripe'], img: '/portfolio/ecommerce.svg' },
  { title: 'Integración CRM', tags: ['APIs', 'Webhook'], img: '/portfolio/crm.svg' },
  { title: 'Portal de clientes', tags: ['NestJS', 'Auth'], img: '/portfolio/portal.svg' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Proyectos',
    hasPart: items.map((p) => ({ '@type': 'CreativeWork', name: p.title })),
  }

  return (
    <main className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-neutral-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Proyectos</h1>
        <p className="mt-3 max-w-2xl text-neutral-700">Una muestra de productos que hemos construido.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  priority={i < 2}
                />
              </div>
              <div className="p-5">
                <h2 className="font-semibold">{p.title}</h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t, idx) => (
                    <span key={idx} className="text-xs rounded-full bg-neutral-100 px-2 py-1 text-neutral-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

