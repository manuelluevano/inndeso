"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import "./project-monitor-carousel.css";

type CarouselItem = {
  src: StaticImageData;
  alt: string;
};

type ProjectMonitorCarouselProps = {
  items: CarouselItem[];
  monitorFrame: StaticImageData;
};

export default function ProjectMonitorCarousel({ items, monitorFrame }: ProjectMonitorCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [preview, setPreview] = useState<CarouselItem | null>(null);

  const loopItems = useMemo(() => {
    if (items.length === 0) return [];
    return [...items, ...items, ...items];
  }, [items]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || loopItems.length === 0) {
      return;
    }

    const segment = track.scrollWidth / 3;
    track.scrollLeft = segment;

    let raf = 0;
    const speed = 0.35;

    const animate = () => {
      if (!track.matches(":hover")) {
        track.scrollLeft += speed;
      }

      if (track.scrollLeft >= segment * 2) {
        track.scrollLeft -= segment;
      } else if (track.scrollLeft <= 0) {
        track.scrollLeft += segment;
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [loopItems.length]);

  useEffect(() => {
    if (!preview) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreview(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [preview]);

  const slideByCard = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>(".pmc-card");
    const step = card ? card.offsetWidth + 18 : 360;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <>
      <div className="pmc-shell">
        <button type="button" className="pmc-control pmc-control--left" onClick={() => slideByCard(-1)} aria-label="Anterior">
          <span aria-hidden="true">‹</span>
        </button>

        <div ref={trackRef} className="pmc-track" aria-label="Carrusel de proyectos">
          {loopItems.map((item, index) => (
            <button
              key={`${item.alt}-${index}`}
              type="button"
              className="pmc-card"
              onClick={() => setPreview(item)}
              aria-label={`Abrir ${item.alt} en grande`}
            >
              <div className="pmc-screen">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="pmc-screen-image"
                  sizes="(min-width: 1200px) 28vw, (min-width: 900px) 33vw, 88vw"
                />
              </div>
              <Image src={monitorFrame} alt="Monitor de proyecto" className="pmc-frame" />
            </button>
          ))}
        </div>

        <button type="button" className="pmc-control pmc-control--right" onClick={() => slideByCard(1)} aria-label="Siguiente">
          <span aria-hidden="true">›</span>
        </button>
      </div>

      {preview && (
        <div className="pmc-modal" role="dialog" aria-modal="true" aria-label="Vista previa del proyecto" onClick={() => setPreview(null)}>
          <div className="pmc-modal-inner" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="pmc-modal-close" onClick={() => setPreview(null)} aria-label="Cerrar">
              ×
            </button>
            <div className="pmc-modal-image-wrap">
              <Image src={preview.src} alt={preview.alt} fill className="pmc-modal-image" sizes="90vw" priority />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
