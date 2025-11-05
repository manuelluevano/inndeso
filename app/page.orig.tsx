
"use client";
import { Suspense } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Experiencia from "@/components/Experiencia";
import PorQueInndeso from "@/components/PorQueInndeso";
import RouteChangeTracker from "@/components/RouteChangeTracker";
import StatsChips from "@/components/StatsChips";

export const dynamic = "force-static";

const WHATSAPP_URL =
  "https://wa.me/523315203120?text=Hola%20INNDESO%2C%20necesito%20un%20proyecto%20de%20desarrollo%20de%20software";

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Cargando...</div>}>
        <main id="inicio" className="relative">
          <RouteChangeTracker />

          {/* HERO — Empresa de Desarrollo de Software */}
          <section className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 flex justify-center">
              <div className="h-64 w-[60rem] bg-blue-500/10 blur-3xl rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
              <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 text-blue-700 px-3 py-1 text-xs font-medium">
                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                    Software a la medida • Web • Móvil • APIs
                  </div>

                  <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                    Construimos productos de <span className="text-blue-600">software </span>
                    que impulsan tu <span className="text-blue-600">negocio</span>
                  </h1>

                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-800">
                    Desde el concepto hasta el despliegue en producción: diseñamos, desarrollamos y
                    mantenemos aplicaciones robustas, escalables y seguras.
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm sm:text-base font-semibold shadow-lg shadow-blue-600/30 transition"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                        <path d="M20.52 3.48A11.85 11.85 0 0 0 12.04 0C5.4 0 .05 5.35.05 11.97c0 2.11.55 4.17 1.6 5.98L0 24l6.22-1.63a11.9 11.9 0 0 0 5.82 1.49h.01c6.63 0 12.01-5.35 12.02-11.97 0-3.2-1.25-6.22-3.53-8.4zM12.04 22a9.9 9.9 0 0 1-5.06-1.38l-.36-.2-3.69.96.99-3.6-.23-.37A10 10 0 1 1 22.05 12c-.01 5.52-4.53 9.99-10.01 10zM17.55 14.3c-.27-.13-1.58-.78-1.83-.86-.24-.08-.42-.12-.6.13-.18.26-.69.85-.84 1.02-.15.16-.31.19-.57.06-1.55-.77-2.56-1.38-3.56-3.13-.27-.47.27-.44.77-1.47.08-.16.04-.3-.02-.42-.06-.12-.6-1.45-.82-1.98-.22-.53-.44-.46-.6-.47-.15-.01-.32-.01-.49-.01-.17 0-.45.06-.69.32-.24.26-.9.88-.9 2.14s.92 2.48 1.05 2.64c.13.16 1.81 2.77 4.38 3.88.61.26 1.09.41 1.46.53.62.2 1.19.17 1.64.1.5-.07 1.58-.65 1.8-1.28.22-.63.22-1.16.15-1.27-.06-.11-.22-.18-.49-.3z" />
                      </svg>
                      Solicitar cotización
                    </a>
                    <a href="#servicios" className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-6 py-3 text-sm sm:text-base font-semibold text-neutral-800 hover:bg-neutral-50 transition">
                      Ver servicios
                    </a>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-600">
                    <div className="inline-flex items-center gap-2">
                      <span className="inline-flex -space-x-2 overflow-hidden">
                        <span className="h-6 w-6 rounded-full bg-emerald-500/20 border border-emerald-500/30" />
                        <span className="h-6 w-6 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
                        <span className="h-6 w-6 rounded-full bg-blue-500/20 border border-blue-500/30" />
                      </span>
                      50+ proyectos entregados
                    </div>
                    <div className="inline-flex items-center gap-1 text-amber-600">
                      ★★★★★ <span className="text-neutral-600">Calificación de clientes</span>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="relative max-w-sm sm:max-w-md mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.03, rotate: -0.5 }}
                  >
                    <Image
                      src="/hero.png"
                      alt="Desarrollo de software y productos digitales"
                      width={880}
                      height={660}
                      className="w-full h-auto drop-shadow-xl"
                      priority
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Servicios */}
          <section id="servicios" className="relative overflow-hidden bg-neutral-50 py-16 sm:py-20">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-dots" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Servicios</h2>
              <p className="mt-2 text-neutral-600 max-w-2xl">Soluciones end‑to‑end para acelerar tu negocio.</p>
              <div className="mt-6 grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Aplicaciones Web",
                    desc: "SPAs y backends escalables con arquitectura limpia y pruebas automatizadas.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-blue-600"><path fill="currentColor" d="M3 4h18v2H3zm0 6h18v2H3zm0 6h12v2H3z"/></svg>
                    ),
                  },
                  {
                    title: "APIs e Integraciones",
                    desc: "REST/GraphQL, microservicios y conectores con terceros de forma segura.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-blue-600"><path fill="currentColor" d="M10 3H3v7h7zm11 0h-7v7h7zM10 14H3v7h7zm11 0h-7v7h7z"/></svg>
                    ),
                  },
                  {
                    title: "Cloud & DevOps",
                    desc: "CI/CD, contenedores, monitoreo y despliegues confiables en la nube.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-blue-600"><path fill="currentColor" d="M6 19a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H6zm7-2.09V7h3l-4-4-4 4h3v9.91A4 4 0 1 0 13 16.9z"/></svg>
                    ),
                  },
                ].map((b, i) => (
                  <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 mb-4">
                      {b.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{b.title}</h3>
                    <p className="mt-2 text-sm text-neutral-600">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Portafolio destacado */}
          <section id="proyectos" className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-white to-neutral-50 border-t border-neutral-200/60">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Proyectos</h2>
                  <p className="mt-2 text-neutral-600">Una muestra de productos que hemos construido.</p>
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50">Solicitar propuesta</a>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "ERP ligero", tags: ["Next.js", "Node", "PostgreSQL"], img: "/portfolio/erp.svg" },
                  { title: "App móvil de pedidos", tags: ["React Native", "FastAPI"], img: "/portfolio/mobile-orders.svg" },
                  { title: "Dashboard IoT", tags: ["React", "WebSockets"], img: "/portfolio/dashboard-iot.svg" },
                  { title: "E‑commerce B2B", tags: ["Next.js", "Stripe"], img: "/portfolio/ecommerce.svg" },
                  { title: "Integración CRM", tags: ["APIs", "Webhook"], img: "/portfolio/crm.svg" },
                  { title: "Portal de clientes", tags: ["NestJS", "Auth"], img: "/portfolio/portal.svg" },
                ].map((p, i) => (
                  <div key={i} className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition">
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
                      <h3 className="font-semibold">{p.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {p.tags.map((t: string, idx: number) => (
                          <span key={idx} className="text-xs rounded-full bg-neutral-100 px-2 py-1 text-neutral-700">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Proceso */}
          <section id="proceso" className="bg-neutral-50 py-16 sm:py-20 border-t border-neutral-200/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Nuestro proceso</h2>
              <div className="mt-6 grid md:grid-cols-5 gap-4">
                {[
                  { n: "01", t: "Descubrimiento", d: "Objetivos, métricas y alcance." },
                  { n: "02", t: "Diseño", d: "UX/UI y arquitectura técnica." },
                  { n: "03", t: "Desarrollo", d: "Sprints ágiles y revisiones." },
                  { n: "04", t: "QA", d: "Pruebas, seguridad y performance." },
                  { n: "05", t: "Deploy", d: "Monitoreo y mejora continua." },
                ].map((s, i) => (
                  <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-5">
                    <div className="text-xs font-mono text-blue-600">{s.n}</div>
                    <div className="mt-1 font-semibold">{s.t}</div>
                    <div className="mt-1 text-sm text-neutral-600">{s.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* Bloques existentes */}
        <section className="bg-white py-16 sm:py-20">
          <Experiencia />
        </section>

        <section className="bg-neutral-50 py-12 sm:py-16 border-t border-neutral-200/60">
          <StatsChips />
        </section>

        <section className="bg-white py-16 sm:py-20 border-t border-neutral-200/60">
          <PorQueInndeso />
        </section>

       
      </Suspense>
    </>
  );
}
