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
  const pauseUntilRef = useRef(0);
  const hoverRef = useRef(false);
  const scrollRafRef = useRef(0);
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
    return () => {};
  }, [loopItems.length]);

  const normalizeLoopPosition = () => {
    const track = trackRef.current;
    if (!track || loopItems.length === 0) return;
    const segment = track.scrollWidth / 3;

    if (track.scrollLeft >= segment * 2) {
      track.scrollLeft -= segment;
    } else if (track.scrollLeft <= 0) {
      track.scrollLeft += segment;
    }
  };

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
    pauseUntilRef.current = Date.now() + 4200;
    window.setTimeout(() => normalizeLoopPosition(), 460);
  };

  useEffect(() => {
    if (loopItems.length === 0) return;

    const intervalId = window.setInterval(() => {
      if (Date.now() < pauseUntilRef.current || hoverRef.current) {
        return;
      }
      slideByCard(1);
    }, 2800);

    return () => {
      window.clearInterval(intervalId);
      if (scrollRafRef.current) {
        window.cancelAnimationFrame(scrollRafRef.current);
      }
    };
  }, [loopItems.length]);

  return (
    <>
      <div
        className="pmc-shell"
        onMouseEnter={() => {
          hoverRef.current = true;
        }}
        onMouseLeave={() => {
          hoverRef.current = false;
        }}
      >
        <button type="button" className="pmc-control pmc-control--left" onClick={() => slideByCard(-1)} aria-label="Anterior">
          <span aria-hidden="true">‹</span>
        </button>

        <div
          ref={trackRef}
          className="pmc-track"
          aria-label="Carrusel de proyectos"
          onTouchStart={() => {
            pauseUntilRef.current = Date.now() + 5200;
          }}
          onScroll={() => {
            if (scrollRafRef.current) return;
            scrollRafRef.current = window.requestAnimationFrame(() => {
              normalizeLoopPosition();
              scrollRafRef.current = 0;
            });
          }}
        >
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
