"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import "./inicio3.css";

type StatItem = {
  target: number;
  label: string;
};

const STATS: StatItem[] = [
  { target: 90, label: "Proyectos desarrollados para diferentes giros empresariales" },
  { target: 100, label: "Funcionalidades implementadas y optimizadas" },
  { target: 40, label: "Clientes que confían en nuestras soluciones digitales" },
];

function useCountUp(target: number, play: boolean, duration = 1300) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!play) {
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [play, target, duration]);

  return value;
}

export default function Inicio3() {
  const containerRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const values = useMemo(() => STATS.map((item) => item.target), []);
  const count1 = useCountUp(values[0], active);
  const count2 = useCountUp(values[1], active);
  const count3 = useCountUp(values[2], active);

  const counters = [count1, count2, count3];

  return (
    <section ref={containerRef} className="inicio3-section" aria-label="Indicadores de resultados">
      <div className="inicio3-overlay" aria-hidden="true" />
      <div className="inicio3-grid">
        {STATS.map((item, index) => (
          <article key={item.label} className="inicio3-item">
            <p className="inicio3-number">+{counters[index]}</p>
            <p className="inicio3-label">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
