
"use client";
import { Suspense, useEffect, useState } from "react";
import type { KeyboardEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Experiencia from "@/components/Experiencia";
import PorQueInndeso from "@/components/PorQueInndeso";
import RouteChangeTracker from "@/components/RouteChangeTracker";
import StatsChips from "@/components/StatsChips";

export const dynamic = "force-static";

const WHATSAPP_URL =
  "https://wa.me/523315203120?text=Hola%20INNDESO%2C%20necesito%20un%20proyecto%20de%20desarrollo%20de%20software";

const POS_IMAGES = [
  "/portfolio/POS/Screenshot 2025-11-03 225959.png",
  "/portfolio/POS/Screenshot 2025-11-03 230121.png",
  "/portfolio/POS/Screenshot 2025-11-03 230138.png",
  "/portfolio/POS/Screenshot 2025-11-03 230206.png",
  "/portfolio/POS/Screenshot 2025-11-03 230226.png",
  "/portfolio/POS/Screenshot 2025-11-03 230242.png",
  "/portfolio/POS/Screenshot 2025-11-03 230304.png",
  "/portfolio/POS/Screenshot 2025-11-03 230324.png",
  "/portfolio/POS/Screenshot 2025-11-03 230351.png",
  "/portfolio/POS/Screenshot 2025-11-03 230412.png",
  "/portfolio/POS/Screenshot 2025-11-03 230426.png",
];

const POS_DESCRIPTION =
  "Suite de punto de venta que centraliza inventarios, ventas, usuarios y reportes de caja en tiempo real, pensada para operar sucursales físicas con procesos ágiles y seguros.";

const APP_POLLOS_IMAGES = [
  "/portfolio/APP-POLLOS/app-polleria-cover.jpeg",
  "/portfolio/APP-POLLOS/app-polleria-1.jpeg",
  "/portfolio/APP-POLLOS/app-polleria-2.jpeg",
  "/portfolio/APP-POLLOS/app-polleria-3.jpeg",
  "/portfolio/APP-POLLOS/app-polleria-4.jpeg",
  "/portfolio/APP-POLLOS/app-polleria-5.jpeg",
  "/portfolio/APP-POLLOS/app-polleria-6.jpeg",
];

const APP_POLLOS_DESCRIPTION =
  "App móvil diseñada para iOS y Android con arquitectura multirrol: clientes compran productos y gestionan pedidos, repartidores organizan rutas de entrega y almacén controla existencias en tiempo real.";

const APP_POLLOS_ROLES = [
  {
    label: "Cliente",
    detail: "Navega catálogo, arma pedidos, paga con pasarelas locales y rastrea entregas desde la app.",
  },
  {
    label: "Repartidor",
    detail: "Recibe órdenes priorizadas, marca estados de entrega y obtiene navegación asistida.",
  },
  {
    label: "Almacén",
    detail: "Controla stock, genera alertas de merma y sincroniza inventario con el punto de venta físico.",
  },
];

const ECOM_SERCOMIN_IMAGES = [
  "/portfolio/ECCOMERCE-SERCOMIN/ecommerce-sercomin-1.jpeg",
  "/portfolio/ECCOMERCE-SERCOMIN/ecommerce-sercomin-2.jpeg",
  "/portfolio/ECCOMERCE-SERCOMIN/ecommerce-sercomin-3.jpeg",
  "/portfolio/ECCOMERCE-SERCOMIN/ecommerce-sercomin-4.jpeg",
  "/portfolio/ECCOMERCE-SERCOMIN/ecommerce-sercomin-5.jpeg",
  "/portfolio/ECCOMERCE-SERCOMIN/ecommerce-sercomin-6.jpeg",
  "/portfolio/ECCOMERCE-SERCOMIN/ecommerce-sercomin-7.jpeg",
];

const ECOM_SERCOMIN_DESCRIPTION =
  "Plataforma de comercio electrónico con panel administrativo para controlar ventas, catálogo, entradas y salidas de inventario, catálogos mayoristas y conciliación de pagos.";

const ECOM_SERCOMIN_FEATURES = [
  {
    label: "Ventas",
    detail: "Checkout optimizado, historial de pedidos y facturación automática con reportes diarios.",
  },
  {
    label: "Inventario",
    detail: "Control de existencias por almacén, registro de entradas/salidas y alertas de reabasto.",
  },
  {
    label: "Pagos",
    detail: "Integración con pasarela nacional, conciliación bancaria y split de comisiones para sucursales.",
  },
];

type ModalKey = "POS" | "APP_POLLOS" | "ECOM_SERCOMIN";

export default function Home() {
  const [activeProjectModal, setActiveProjectModal] = useState<ModalKey | null>(null);
  const closeModal = () => setActiveProjectModal(null);

  useEffect(() => {
    if (!activeProjectModal) {
      return;
    }

    const { style } = document.body;
    const previousOverflow = style.overflow;
    style.overflow = "hidden";

    return () => {
      style.overflow = previousOverflow;
    };
  }, [activeProjectModal]);

  const renderPhoneScreens = (images: string[], altPrefix: string) => (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {images.map((img, index) => (
        <div
          key={img}
          className={`relative aspect-[9/16] w-full rounded-[32px] bg-neutral-950/80 shadow-xl shadow-neutral-900/40 ${
            index === 0 ? "max-w-[180px] sm:max-w-[200px] p-4" : "max-w-[220px] sm:max-w-[240px] p-3"
          }`}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-neutral-50">
            <Image
              src={img}
              alt={`${altPrefix} ${index + 1}`}
              fill
              sizes="(min-width: 1280px) 18vw, (min-width: 768px) 30vw, 70vw"
              className={index === 0 ? "object-contain" : "object-cover object-center"}
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );

  const renderDesktopGallery = (images: string[], altPrefix: string) => (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((img, index) => (
        <div
          key={img}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100"
        >
          <Image
            src={img}
            alt={`${altPrefix} ${index + 1}`}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 35vw, 80vw"
            className={index === 0 ? "object-cover object-top" : "object-cover"}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );

  const portfolioProjects = [
    {
      title: "E-commerce con gestión integral",
      tags: ["Next.js", "NestJS", "Stripe"],
      img: "/portfolio/ECCOMERCE-SERCOMIN/ecommerce-sercomin-4.jpeg",
      modalKey: "ECOM_SERCOMIN" as const,
    },
    {
      title: "App móvil multirrol para pollería",
      tags: ["React Native", "FastAPI", "iOS", "Android"],
      img: "/portfolio/APP-POLLOS/app-polleria-cover.jpeg",
      modalKey: "APP_POLLOS" as const,
    },
    { title: "Dashboard IoT", tags: ["React", "WebSockets"], img: "/portfolio/dashboard-iot.svg" },
    { title: "E‑commerce B2B", tags: ["Next.js", "Stripe"], img: "/portfolio/ecommerce.svg" },
    { title: "Integración CRM", tags: ["APIs", "Webhook"], img: "/portfolio/crm.svg" },
    {
      title: "PUNTO DE VENTA",
      tags: ["NestJS", "Auth"],
      img: "/portfolio/POS/Screenshot 2025-11-03 230138.png",
      modalKey: "POS" as const,
    },
  ];

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
                {portfolioProjects.map((project, index) => {
                  const isInteractive = Boolean(project.modalKey);
                  const isPhoneProject = project.modalKey === "APP_POLLOS";

                  const handleClick = () => {
                    if (project.modalKey) {
                      setActiveProjectModal(project.modalKey);
                    }
                  };

                  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
                    if (!project.modalKey) {
                      return;
                    }

                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveProjectModal(project.modalKey);
                    }
                  };

                  return (
                    <div
                      key={project.title}
                      role={isInteractive ? "button" : undefined}
                      tabIndex={isInteractive ? 0 : undefined}
                      onClick={isInteractive ? handleClick : undefined}
                      onKeyDown={isInteractive ? handleKeyDown : undefined}
                      className={`group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition ${
                        isInteractive ? "cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600" : ""
                      }`}
                      aria-label={isInteractive ? `Ver detalles de ${project.title}` : undefined}
                    >
                      <div
                        className={`relative w-full overflow-hidden ${
                          isPhoneProject
                            ? "flex aspect-[3/2] items-center justify-center bg-neutral-900/5"
                            : "aspect-[3/2]"
                        }`}
                      >
                        {isPhoneProject ? (
                          <div className="relative aspect-[9/16] w-28 sm:w-32 rounded-[28px] bg-neutral-950/90 p-3 shadow-lg shadow-black/40 transition-transform duration-500 group-hover:scale-[1.02]">
                            <div className="absolute inset-x-4 top-2 mx-auto h-1.5 rounded-full bg-neutral-700" />
                            <div className="absolute inset-x-10 bottom-3 mx-auto h-1.5 rounded-full bg-neutral-700/80" />
                            <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-neutral-100">
                              <Image
                                src={project.img}
                                alt={project.title}
                                fill
                                sizes="(min-width: 1024px) 24vw, (min-width: 640px) 40vw, 90vw"
                                className="object-contain"
                                priority={index < 2}
                              />
                            </div>
                          </div>
                        ) : (
                          <Image
                            src={project.img}
                            alt={project.title}
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                            priority={index < 2}
                          />
                        )}
                      </div>
                      <div className="p-5">
                        <h3 className="font-semibold">{project.title}</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {project.tags.map((tag: string) => (
                            <span key={tag} className="text-xs rounded-full bg-neutral-100 px-2 py-1 text-neutral-700">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
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

          {activeProjectModal === "ECOM_SERCOMIN" && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="ecom-sercomin-modal-title"
              onClick={closeModal}
            >
              <div
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600 shadow-sm transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
                  aria-label="Cerrar modal del ecommerce"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                    <path fill="currentColor" d="M6.225 4.811 4.81 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586z" />
                  </svg>
                </button>

                <div className="grid gap-6 px-6 py-8 sm:px-10 sm:py-10">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
                      Ecommerce B2B
                    </span>
                    <h3 id="ecom-sercomin-modal-title" className="mt-4 text-2xl font-bold text-neutral-900">
                      E-commerce con gestión integral
                    </h3>
                    <p className="mt-3 text-base text-neutral-600">{ECOM_SERCOMIN_DESCRIPTION}</p>
                  </div>

                  {renderDesktopGallery(ECOM_SERCOMIN_IMAGES, "Captura del e-commerce")}

                  <div className="grid gap-3 rounded-2xl border border-indigo-100 bg-indigo-50/80 p-5 text-sm text-indigo-900">
                    {ECOM_SERCOMIN_FEATURES.map((feature) => (
                      <div key={feature.label} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-6 min-w-[84px] items-center justify-center rounded-full bg-indigo-600 px-2 text-xs font-semibold text-white">
                          {feature.label}
                        </span>
                        <p>{feature.detail}</p>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={closeModal}
                      className="mt-2 inline-flex items-center gap-2 self-end rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeProjectModal === "POS" && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="pos-modal-title"
              onClick={closeModal}
            >
              <div
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600 shadow-sm transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                  aria-label="Cerrar modal del Punto de Venta"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                    <path fill="currentColor" d="M6.225 4.811 4.81 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586z" />
                  </svg>
                </button>

                <div className="grid gap-6 px-6 py-8 sm:px-10 sm:py-10">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                      Caso de éxito
                    </span>
                    <h3 id="pos-modal-title" className="mt-4 text-2xl font-bold text-neutral-900">
                      Punto de Venta Omnicanal
                    </h3>
                    <p className="mt-3 text-base text-neutral-600">{POS_DESCRIPTION}</p>
                  </div>
                  {renderDesktopGallery(POS_IMAGES, "Captura del punto de venta")}

                  <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-blue-100 bg-blue-50/80 p-4 text-sm text-blue-900">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-semibold">
                        ERP
                      </span>
                      <p>
                        Gestión de inventario en tiempo real, control granular de usuarios, sincronización con balanzas, generación de tickets fiscales y módulo de reportes diarios.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeProjectModal === "APP_POLLOS" && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="app-pollos-modal-title"
              onClick={closeModal}
            >
              <div
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600 shadow-sm transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600"
                  aria-label="Cerrar modal de la App de Pollería"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                    <path
                      fill="currentColor"
                      d="M6.225 4.811 4.81 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586z"
                    />
                  </svg>
                </button>

                <div className="grid gap-6 px-6 py-8 sm:px-10 sm:py-10">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                      Multiplataforma
                    </span>
                    <h3 id="app-pollos-modal-title" className="mt-4 text-2xl font-bold text-neutral-900">
                      App móvil multirrol para pollería
                    </h3>
                    <p className="mt-3 text-base text-neutral-600">{APP_POLLOS_DESCRIPTION}</p>
                  </div>

                  {renderPhoneScreens(APP_POLLOS_IMAGES, "Captura de la app móvil de pollería")}

                  <div className="grid gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5 text-sm text-emerald-900">
                    {APP_POLLOS_ROLES.map((role) => (
                      <div key={role.label} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-6 w-20 items-center justify-center rounded-full bg-emerald-600 px-2 text-xs font-semibold text-white">
                          {role.label}
                        </span>
                        <p>{role.detail}</p>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={closeModal}
                      className="mt-2 inline-flex items-center gap-2 self-end rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
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
