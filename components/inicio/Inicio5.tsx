"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import "./inicio5.css";

import empresa1 from "./empresas/empresa1.png";
import empresa2 from "./empresas/empresa2.png";
import empresa3 from "./empresas/empresa3.png";
import empresa4 from "./empresas/empresa4.png";
import empresa5 from "./empresas/empresa5.png";
import empresa6 from "./empresas/empresa6.png";
import empresa7 from "./empresas/empresa7.png";

const LOGOS = [
  { src: empresa1, alt: "Empresa cliente 1" },
  { src: empresa2, alt: "Empresa cliente 2" },
  { src: empresa3, alt: "Empresa cliente 3" },
  { src: empresa4, alt: "Empresa cliente 4" },
  { src: empresa5, alt: "Empresa cliente 5" },
  { src: empresa6, alt: "Empresa cliente 6" },
  { src: empresa7, alt: "Empresa cliente 7" },
];

export default function Inicio5() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const loop = [...LOGOS, ...LOGOS];

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
        element.style.setProperty("--logos-parallax", `${clamped * 10}px`);
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
    <section ref={sectionRef} className="inicio5-section" aria-label="Empresas que confían en Inndeso">
      <div className="inicio5-wrap">
        <h2 className="inicio5-title">Empresas que confían en Inndeso</h2>

        <div className="inicio5-marquee" aria-label="Logos de empresas">
          <div className="inicio5-track">
            {loop.map((logo, index) => (
              <div key={`${logo.alt}-${index}`} className="inicio5-logo-item">
                <Image src={logo.src} alt={logo.alt} className="inicio5-logo" />
              </div>
            ))}
          </div>
        </div>

        <p className="inicio5-note">Algunos proyectos pueden estar protegidos por acuerdos de confidencialidad.</p>
      </div>
    </section>
  );
}
