"use client";

import { useEffect, useRef } from "react";
import "./style.css";

export default function Inicio() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const viewport = window.innerHeight || 1;
        const progress = (rect.top + rect.height * 0.5) / viewport;
        const clamped = Math.max(-1, Math.min(1, progress));
        element.style.setProperty("--hero-parallax", `${clamped * 16}px`);
        raf = 0;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={sectionRef} className="inicio-hero" aria-label="Inicio">
      <div className="inicio-overlay" aria-hidden="true" />
      <div className="inicio-frame">
        <div className="inicio-content">
          <h1 className="inicio-title">
            <span className="inicio-title-line">
              <span className="inicio-title-accent">Soluciones Digitales</span> a la Medida
            </span>
            <br />
            para tu Empresa
          </h1>

          <p className="inicio-subtitle">
            Desarrollamos p&aacute;ginas web, aplicaciones m&oacute;viles y sistemas personalizados enfocados en
            resultados y escalabilidad.
          </p>

          <a
            href="#servicios"
            className="inicio-cta"
            data-track-cta="true"
            data-cta-name="hero_conocer_mas"
            data-cta-location="inicio_hero"
          >
            Conocer m&aacute;s
          </a>
        </div>
      </div>
    </section>
  );
}
