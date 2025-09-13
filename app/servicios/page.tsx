import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Servicios de desarrollo de software',
  description:
    'Aplicaciones web y móviles, APIs e integraciones, Cloud & DevOps. Equipo senior con entregas ágiles y enfoque en calidad.',
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
    desc: 'Desarrollamos tu sitio o sistema web a la medida. Carga rápida, se ve bien en celular y es fácil de usar.',
    bullets: ['Diseño y desarrollo completos', 'Formularios y áreas con acceso', 'Optimizado para buscadores'],
  },
  {
    title: 'Aplicación móvil',
    desc: 'Publicamos tu app para iOS y Android. Ideal para pedidos, reservas o atención a clientes.',
    bullets: ['Diseño de pantallas', 'Notificaciones y uso sin conexión', 'Publicación en tiendas'],
  },
  {
    title: 'Integración entre sistemas',
    desc: 'Hacemos que tus sistemas “se hablen”: ERP, CRM, pagos, WhatsApp y más, para evitar tareas manuales.',
    bullets: ['Conexión con proveedores (APIs)', 'Automatizaciones', 'Reportes y tableros'],
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

  const WHATSAPP_URL =
    'https://wa.me/523315203120?text=Hola%20INNDESO%2C%20quiero%20cotizar%20un%20proyecto%20de%20software'

  return (
    <main className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-neutral-50 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 text-blue-700 px-3 py-1 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Qué hacemos
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">Servicios pensados para tu negocio</h1>
            <p className="mt-4 max-w-2xl text-neutral-700">Hablamos en claro, sin tecnicismos. Te entregamos un producto que funcione, a tiempo y con respaldo.</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-600/30 transition"
            >
              Solicitar cotización
            </a>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article key={s.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm overflow-hidden">
              <div className={`-mx-6 -mt-6 mb-4 h-1.5 bg-gradient-to-r ${['from-blue-600 to-indigo-600','from-emerald-600 to-teal-600','from-amber-500 to-orange-500'][i%3]} `} />
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-700">
                {i===0 ? '🌐' : i===1 ? '📱' : '🔗'}
              </div>
              <h2 className="mt-3 text-lg font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-800 list-disc pl-4">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
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

      {/* Sección de preguntas frecuentes removida */}
    </main>
  )
}
