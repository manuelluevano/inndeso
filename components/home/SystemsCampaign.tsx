"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/site-content";
import "./systems-campaign.css";

const systems = [
  {
    name: "MarShop",
    category: "Comercio + cobranza",
    image: "/portfolio/marshop/productos-demo.png",
    alt: "Aplicación MarShop con catálogo visual, inventario, ventas y cobranza",
    status: "Ventas a plazos bajo control",
    href: "/proyectos/marshop",
  },
  {
    name: "CellGo",
    category: "Comercio + taller",
    image: "/portfolio/cellgo/panel-administrativo.png",
    alt: "Panel administrativo real de CellGo",
    status: "Ventas e inventario conectados",
    href: "/proyectos/cellgo",
  },
  {
    name: "LibreMente",
    category: "Educación + aprendizaje",
    image: "/portfolio/libremente/libremente-panel-web-v2.png",
    alt: "LibreMente con biblioteca, actividades de lectura y seguimiento del progreso",
    status: "Lectura y aprendizaje en un solo lugar",
    href: "/proyectos/libremente",
  },
  {
    name: "Sana Life",
    category: "Logística + reparto",
    image: "/portfolio/sana-life/mapa-en-vivo-demo.svg",
    alt: "Plataforma Sana Life con rutas y repartidores en vivo",
    status: "Operación en campo visible",
    href: "/proyectos/sana-life",
  },
  {
    name: "GeoJornada",
    category: "GPS + personal",
    image: "/portfolio/geojornada/mapa-operativo-demo.webp",
    alt: "Centro de control GeoJornada con GPS en vivo",
    status: "Última ubicación recibida",
    href: "/proyectos/geojornada",
  },
  {
    name: "MovilSource",
    category: "Taller + finanzas",
    image: "/portfolio/movilsource/taller-demo.webp",
    alt: "Sistema de taller y administración MovilSource",
    status: "Servicios bajo control",
    href: "/proyectos/movilsource",
  },
] as const;

const benefits = [
  ["▥", "Más control", "en tu operación"],
  ["◷", "Menos tareas", "repetitivas"],
  ["◎", "Tu equipo", "siempre alineado"],
  ["◇", "Información", "segura y disponible"],
] as const;

export default function SystemsCampaign() {
  const [active, setActive] = useState(0);
  const system = systems[active];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % systems.length);
    }, 5600);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="systems-campaign reveal-up" aria-labelledby="systems-campaign-title">
      <Image
        className="systems-campaign__background"
        src="/visuals/oficina-software-inndeso.png"
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
      />
      <div className="systems-campaign__wash" aria-hidden="true" />

      <div className="systems-campaign__copy">
        <div className="systems-campaign__brand">
          <span><Image src="/icono.png" alt="" width={34} height={34} /></span>
          <strong>INNDESO</strong>
          <small>Software a la medida</small>
        </div>

        <span className="systems-campaign__kicker">Un programa para toda tu operación</span>
        <h2 id="systems-campaign-title">Todo tu negocio, <span>bajo control.</span></h2>
        <p>Reúne ventas, inventario, clientes, rutas, personal y reportes en un sistema claro, hecho para la forma real en que trabaja tu empresa.</p>

        <div className="systems-campaign__benefits">
          {benefits.map(([icon, title, detail]) => (
            <div key={title}>
              <i aria-hidden="true">{icon}</i>
              <span><strong>{title}</strong><small>{detail}</small></span>
            </div>
          ))}
        </div>

        <div className="systems-campaign__actions">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-track-cta="true" data-cta-name="campaign_demo" data-cta-location="systems_campaign">
            Solicitar una demostración <span aria-hidden="true">→</span>
          </a>
          <Link href="/proyectos">Ver sistemas reales</Link>
        </div>

        <div className="systems-campaign__proof">
          <span><i /> Desarrollo en México</span>
          <span>Proyectos por etapas</span>
          <span>Soporte cercano</span>
        </div>
      </div>

      <div className="systems-campaign__devices" aria-label="Sistemas desarrollados para computadora y celular">
        <div className="systems-campaign__floating systems-campaign__floating--top">
          <i /> <span><small>{system.category}</small><strong>{system.status}</strong></span>
        </div>

        <Link className="systems-campaign__case-link" href={system.href}>
          Ver caso {system.name} <span aria-hidden="true">↗</span>
        </Link>

        <div className="systems-campaign__laptop" key={system.name}>
          <div className="systems-campaign__laptop-lid">
            <div className="systems-campaign__laptop-camera" />
            <div className="systems-campaign__laptop-screen">
              <div className="systems-campaign__window-bar"><i /><i /><i /><span>{system.name} · resumen del negocio</span></div>
              <div className="systems-campaign__window-view">
                <Image src={system.image} alt={system.alt} fill sizes="(min-width: 1100px) 54vw, 94vw" />
              </div>
            </div>
          </div>
          <div className="systems-campaign__laptop-base"><i /></div>
        </div>

        {system.name !== "LibreMente" ? (
          <>
            <div className="systems-campaign__phone systems-campaign__phone--one">
              <div><Image src="/portfolio/sana-life/venta-movil-demo.svg" alt="Aplicación móvil de ventas y reparto Sana Life" fill sizes="160px" /></div>
              <small>Sana Life</small>
            </div>

            <div className="systems-campaign__phone systems-campaign__phone--two">
              <div><Image src="/portfolio/geojornada/evidencia-movil-demo.webp" alt="Aplicación móvil de evidencia GeoJornada" fill sizes="145px" /></div>
              <small>GeoJornada</small>
            </div>
          </>
        ) : null}

        <div className="systems-campaign__switcher" aria-label="Seleccionar sistema principal">
          {systems.map((item, index) => (
            <button
              type="button"
              key={item.name}
              className={index === active ? "is-active" : undefined}
              onClick={() => setActive(index)}
              aria-pressed={index === active}
            >
              <i /> {item.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
