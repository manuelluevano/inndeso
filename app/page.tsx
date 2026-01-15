
"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import type { ChangeEvent, FormEvent, KeyboardEvent, ReactNode } from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import Image from "next/image";

import Experiencia from "@/components/Experiencia";
import PorQueInndeso from "@/components/PorQueInndeso";
import RouteChangeTracker from "@/components/RouteChangeTracker";
import StatsChips from "@/components/StatsChips";

export const dynamic = "force-static";

const WHATSAPP_URL =
  "https://wa.me/523312050703?text=Hola%20INNDESO%2C%20necesito%20un%20proyecto%20de%20desarrollo%20de%20software";
const WHATSAPP_BASE = "https://wa.me/523312050703";

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
  "Suite de punto de venta que centraliza inventarios, usuarios, cajas y reportes en tiempo real para operar sucursales con procesos ágiles y seguros.";

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
  "App móvil para iOS y Android con roles de cliente, repartidor y almacén. Permite comprar, coordinar entregas y controlar inventario en tiempo real.";

const APP_POLLOS_ROLES = [
  {
    label: "Cliente",
    detail: "Explora catálogo actualizable, arma pedidos, paga en línea y da seguimiento a las entregas.",
  },
  {
    label: "Repartidor",
    detail: "Recibe rutas optimizadas, marca estados de entrega y descarga recibos.",
  },
  {
    label: "Almacén",
    detail: "Gestiona existencias, registra merma y sincroniza inventario con el punto de venta físico.",
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
  "Plataforma de comercio electrónico B2B con catálogo administrable, gestión de pedidos, conciliación de pagos y reportes en tiempo real.";

const ECOM_SERCOMIN_FEATURES = [
  { label: "Ventas", detail: "Checkout optimizado, historial y facturación automática por cliente." },
  { label: "Inventario", detail: "Control de existencias por almacén con alertas y registro de movimientos." },
  { label: "Pagos", detail: "Integración con pasarela nacional y conciliación bancaria con split por sucursal." },
];

const ADMIN_LOCAL_IMAGES = [
  "/portfolio/ADMINISTRACION-LOCAL/admin-local-1.png",
  "/portfolio/ADMINISTRACION-LOCAL/admin-local-2.png",
  "/portfolio/ADMINISTRACION-LOCAL/admin-local-3.png",
  "/portfolio/ADMINISTRACION-LOCAL/admin-local-4.png",
  "/portfolio/ADMINISTRACION-LOCAL/admin-local-5.png",
];

const ADMIN_LOCAL_DESCRIPTION =
  "Suite administrativa para servicios locales que centraliza ventas, órdenes de trabajo, inventario y cobros en un panel usable para todo el equipo.";

const ADMIN_LOCAL_FEATURES = [
  { label: "Ventas", detail: "Tickets rápidos, control de cobranzas y reportes diarios por sucursal." },
  { label: "Servicios", detail: "Historial del cliente, estados del servicio y notificaciones internas." },
  { label: "Inventario", detail: "Entradas, salidas y alertas de stock crítico sincronizadas con proveedores." },
];

const SUPERENVASES_IMAGES = [
  "/portfolio/SUPERENVASES/superenvases-1.png",
  "/portfolio/SUPERENVASES/superenvases-2.png",
  "/portfolio/SUPERENVASES/superenvases-3.png",
  "/portfolio/SUPERENVASES/superenvases-4.png",
];

const SUPERENVASES_DESCRIPTION =
  "Landing page informativa para fabricación de envases de plástico, con catálogo de productos, detalles del proceso y contacto directo por WhatsApp.";

const SUPERENVASES_FEATURES = [
  { label: "Catálogo", detail: "Galería de envases con materiales, capacidades y usos principales." },
  { label: "Proceso", detail: "Secciones claras sobre fabricación, calidad y tiempos de entrega." },
  { label: "WhatsApp", detail: "CTA visible para cotizar al instante con el equipo comercial." },
];

const FERTIKHOR_IMAGES = [
  "/portfolio/FERTIKHOR/fertikhor-1.png",
  "/portfolio/FERTIKHOR/fertikhor-2.png",
  "/portfolio/FERTIKHOR/fertikhor-3.png",
  "/portfolio/FERTIKHOR/fertikhor-4.png",
  "/portfolio/FERTIKHOR/fertikhor-5.png",
];

const FERTIKHOR_DESCRIPTION =
  "Landing page para fábrica química industrial de fertilizantes de alta concentración y asimilación, con contacto por redes sociales, WhatsApp y formulario.";

const FERTIKHOR_FEATURES = [
  { label: "Industria", detail: "Ficha de productos, concentraciones y beneficios técnicos destacados." },
  { label: "Contacto", detail: "Accesos directos a redes sociales y WhatsApp en todo el recorrido." },
  { label: "Formulario", detail: "Captura de prospectos con formulario de cotización integrado." },
];

type ModalKey =
  | "POS"
  | "APP_POLLOS"
  | "ECOM_SERCOMIN"
  | "ADMIN_LOCAL"
  | "SUPERENVASES"
  | "FERTIKHOR";
type LeadField = "name" | "email" | "need";

type ServiceCard = {
  title: string;
  desc: string;
  icon: ReactNode;
  highlights?: string[];
  href?: string;
};

type PackageOption = {
  name: string;
  price: string;
  time: string;
  includes: string[];
  previousPrice?: string;
  idealFor: string;
  featured?: boolean;
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type FAQ = {
  q: string;
  a: string;
};

type PortfolioProject = {
  title: string;
  tags: string[];
  img: string;
  modalKey?: ModalKey;
  result?: string;
  badge?: string;
};

const SERVICES: ServiceCard[] = [
  {
    title: "Páginas web y tiendas en línea",
    desc: "Landing pages, catálogos y tiendas administrables diseñadas para convertir visitas en ventas.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-blue-600"><path fill="currentColor" d="M3 4h18v2H3zm0 6h18v2H3zm0 6h12v2H3z"/></svg>
    ),
    href: "/servicios/paginas-web",
    highlights: [
      "Rediseño web corporativo con copy enfocado en ventas",
      "Tienda en línea con pagos y envíos listos para operar",
      "Reportes y formularios conectados a tu correo o CRM",
    ],
  },
  {
    title: "Automatización de procesos",
    desc: "Conectamos punto de venta, inventario y facturación para que la información se actualice sola.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-blue-600"><path fill="currentColor" d="M10 3H3v7h7zm11 0h-7v7h7zM10 14H3v7h7zm11 0h-7v7h7z"/></svg>
    ),
    highlights: [
      "Inventario sincronizado entre tienda, almacén y contabilidad",
      "Facturas y recibos generados automáticamente al cerrar una venta",
      "Notificaciones a clientes y equipo en WhatsApp o email",
    ],
  },
  {
    title: "Sistemas internos a la medida",
    desc: "Digitalizamos ventas, servicios e inventario para que tu equipo deje atrás las hojas de cálculo.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-blue-600"><path fill="currentColor" d="M4 4h16v2H4zm0 6h16v2H4zm0 6h16v2H4z"/></svg>
    ),
    href: "/servicios/tienda-en-linea",
    highlights: [
      "Control de pedidos, entregas y almacén en un solo panel",
      "Panel de métricas en tiempo real listo para tus gerentes",
      "Roles y permisos para cada área con historial de cambios",
    ],
  },
];

const PACKAGES: PackageOption[] = [
  {
    name: "Página web",
    price: "Desde $3,500 MXN",
    time: "1 semana",
    idealFor: "Negocios que necesitan anunciarse de inmediato",
    includes: ["Landing page con copy y diseño", "Integración de formularios y analítica", "Entrega lista para anunciar"],
  },
  {
    name: "Tienda con automatizaciones",
    previousPrice: "Antes $8,000 MXN",
    price: "Desde $7,500 MXN",
    time: "3 semanas",
    idealFor: "Emprendimientos que venden en línea y quieren automatizar pagos",
    includes: ["Catálogo administrable", "Pagos y logística integrados", "Sincronización con inventario y facturación"],
    featured: true,
  },
  {
    name: "Sistema administrativo a la medida",
    price: "Cotización personalizada",
    time: "6-8 semanas",
    idealFor: "Operaciones con múltiples sucursales o equipos que usan hojas de cálculo",
    includes: [
      "Pantallas para ventas, inventario y almacén",
      "Reportes diarios listos para compartir",
      "Acompañamiento mensual para resolver dudas",
    ],
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Pasamos de cotizaciones manuales a pedidos automatizados y aumentamos 32% las ventas B2B.",
    name: "María López",
    role: "Directora Comercial, SERCOMIN",
  },
  {
    quote: "Ahora sabemos quién atiende cada servicio y qué materiales se usan. Eliminamos las hojas de cálculo.",
    name: "Jorge Martínez",
    role: "Gerente Operativo, Servicio Local",
  },
  {
    quote: "La app móvil organizó pedidos, entregas y almacén. Los repartidores tienen rutas claras y trazabilidad completa.",
    name: "Laura García",
    role: "Fundadora, Pollería Express",
  },
];

const FAQS: FAQ[] = [
  {
    q: "¿Cuál es el tiempo típico de entrega?",
    a: "Los proyectos web toman 1 a 5 semanas. Sistemas internos o apps móviles de 6 a 10 semanas según el alcance acordado.",
  },
  {
    q: "¿Qué incluye el presupuesto?",
    a: "Incluye descubrimiento, diseño UI/UX, desarrollo, QA, despliegue y capacitación para tu equipo.",
  },
  {
    q: "¿Dan soporte después del lanzamiento?",
    a: "Sí, ofrecemos planes de soporte mensual para mejoras y monitoreo, o trabajamos bajo demanda.",
  },
  {
    q: "¿Cómo se realiza el pago?",
    a: "Solicitamos 40% para agendar, 30% al entregar el avance navegable y 30% al concluir. Podemos ajustar a tus políticas.",
  },
];

const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    title: "E-commerce con gestión integral",
    tags: ["Next.js", "NestJS", "Stripe"],
    img: "/portfolio/ECCOMERCE-SERCOMIN/ecommerce-sercomin-4.jpeg",
    modalKey: "ECOM_SERCOMIN",
    result: "+32% en ventas mayoristas durante los primeros dos meses",
    badge: "Caso destacado",
  },
  {
    title: "App móvil multirrol",
    tags: ["React Native", "FastAPI", "iOS", "Android"],
    img: "/portfolio/APP-POLLOS/app-polleria-cover.jpeg",
    modalKey: "APP_POLLOS",
    result: "Pedidos organizados por rol con seguimiento en tiempo real",
  },
  {
    title: "Sistema administrativo de servicios",
    tags: ["Next.js", "NestJS", "PostgreSQL"],
    img: "/portfolio/ADMINISTRACION-LOCAL/admin-local-1.png",
    modalKey: "ADMIN_LOCAL",
    result: "Control total de servicios y almacén en múltiples sucursales",
  },
  {
    title: "Landing industrial de envases",
    tags: ["Next.js", "Landing", "WhatsApp"],
    img: "/portfolio/SUPERENVASES/superenvases-1.png",
    modalKey: "SUPERENVASES",
    result: "Canal directo de cotizaciones con catálogo de productos",
  },
  {
    title: "Landing química de fertilizantes",
    tags: ["Next.js", "B2B", "Lead Gen"],
    img: "/portfolio/FERTIKHOR/fertikhor-1.png",
    modalKey: "FERTIKHOR",
    result: "Prospectos B2B captados con formulario y redes sociales",
  },
  {
    title: "Punto de Venta Omnicanal",
    tags: ["NestJS", "Auth", "Hardware"],
    img: "/portfolio/POS/Screenshot 2025-11-03 230138.png",
    modalKey: "POS",
    result: "Inventarios y cajas unificados para sucursales físicas",
  },
];

const SITE_URL = "https://inndeso.com.mx";

const SERVICES_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Servicios de desarrollo de software",
  itemListElement: SERVICES.map(({ title, desc, highlights }, index) => {
    const serviceItem: Record<string, unknown> = {
      "@type": "Service",
      name: title,
      description: desc,
      areaServed: "MX",
      availableLanguage: ["es"],
      provider: {
        "@type": "Organization",
        name: "INNDESO",
        url: SITE_URL,
      },
    };

    if (highlights && highlights.length > 0) {
      serviceItem.serviceOutput = highlights;
    }

    return {
      "@type": "ListItem",
      position: index + 1,
      item: serviceItem,
    };
  }),
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const HOMEPAGE_WEBPAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "INNDESO | Desarrollo de software y páginas web a la medida",
  url: SITE_URL,
  description:
    "Desarrollo de páginas web, tiendas en línea, apps móviles y sistemas internos en México. Equipo senior que entrega rápido y con calidad.",
  publisher: {
    "@type": "Organization",
    name: "INNDESO",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icono.png`,
    },
  },
  inLanguage: "es-MX",
};

export default function Home() {
  const [activeProjectModal, setActiveProjectModal] = useState<ModalKey | null>(null);
  const [imagePreview, setImagePreview] = useState<{ src: string; alt: string } | null>(null);
  const projectModalRef = useRef<HTMLDivElement | null>(null);
  const previewModalRef = useRef<HTMLDivElement | null>(null);
  const lastFocusBeforeProjectModal = useRef<HTMLElement | null>(null);
  const lastFocusBeforePreview = useRef<HTMLElement | null>(null);

  const closeModal = () => setActiveProjectModal(null);
  const openModal = (modal: ModalKey) => setActiveProjectModal(modal);

  const closePreview = () => setImagePreview(null);
  const openPreview = (src: string, alt: string) => setImagePreview({ src, alt });

  const handleModalKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    onClose: () => void,
    container: HTMLDivElement | null,
  ) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key !== "Tab" || !container) {
      return;
    }

    const focusable = Array.from(
      container.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((element) => !element.hasAttribute("disabled") && element.getAttribute("aria-hidden") !== "true");

    if (focusable.length === 0) {
      event.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement as HTMLElement | null;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  };

  useEffect(() => {
    if (!activeProjectModal && !imagePreview) {
      return;
    }

    const { style } = document.body;
    const previousOverflow = style.overflow;
    style.overflow = "hidden";

    return () => {
      style.overflow = previousOverflow;
    };
  }, [activeProjectModal, imagePreview]);

  useEffect(() => {
    if (activeProjectModal) {
      lastFocusBeforeProjectModal.current = document.activeElement as HTMLElement | null;
      requestAnimationFrame(() => projectModalRef.current?.focus());
      return;
    }

    if (lastFocusBeforeProjectModal.current) {
      lastFocusBeforeProjectModal.current.focus();
      lastFocusBeforeProjectModal.current = null;
    }
  }, [activeProjectModal]);

  useEffect(() => {
    if (imagePreview) {
      lastFocusBeforePreview.current = document.activeElement as HTMLElement | null;
      requestAnimationFrame(() => previewModalRef.current?.focus());
      return;
    }

    if (lastFocusBeforePreview.current) {
      lastFocusBeforePreview.current.focus();
      lastFocusBeforePreview.current = null;
    }
  }, [imagePreview]);

  const renderPhoneScreens = (images: string[], altPrefix: string) => (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {images.map((img, index) => (
        <button
          key={img}
          type="button"
          onClick={() => openPreview(img, `${altPrefix} ${index + 1}`)}
          aria-label={`Ver ${altPrefix} ${index + 1}`}
          className="relative aspect-[9/16] w-full max-w-[220px] sm:max-w-[240px] cursor-zoom-in rounded-[32px] bg-neutral-950/80 p-3 shadow-xl shadow-neutral-900/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-neutral-50">
            <Image
              src={img}
              alt={`${altPrefix} ${index + 1}`}
              fill
              sizes="(min-width: 1280px) 18vw, (min-width: 768px) 30vw, 70vw"
              className="object-cover object-center"
              loading="lazy"
            />
          </div>
        </button>
      ))}
    </div>
  );

  const renderDesktopGallery = (images: string[], altPrefix: string) => (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((img, index) => (
        <button
          key={img}
          type="button"
          onClick={() => openPreview(img, `${altPrefix} ${index + 1}`)}
          aria-label={`Ver ${altPrefix} ${index + 1}`}
          className="relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
        >
          <Image
            src={img}
            alt={`${altPrefix} ${index + 1}`}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 35vw, 80vw"
            className={index === 0 ? "object-cover object-top" : "object-cover"}
            loading="lazy"
          />
        </button>
      ))}
    </div>
  );

  return (
    <>
      <Script
        id="homepage-webpage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOMEPAGE_WEBPAGE_JSON_LD) }}
      />
      <Script
        id="homepage-services-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICES_JSON_LD) }}
      />
      <Script
        id="homepage-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
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
                    Diseñamos y desarrollamos páginas web, tiendas en línea y sistemas internos que generan ventas reales desde los primeros días.
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                    {[
                      "Sitios listos para anunciar en menos de 4 semanas",
                      "Automatizaciones que conectan tu punto de venta, inventario y facturación",
                      "Equipo senior con soporte cercano y reportes claros",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

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
                    <a
                      href="#proyectos"
                      className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-6 py-3 text-sm sm:text-base font-semibold text-neutral-800 hover:bg-neutral-50 transition"
                    >
                      Ver proyectos reales
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
                    <div className="flex items-center gap-2 text-neutral-500">
                      <span className="text-xs uppercase tracking-wide text-neutral-400">Han confiado en nosotros:</span>
                      <span className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-600">
                        SERCOMIN • Pollería Express • Servicios Locales
                      </span>
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

          {/* CTA intermedia */}
          <section className="relative py-12 sm:py-16">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-blue-50 via-white to-blue-50" />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-3xl border border-blue-100 bg-white shadow-lg shadow-blue-500/5 p-6 sm:p-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">¿Listo para impulsar tu proyecto?</h3>
                  <p className="mt-2 text-neutral-600">
                    Agenda una llamada gratuita de 20 minutos y te mostramos ejemplos y estimados reales para tu empresa.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                  >
                    Agenda una llamada gratis
                  </a>
                  <a
                    href="mailto:hola@inndeso.com.mx"
                    className="inline-flex items-center justify-center rounded-xl border border-blue-200 px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
                  >
                    Enviar correo
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Paquetes */}
          <section className="bg-neutral-50 py-16 sm:py-20 border-t border-neutral-200/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Opciones pensadas para avanzar rápido</h2>
                <p className="mt-3 text-neutral-600">
                  Paquetes base que ajustamos a tu industria. Incluyen descubrimiento, diseño, desarrollo, QA y lanzamiento.
                </p>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {PACKAGES.map((pkg) => {
                  const quoteLink = `${WHATSAPP_BASE}?text=${encodeURIComponent(`Hola INNDESO, me interesa el paquete ${pkg.name}.`)}`;
                  return (
                    <div
                      key={pkg.name}
                      className={`group rounded-3xl border bg-white/85 p-6 shadow-sm backdrop-blur transition hover:shadow-xl ${
                        pkg.featured ? "border-blue-200 shadow-blue-200/40" : "border-neutral-200"
                      }`}
                    >
                      {pkg.featured && (
                        <span className="inline-flex items-center rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold text-blue-700">
                          Más solicitado
                        </span>
                      )}
                      <h3 className="mt-3 text-xl font-semibold text-neutral-900">{pkg.name}</h3>
                      <p className="mt-2 text-sm text-neutral-500">{pkg.idealFor}</p>
                      <div className="mt-4 flex items-baseline gap-2">
                        {pkg.previousPrice && (
                          <p className="text-sm font-semibold text-neutral-400 line-through">{pkg.previousPrice}</p>
                        )}
                        <p className="text-lg font-semibold text-blue-600">{pkg.price}</p>
                        <span className="text-xs uppercase tracking-wide text-neutral-400">Entrega estimada: {pkg.time}</span>
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                        {pkg.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <svg className="mt-1 h-4 w-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex flex-col gap-2">
                        <a
                          href={quoteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                        >
                          Cotizar este plan
                        </a>
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-5 py-2.5 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-50"
                        >
                          Hablar con un asesor
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Confianza */}
          <section className="py-14 sm:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl border border-neutral-200 bg-white/80 shadow-sm backdrop-blur">
              <div className="grid gap-8 lg:grid-cols-[2fr,3fr] items-center p-8 sm:p-10">
                <div>
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                    Garantía
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-neutral-900">Tu inversión segura desde la primera semana</h3>
                  <p className="mt-3 text-sm text-neutral-600">
                    Trabajamos por etapas cortas y medibles. Si algo no avanza como esperabas, ajustamos en la siguiente semana sin costo adicional.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Revisión semanal",
                      desc: "Demo navegable para validar diseño y desarrollo.",
                    },
                    {
                      title: "Soporte incluido",
                      desc: "30 días posteriores al lanzamiento para ajustes y dudas.",
                    },
                    {
                      title: "Propiedad total",
                      desc: "Código, infraestructura y accesos quedan a tu nombre.",
                    },
                    {
                      title: "KPIs claros",
                      desc: "Tablero con métricas y entregables para tu dirección.",
                    },
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

          {/* Testimonios */}
          <section className="bg-white py-16 sm:py-20 border-t border-neutral-200/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Lo que dicen nuestros clientes</h2>
                <p className="mt-3 text-neutral-600">Historias reales de empresas que confiaron en INNDESO para construir sus productos digitales.</p>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {TESTIMONIALS.map((testimonial) => {
                  const initials = testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase();
                  return (
                    <div key={testimonial.name} className="rounded-3xl border border-neutral-200 bg-neutral-50/80 p-6 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/10 text-sm font-semibold text-blue-700">
                          {initials}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-neutral-900">{testimonial.name}</p>
                          <p className="text-xs text-neutral-500">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-neutral-700">“{testimonial.quote}”</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Preguntas frecuentes */}
          <section id="faq" className="bg-neutral-50 py-16 sm:py-20 border-t border-neutral-200/60">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Preguntas frecuentes</h2>
                <p className="mt-3 text-neutral-600">Resolvemos las dudas más comunes antes de iniciar un proyecto con nosotros.</p>
              </div>
              <div className="mt-8 space-y-6">
                {FAQS.map((item) => (
                  <div key={item.q} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                    <h3 className="text-sm font-semibold text-neutral-900">{item.q}</h3>
                    <p className="mt-2 text-sm text-neutral-600">{item.a}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-white/90 p-5 text-sm text-neutral-700">
                <div>
                  ¿No ves tu pregunta aquí? Escríbenos y te respondemos en minutos.
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Abrir WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* Servicios */}
          <section id="servicios" className="relative overflow-hidden bg-neutral-50 py-16 sm:py-20">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-dots" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Servicios</h2>
              <p className="mt-2 text-neutral-600 max-w-2xl">Diseñamos sitios, tiendas en línea y plataformas internas que generan resultados desde el día uno.</p>
              <div className="mt-6 grid md:grid-cols-3 gap-6">
                {SERVICES.map((service) => (
                  <div
                    key={service.title}
                    className="group rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition hover:border-blue-200 hover:shadow-lg"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="mt-2 text-sm text-neutral-600">{service.desc}</p>
                    {service.highlights && (
                      <ul className="mt-4 space-y-1 text-sm text-neutral-500">
                        {service.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {service.href && (
                      <a
                        href={service.href}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
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
                    )}
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
                {PORTFOLIO_PROJECTS.map((project, index) => {
                  const isInteractive = Boolean(project.modalKey);
                  const isPhoneProject = project.modalKey === "APP_POLLOS";

                  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
                    if (!project.modalKey) {
                      return;
                    }
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      openModal(project.modalKey);
                    }
                  };

                  return (
                    <div
                      key={project.title}
                      role={isInteractive ? "button" : undefined}
                      tabIndex={isInteractive ? 0 : undefined}
                      onClick={isInteractive ? () => openModal(project.modalKey!) : undefined}
                      onKeyDown={isInteractive ? handleKeyDown : undefined}
                      className={`group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white/85 shadow-sm backdrop-blur transition hover:border-blue-200 hover:shadow-lg ${
                        isInteractive ? "cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600" : ""
                      }`}
                      aria-label={isInteractive ? `Ver detalles de ${project.title}` : undefined}
                    >
                      <div
                        className={`relative w-full overflow-hidden ${
                          isPhoneProject
                            ? "flex aspect-[3/2] items-center justify-center bg-neutral-900/5"
                            : "aspect-[3/2] flex items-center justify-center bg-neutral-900/5"
                        }`}
                      >
                        {project.badge && (
                          <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold text-blue-700">
                            {project.badge}
                          </span>
                        )}
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
                            className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
                            priority={index < 2}
                          />
                        )}
                      </div>
                      <div className="p-5">
                        <h3 className="font-semibold">{project.title}</h3>
                        {project.result && (
                          <p className="mt-1 text-sm text-neutral-600">{project.result}</p>
                        )}
                        <div className="mt-2 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
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

          {activeProjectModal === "ECOM_SERCOMIN" && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="ecom-sercomin-modal-title"
              onClick={closeModal}
              onKeyDown={(event) => handleModalKeyDown(event, closeModal, projectModalRef.current)}
            >
              <div
                ref={projectModalRef}
                tabIndex={-1}
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600 shadow-sm transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
                  aria-label="Cerrar modal del e-commerce"
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
                        <span className="mt-1 inline-flex h-6 min-w-[90px] items-center justify-center rounded-full bg-indigo-600 px-2 text-xs font-semibold text-white">
                          {feature.label}
                        </span>
                        <p>{feature.detail}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-indigo-200 bg-white/80 p-5 text-sm text-indigo-900 shadow-sm">
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900">¿Quieres un e-commerce como este?</h4>
                      <p className="mt-1 text-neutral-600">Agenda una consultoría gratuita y te mostramos el flujo completo adaptado a tu negocio.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
                      >
                        Agenda llamada
                      </a>
                      <button
                        type="button"
                        onClick={closeModal}
                        className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-50"
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeProjectModal === "ADMIN_LOCAL" && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="admin-local-modal-title"
              onClick={closeModal}
              onKeyDown={(event) => handleModalKeyDown(event, closeModal, projectModalRef.current)}
            >
              <div
                ref={projectModalRef}
                tabIndex={-1}
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600 shadow-sm transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-600"
                  aria-label="Cerrar modal del sistema administrativo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                    <path fill="currentColor" d="M6.225 4.811 4.81 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586z" />
                  </svg>
                </button>

                <div className="grid gap-6 px-6 py-8 sm:px-10 sm:py-10">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-amber-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
                      Backoffice
                    </span>
                    <h3 id="admin-local-modal-title" className="mt-4 text-2xl font-bold text-neutral-900">
                      Sistema administrativo de servicios
                    </h3>
                    <p className="mt-3 text-base text-neutral-600">{ADMIN_LOCAL_DESCRIPTION}</p>
                  </div>

                  {renderDesktopGallery(ADMIN_LOCAL_IMAGES, "Captura del sistema administrativo")}

                  <div className="grid gap-3 rounded-2xl border border-amber-100 bg-amber-50/80 p-5 text-sm text-amber-900">
                    {ADMIN_LOCAL_FEATURES.map((feature) => (
                      <div key={feature.label} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-6 min-w-[90px] items-center justify-center rounded-full bg-amber-600 px-2 text-xs font-semibold text-white">
                          {feature.label}
                        </span>
                        <p>{feature.detail}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-amber-200 bg-white/80 p-5 text-sm text-amber-900 shadow-sm">
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900">¿Necesitas un backoffice como este?</h4>
                      <p className="mt-1 text-neutral-600">Te ayudamos a mapear procesos y lanzar un panel que tu equipo adopte desde el primer día.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-700"
                      >
                        Agenda llamada
                      </a>
                      <button
                        type="button"
                        onClick={closeModal}
                        className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-50"
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeProjectModal === "SUPERENVASES" && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="superenvases-modal-title"
              onClick={closeModal}
              onKeyDown={(event) => handleModalKeyDown(event, closeModal, projectModalRef.current)}
            >
              <div
                ref={projectModalRef}
                tabIndex={-1}
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600 shadow-sm transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500"
                  aria-label="Cerrar modal de Super Envases"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                    <path fill="currentColor" d="M6.225 4.811 4.81 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586z" />
                  </svg>
                </button>

                <div className="grid gap-6 px-6 py-8 sm:px-10 sm:py-10">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                      Industria
                    </span>
                    <h3 id="superenvases-modal-title" className="mt-4 text-2xl font-bold text-neutral-900">
                      Super Envases
                    </h3>
                    <p className="mt-3 text-base text-neutral-600">{SUPERENVASES_DESCRIPTION}</p>
                  </div>

                  {renderDesktopGallery(SUPERENVASES_IMAGES, "Captura de landing Super Envases")}

                  <div className="grid gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/80 p-5 text-sm text-emerald-900">
                    {SUPERENVASES_FEATURES.map((feature) => (
                      <div key={feature.label} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-6 min-w-[96px] items-center justify-center rounded-full bg-emerald-600 px-2 text-xs font-semibold text-white">
                          {feature.label}
                        </span>
                        <p>{feature.detail}</p>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={closeModal}
                      className="mt-2 inline-flex items-center gap-2 self-end rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeProjectModal === "FERTIKHOR" && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="fertikhor-modal-title"
              onClick={closeModal}
              onKeyDown={(event) => handleModalKeyDown(event, closeModal, projectModalRef.current)}
            >
              <div
                ref={projectModalRef}
                tabIndex={-1}
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-500"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600 shadow-sm transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-500"
                  aria-label="Cerrar modal de Fertikhor"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                    <path fill="currentColor" d="M6.225 4.811 4.81 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586z" />
                  </svg>
                </button>

                <div className="grid gap-6 px-6 py-8 sm:px-10 sm:py-10">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-lime-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-lime-700">
                      Agroindustria
                    </span>
                    <h3 id="fertikhor-modal-title" className="mt-4 text-2xl font-bold text-neutral-900">
                      Fertikhor
                    </h3>
                    <p className="mt-3 text-base text-neutral-600">{FERTIKHOR_DESCRIPTION}</p>
                  </div>

                  {renderDesktopGallery(FERTIKHOR_IMAGES, "Captura de landing Fertikhor")}

                  <div className="grid gap-3 rounded-2xl border border-lime-100 bg-lime-50/80 p-5 text-sm text-lime-900">
                    {FERTIKHOR_FEATURES.map((feature) => (
                      <div key={feature.label} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-6 min-w-[96px] items-center justify-center rounded-full bg-lime-600 px-2 text-xs font-semibold text-white">
                          {feature.label}
                        </span>
                        <p>{feature.detail}</p>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={closeModal}
                      className="mt-2 inline-flex items-center gap-2 self-end rounded-xl bg-lime-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-lime-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-500"
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
              onKeyDown={(event) => handleModalKeyDown(event, closeModal, projectModalRef.current)}
            >
              <div
                ref={projectModalRef}
                tabIndex={-1}
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
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
              onKeyDown={(event) => handleModalKeyDown(event, closeModal, projectModalRef.current)}
            >
              <div
                ref={projectModalRef}
                tabIndex={-1}
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600 shadow-sm transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600"
                  aria-label="Cerrar modal de la App de Pollería"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                    <path fill="currentColor" d="M6.225 4.811 4.81 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586z" />
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
                  </div>
                </div>
              </div>
            </div>
          )}

          {imagePreview && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6"
              role="dialog"
              aria-modal="true"
              aria-label={`Vista ampliada de ${imagePreview.alt}`}
              onClick={closePreview}
              onKeyDown={(event) => handleModalKeyDown(event, closePreview, previewModalRef.current)}
            >
              <div
                ref={previewModalRef}
                tabIndex={-1}
                className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl bg-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={closePreview}
                  className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900/80 text-white shadow-lg transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                  aria-label="Cerrar vista ampliada"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                    <path fill="currentColor" d="M6.225 4.811 4.81 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586z" />
                  </svg>
                </button>

                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={imagePreview.src}
                    alt={imagePreview.alt}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          )}

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
