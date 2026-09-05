"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./site-header.css";

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Soluciones" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/precios", label: "Precios" },
  { href: "/proceso", label: "Cómo trabajamos" },
];

const WHATSAPP_URL =
  "https://wa.me/523312050703?text=Hola%20INNDESO%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20desarrollo%20de%20software";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61578554534142";
const INSTAGRAM_URL = "https://www.instagram.com/inndeso_mx/";

const Header = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const normalizedPath = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  useEffect(() => {
    if (!openMenu) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openMenu]);

  const isActivePath = (href: string) => {
    if (href === "/") {
      return normalizedPath === "/";
    }

    return normalizedPath === href || normalizedPath.startsWith(`${href}/`);
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="INNDESO, ir al inicio">
          <span className="site-header__brand-logo" aria-hidden="true"><Image src="/icono.png" alt="" width={515} height={501} priority /></span>
          <span className="site-header__brand-name">INNDESO</span>
        </Link>

        <nav className="site-header__nav" aria-label="Navegación principal">
              {NAV_ITEMS.map((item) => {
                const isActive = isActivePath(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={isActive ? "is-active" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
        </nav>

        <div className="site-header__actions">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="site-header__social site-header__social--instagram" aria-label="Instagram de INNDESO">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.7" r="1" className="is-fill"/></svg>
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="site-header__social site-header__social--facebook" aria-label="Facebook de INNDESO">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 8H17V4.4c-.4-.1-1.9-.2-3.3-.2-3.3 0-5.5 2-5.5 5.7V13H5v4h3.2v7h4V17h3.3l.5-4h-3.8V10c0-1.2.3-2 2.3-2Z" className="is-fill"/></svg>
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="site-header__social site-header__social--whatsapp" aria-label="WhatsApp de INNDESO">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12 0 12 12 0 0 0 1.6 18L0 24l6.2-1.6A12 12 0 0 0 24 12c0-3.2-1.2-6.2-3.5-8.5Zm-8.5 18a9.7 9.7 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.9 9.9 0 1 1 12 21.5Zm5.5-7.7c-.3-.1-1.6-.8-1.8-.9-.3-.1-.4-.1-.6.2l-.8 1c-.2.2-.3.2-.6.1-1.6-.8-2.6-1.4-3.6-3.2-.3-.5.3-.4.8-1.5.1-.2 0-.3 0-.4l-.8-2c-.2-.5-.5-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.6c.2.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.5-.3Z" className="is-fill"/></svg>
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="site-header__cta" data-track-cta="true" data-cta-name="whatsapp_header" data-cta-location="header">
            Hablemos <span aria-hidden="true">↗</span>
          </a>
        </div>

        <button type="button" className="site-header__menu-button" onClick={() => setOpenMenu((value) => !value)} aria-label={openMenu ? "Cerrar menú" : "Abrir menú"} aria-expanded={openMenu} aria-controls="mobile-navigation">
          {openMenu ? "×" : "☰"}
        </button>
      </div>

      <nav id="mobile-navigation" className={`site-header__mobile ${openMenu ? "is-open" : ""}`} aria-label="Navegación móvil" aria-hidden={!openMenu}>
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpenMenu(false)} className={isActivePath(item.href) ? "is-active" : undefined}>
            {item.label}
          </Link>
        ))}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="site-header__mobile-cta" onClick={() => setOpenMenu(false)}>
          Cuéntanos tu proyecto
        </a>
        <div className="site-header__mobile-social">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
