import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Proceso de trabajo',
  description:
    'Nuestro proceso en 5 pasos: descubrimiento, diseño, desarrollo, QA y despliegue. Transparencia y entregas continuas.',
  keywords: [
    'proceso de desarrollo de software',
    'cómo trabajamos en proyectos digitales',
    'metodología ágil para páginas web',
    'implementación de sistemas a la medida',
  ],
  alternates: { canonical: '/proceso' },
  openGraph: { title: 'Proceso | INNDESO', url: '/proceso' },
}

const steps = [
  {
    n: '01',
    t: 'Descubrimiento',
    d: 'Objetivos, métricas y alcance.',
    outcome: 'Canvas del negocio, backlog priorizado y cronograma.',
  },
  {
    n: '02',
    t: 'Diseño',
    d: 'UX/UI y arquitectura técnica.',
    outcome: 'Prototipo navegable, guía visual y decisiones técnicas documentadas.',
  },
  {
    n: '03',
    t: 'Desarrollo',
    d: 'Sprints ágiles y revisiones.',
    outcome: 'Incrementos funcionales listos para demo semanal.',
  },
  {
    n: '04',
    t: 'QA',
    d: 'Pruebas, seguridad y performance.',
    outcome: 'Checklists, evidencias automatizadas y hardening de accesos.',
  },
  {
    n: '05',
    t: 'Deploy',
    d: 'Monitoreo y mejora continua.',
    outcome: 'Lanzamiento acompañado, alertas configuradas y plan de soporte.',
  },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Proceso de desarrollo',
    step: steps.map((s) => ({
      '@type': 'HowToStep',
      name: s.t,
      text: `${s.d} Resultado: ${s.outcome}`,
    })),
  }

  const deliverables = [
    { t: 'Documentación funcional', s: 'Historias de usuario, criterios de aceptación y owner responsable.' },
    { t: 'Arquitectura', s: 'Diagramas, decisiones técnicas, dependencias y trade-offs registrados.' },
    { t: 'Código y pipelines', s: 'Repositorios, estándares, CI/CD y tableros de seguimiento.' },
    { t: 'Evidencia de QA', s: 'Resultados de pruebas manuales y automatizadas con métricas de cobertura.' },
  ]

  // FAQ removido por solicitud

  const WHATSAPP_URL =
    'https://wa.me/523312050703?text=Hola%20INNDESO%2C%20quiero%20conocer%20su%20proceso%20de%20trabajo'

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
        name: 'Proceso',
        item: 'https://inndeso.com.mx/proceso',
      },
    ],
  }

  return (
    <main className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero en lenguaje claro */}
      <section className="bg-gradient-to-b from-white to-neutral-50 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Nuestro proceso</h1>
            <p className="mt-4 max-w-2xl text-neutral-700">
              Así trabajamos contigo, paso a paso, para entregar resultados sin sorpresas y con total transparencia.
            </p>
            <ul className="mt-4 max-w-xl space-y-2 text-sm text-neutral-700">
              {[
                'Kickoff con objetivos, métricas y responsables claros',
                'Demo navegable y reporte cada semana',
                'Documentación, QA y soporte incluidos en cada entrega',
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
                Agendar llamada
              </a>
              <a
                href="/servicios"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-6 py-3 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-50"
              >
                Ver servicios
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-blue-500/10 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <Image src="/portfolio/portal.svg" alt="Proceso de trabajo" width={640} height={420} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline con tarjetas */}
      <section className="relative overflow-hidden bg-neutral-50 py-12 sm:py-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="relative border-s border-neutral-200">
            {steps.map((s, i) => (
              <li key={s.n} className="ms-6 py-5">
                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-semibold">
                  {s.n}
                </span>
                <div className="rounded-2xl border border-neutral-200 bg-white/85 p-5 shadow-sm backdrop-blur">
                  <h2 className="font-semibold text-neutral-900">{s.t}</h2>
                  <p className="mt-1 text-sm text-neutral-700">{s.d}</p>
                  <div className="mt-3 rounded-xl border border-blue-100 bg-blue-50/80 px-4 py-2 text-xs text-blue-700">
                    Resultado: {s.outcome}
                  </div>
                  <p className="mt-2 text-xs text-neutral-500">Tiempo estimado: 2–5 días (según alcance).</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Entregables que recibes en cada fase</h2>
            <p className="mt-3 text-neutral-600 text-sm">
              Todo queda registrado en herramientas compartidas contigo: Notion, Figma, GitHub y dashboards de métricas.
            </p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliverables.map((d) => (
              <article
                key={d.t}
                className="rounded-3xl border border-neutral-200 bg-white/85 p-5 text-sm text-neutral-700 shadow-sm backdrop-blur transition hover:border-blue-200 hover:shadow-lg"
              >
                <h3 className="text-base font-semibold text-neutral-900">{d.t}</h3>
                <p className="mt-2">{d.s}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Calidad y soporte en palabras simples */}
      <section className="bg-neutral-50 py-12 sm:py-16 border-t border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Lo que cuidamos mientras construimos</h2>
            <p className="mt-3 text-neutral-600">
              Nuestro trabajo no termina con el deploy. Te acompañamos para garantizar continuidad operativa y mejoras.
            </p>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { t: 'Calidad continua', d: 'Automatizamos pruebas, revisamos accesos y medimos performance en cada iteración.', icon: '✅' },
              { t: 'Seguridad y datos', d: 'Roles, permisos, backups y cifrado configurados desde el inicio del proyecto.', icon: '🔐' },
              { t: 'Acompañamiento', d: 'Seguimos contigo post-lanzamiento para mejorar y escalar nuevas funcionalidades.', icon: '🤝' },
            ].map((block) => (
              <article key={block.t} className="rounded-3xl border border-neutral-200 bg-white/85 p-6 shadow-sm backdrop-blur">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-lg">
                  {block.icon}
                </div>
                <h3 className="mt-3 font-semibold text-neutral-900">{block.t}</h3>
                <p className="mt-2 text-sm text-neutral-600">{block.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ritmo de trabajo */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl border border-neutral-200 bg-white/80 shadow-sm backdrop-blur">
          <div className="grid gap-6 lg:grid-cols-[2fr,3fr] items-center p-8 sm:p-10">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900">Ritmo de trabajo y comunicación</h2>
              <p className="mt-2 text-sm text-neutral-600">
                Mantenemos a todos informados y tomamos decisiones con datos. Aquí está cómo nos coordinamos semana a semana.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-neutral-700">
              {[
                { title: 'Reunión de Kickoff', detail: '60 minutos para alinear objetivos, stakeholders y métricas.' },
                { title: 'Daily async', detail: 'Actualización breve por Slack/WhatsApp para evitar bloqueos.' },
                { title: 'Demo semanal', detail: '30 minutos con decisión final de producto y checklist de QA.' },
                { title: 'Reporte ejecutivo', detail: 'Resumen quincenal con KPIs, riesgos y próximos pasos.' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-sm">
                  <h3 className="text-sm font-semibold text-neutral-900">{item.title}</h3>
                  <p className="mt-1 text-xs text-neutral-600">{item.detail}</p>
                </div>
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
              <h3 className="text-2xl font-bold text-neutral-900">¿Quieres seguir este proceso en tu proyecto?</h3>
              <p className="mt-2 text-sm text-neutral-600">Agenda una llamada y te mostramos cómo aplicarlo a tu caso específico.</p>
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
