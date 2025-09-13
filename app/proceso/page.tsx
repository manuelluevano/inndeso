import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Proceso de trabajo',
  description:
    'Nuestro proceso en 5 pasos: descubrimiento, diseño, desarrollo, QA y despliegue. Transparencia y entregas continuas.',
  alternates: { canonical: '/proceso' },
  openGraph: { title: 'Proceso | INNDESO', url: '/proceso' },
}

const steps = [
  { n: '01', t: 'Descubrimiento', d: 'Objetivos, métricas y alcance.' },
  { n: '02', t: 'Diseño', d: 'UX/UI y arquitectura técnica.' },
  { n: '03', t: 'Desarrollo', d: 'Sprints ágiles y revisiones.' },
  { n: '04', t: 'QA', d: 'Pruebas, seguridad y performance.' },
  { n: '05', t: 'Deploy', d: 'Monitoreo y mejora continua.' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Proceso de desarrollo',
    step: steps.map((s) => ({ '@type': 'HowToStep', name: s.t, text: s.d })),
  }

  const deliverables = [
    { t: 'Documentación funcional', s: 'Historias de usuario, criterios de aceptación.' },
    { t: 'Arquitectura', s: 'Diagramas, decisiones y trade‑offs.' },
    { t: 'Código y pipelines', s: 'Repos, CI/CD y estándares de calidad.' },
    { t: 'Evidencia de QA', s: 'Resultados de pruebas y cobertura.' },
  ]

  // FAQ removido por solicitud

  const WHATSAPP_URL =
    'https://wa.me/523315203120?text=Hola%20INNDESO%2C%20quiero%20conocer%20su%20proceso%20de%20trabajo'

  return (
    <main className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero en lenguaje claro */}
      <section className="bg-gradient-to-b from-white to-neutral-50 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Nuestro proceso</h1>
            <p className="mt-4 max-w-2xl text-neutral-700">Así trabajamos contigo, paso a paso, sin complicaciones ni sorpresas.</p>
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
                <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
                  <h2 className="font-semibold">{s.t}</h2>
                  <p className="mt-1 text-sm text-neutral-700">{s.d}</p>
                  <p className="mt-2 text-xs text-neutral-500">Tiempo estimado: 2–5 días por paso (según alcance).</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold">Entregables</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliverables.map((d) => (
              <article key={d.t} className="rounded-2xl border border-neutral-200 bg-white p-5">
                <h3 className="font-semibold">{d.t}</h3>
                <p className="mt-1 text-sm text-neutral-600">{d.s}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Calidad y soporte en palabras simples */}
      <section className="bg-neutral-50 py-12 sm:py-16 border-t border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[{ t: 'Calidad', d: 'Probamos lo que hacemos y revisamos cada entrega.' }, { t: 'Seguridad', d: 'Cuidamos accesos y datos. Usamos buenas prácticas.' }, { t: 'Acompañamiento', d: 'Te ayudamos después del lanzamiento para mejorar.' },].map((b) => (
            <article key={b.t} className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="font-semibold">{b.t}</h3>
              <p className="mt-2 text-sm text-neutral-600">{b.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Sección de preguntas frecuentes removida */}
    </main>
  )
}
