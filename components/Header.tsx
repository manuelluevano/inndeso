"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/proceso", label: "Proceso" },
];

const WHATSAPP_URL =
  "https://wa.me/523312050703?text=Hola%20INNDESO%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20desarrollo%20de%20software";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61578554534142";

const Header = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const normalizedPath = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";

  const isActivePath = (href: string) => {
    if (href === "/") {
      return normalizedPath === "/";
    }

    return normalizedPath === href || normalizedPath.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="w-full">
        <div className="border-b border-slate-200/80 bg-slate-100/90 shadow-[0_10px_24px_rgba(15,23,42,0.14)] backdrop-blur-md">
          <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center" aria-label="Ir al inicio">
              <Image src="/logo.png" alt="INNDESO" width={430} height={112} className="h-16 w-auto sm:h-[4.35rem]" priority />
            </Link>

            <nav className="hidden items-center gap-6 lg:gap-8 md:flex" aria-label="Navegacion principal">
              {NAV_ITEMS.map((item) => {
                const isActive = isActivePath(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`border-b-2 pb-1 text-sm font-semibold tracking-[0.01em] transition-colors ${
                      isActive
                        ? "border-blue-700 text-slate-900"
                        : "border-transparent text-slate-700 hover:text-blue-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook INNDESO"
                data-track-cta="true"
                data-cta-name="facebook_header"
                data-cta-location="header"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-[#1877F2] transition hover:scale-105 hover:border-blue-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-5 w-5 fill-current">
                  <path d="M279.14 288l14.22-92.66h-88.91V127.36c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0C152.49 0 104.3 44.38 104.3 124.72v70.62H22.89V288h81.41v224h100.17V288z" />
                </svg>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-track-cta="true"
                data-cta-name="whatsapp_header"
                data-cta-location="header"
                className="inline-flex items-center rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Contacto
              </a>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 md:hidden"
              onClick={() => setOpenMenu((value) => !value)}
              aria-label={openMenu ? "Cerrar menu" : "Abrir menu"}
              aria-expanded={openMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {openMenu && (
            <div className="border-t border-slate-200 px-4 pb-4 pt-3 md:hidden">
              <nav className="flex flex-col gap-2" aria-label="Navegacion movil">
                {NAV_ITEMS.map((item) => {
                  const isActive = isActivePath(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpenMenu(false)}
                      className={`rounded-md px-3 py-2 text-sm font-medium ${
                        isActive ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-200/70"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track-cta="true"
                  data-cta-name="whatsapp_menu_mobile"
                  data-cta-location="header_mobile"
                  className="mt-1 inline-flex items-center justify-center rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white"
                >
                  Contacto
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track-cta="true"
                  data-cta-name="facebook_menu_mobile"
                  data-cta-location="header_mobile"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-4 w-4 fill-[#1877F2]">
                    <path d="M279.14 288l14.22-92.66h-88.91V127.36c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0C152.49 0 104.3 44.38 104.3 124.72v70.62H22.89V288h81.41v224h100.17V288z" />
                  </svg>
                  Facebook
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
