"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./home-hero.css";

const WHATSAPP_URL =
  "https://wa.me/523312050703?text=Hola%20INNDESO%2C%20quiero%20platicar%20sobre%20un%20proyecto";

const PLATFORMS = ["Web", "Windows", "macOS", "iOS", "Android", "Linux"];

const HERO_SYSTEMS = [
  {
    name: "GeoJornada",
    eyebrow: "Operación en campo",
    headline: "GPS en tiempo real",
    label: "Centro de operaciones",
    image: "/portfolio/geojornada/mapa-operativo-demo.webp",
    imageAlt: "Panel demostrativo de GeoJornada con mapa operativo y ubicación en vivo",
    phone: "/portfolio/geojornada/evidencia-movil-demo.webp",
    signal: "Ubicación recibida ahora",
  },
  {
    name: "Operativo 360",
    eyebrow: "Control centralizado",
    headline: "Ventas, stock y finanzas",
    label: "Sistema empresarial demostrativo",
    image: "/portfolio/demos/centro-operativo-demo.svg",
    imageAlt: "Plataforma empresarial demostrativa con ventas, inventario, órdenes y finanzas",
    phone: "/portfolio/sana-life/venta-movil-demo.svg",
    signal: "Información sincronizada",
  },
] as const;

export default function HomeHero() {
  const [activeSystem, setActiveSystem] = useState(0);
  const system = HERO_SYSTEMS[activeSystem];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setActiveSystem((current) => (current + 1) % HERO_SYSTEMS.length);
    }, 6200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero__grid" aria-hidden="true" />
      <div className="home-hero__glow home-hero__glow--one" aria-hidden="true" />
      <div className="home-hero__glow home-hero__glow--two" aria-hidden="true" />

      <div className="home-hero__inner">
        <div className="home-hero__copy">
          <div className="home-hero__eyebrow">
            <span className="home-hero__live-dot" />
            Software que mueve operaciones reales
          </div>

          <h1 id="home-hero-title">
            Tu negocio puede operar <span>mejor.</span>
          </h1>

          <p className="home-hero__lead">
            Diseñamos software a la medida que conecta personas, procesos y datos: desde una app móvil hasta el panel,
            el GPS en vivo y el servidor que sostiene toda la operación.
          </p>

          <div className="home-hero__actions">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="home-hero__primary"
              data-track-cta="true"
              data-cta-name="hero_conversar_proyecto"
              data-cta-location="home_hero"
            >
              Cuéntanos tu proyecto
              <span aria-hidden="true">↗</span>
            </a>
            <Link href="/proyectos" className="home-hero__secondary">
              Explorar proyectos
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="home-hero__platforms" aria-label="Plataformas que desarrollamos">
            <span className="home-hero__platforms-label">Desarrollamos para</span>
            <div className="home-hero__platform-list">
              {PLATFORMS.map((platform) => (
                <span key={platform}>{platform}</span>
              ))}
              <span>+ más</span>
            </div>
          </div>
        </div>

        <div className="home-hero__visual" aria-label="Ejemplos de plataformas web y aplicaciones móviles">
          <button
            type="button"
            className="home-hero__signal-card home-hero__signal-card--top"
            onClick={() => setActiveSystem((current) => (current + 1) % HERO_SYSTEMS.length)}
            aria-label={`Mostrar el siguiente sistema. Actualmente: ${system.name}`}
          >
            <span className="home-hero__signal-icon">⌖</span>
            <span>
              <small>{system.eyebrow}</small>
              <strong>{system.headline}</strong>
            </span>
            <i><b /> Ver sistema</i>
          </button>

          <div className="home-hero__browser" key={system.name}>
            <div className="home-hero__browser-bar">
              <span className="home-hero__browser-dots"><i /><i /><i /></span>
              <span className="home-hero__browser-label">{system.label}</span>
              <span className="home-hero__browser-status"><i /> Seguro</span>
            </div>
            <div className="home-hero__browser-screen">
              <Image
                src={system.image}
                alt={system.imageAlt}
                fill
                priority
                sizes="(min-width: 1100px) 54vw, 94vw"
              />
            </div>
          </div>

          <div className="home-hero__phone" aria-hidden="true">
            <div className="home-hero__phone-speaker" />
            <div className="home-hero__phone-screen">
              <Image
                src={system.phone}
                alt=""
                fill
                sizes="180px"
              />
            </div>
          </div>

          <div className="home-hero__signal-card home-hero__signal-card--bottom">
            <span className="home-hero__pulse" />
            <span>
              <small>Última señal</small>
              <strong>{system.signal}</strong>
            </span>
          </div>

          <div className="home-hero__switcher" aria-label="Cambiar sistema presentado">
            {HERO_SYSTEMS.map((item, index) => (
              <button
                type="button"
                key={item.name}
                className={activeSystem === index ? "is-active" : undefined}
                onClick={() => setActiveSystem(index)}
                aria-label={`Mostrar ${item.name}`}
                aria-pressed={activeSystem === index}
              >
                <span /> {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="home-hero__footer">
        <span>Web + app + servidor</span>
        <p>Un solo equipo para construir todo el ecosistema.</p>
        <Link href="/servicios">Conoce nuestras soluciones <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}
