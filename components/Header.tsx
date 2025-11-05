"use client";

import Link from "next/link";
import { useState } from "react";

const SocialLink = ({
  href,
  label,
  children,
  className = "",
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`inline-flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors ${className}`}
  >
    {children}
  </a>
);

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu((value) => !value);

  const social = {
    facebook: "https://www.facebook.com/profile.php?id=61578554534142",
    whatsapp:
      "https://wa.me/523312050703?text=Hola%20INNDESO%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20desarrollo%20de%20software",
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200/60">
        <div className="w-auto mx-auto px-3 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="INNDESO" className="h-32 w-auto" />
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/" className="text-neutral-800 hover:text-blue-600 hover:underline underline-offset-4">
              Inicio
            </Link>
            <Link href="/servicios" className="text-neutral-900 hover:text-blue-600 hover:underline underline-offset-4">
              Servicios
            </Link>
            <Link href="/proyectos" className="text-neutral-700 hover:text-blue-600 hover:underline underline-offset-4">
              Proyectos
            </Link>
            <Link href="/proceso" className="text-neutral-950 hover:text-blue-600 hover:underline underline-offset-4">
              Proceso
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <SocialLink href={social.facebook} label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-7 w-7 fill-[#1877f2]">
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </SocialLink>

            <a
              href={social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:from-blue-500 hover:to-indigo-500 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-[#25D366]">
                <path d="M20.52 3.48A11.85 11.85 0 0 0 12.04 0C5.4 0 .05 5.35.05 11.97c0 2.11.55 4.17 1.6 5.98L0 24l6.22-1.63a11.9 11.9 0 0 0 5.82 1.49h.01c6.63 0 12.01-5.35 12.02-11.97 0-3.2-1.25-6.22-3.53-8.4zM12.04 22a9.9 9.9 0 0 1-5.06-1.38l-.36-.2-3.69.96.99-3.6-.23-.37A10 10 0 1 1 22.05 12c-.01 5.52-4.53 9.99-10.01 10zM17.55 14.3c-.27-.13-1.58-.78-1.83-.86-.24-.08-.42-.12-.6.13-.18.26-.69.85-.84 1.02-.15.16-.31.19-.57.06-1.55-.77-2.56-1.38-3.56-3.13-.27-.47.27-.44.77-1.47.08-.16.04-.3-.02-.42-.06-.12-.6-1.45-.82-1.98-.22-.53-.44-.46-.6-.47-.15-.01-.32-.01-.49-.01-.17 0-.45.06-.69.32-.24.26-.9.88-.9 2.14s.92 2.48 1.05 2.64c.13.16 1.81 2.77 4.38 3.88.61.26 1.09.41 1.46.53.62.2 1.19.17 1.64.1.5-.07 1.58-.65 1.8-1.28.22-.63.22-1.16.15-1.27-.06-.11-.22-.18-.49-.3z" />
              </svg>
              Contáctanos
            </a>
          </div>

          <button className="md:hidden focus:outline-none" onClick={toggleMenu} aria-label="Abrir menú">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      <div
        className={`md:hidden bg-white fixed inset-0 z-40 shadow-lg transition-all duration-300 ease-in-out ${
          openMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="mx-auto px-4 py-4 h-full flex flex-col justify-center items-center relative">
          <button className="absolute top-4 right-4 p-2" onClick={toggleMenu} aria-label="Cerrar menú">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <Link
            href="/"
            className="block py-3 px-4 w-full text-center text-lg font-medium text-slate-800 hover:bg-gray-100 rounded-md transition duration-300"
            onClick={toggleMenu}
          >
            Inicio
          </Link>
          <Link
            href="/servicios"
            className="block py-3 px-4 w-full text-center text-lg font-medium text-slate-900 hover:bg-gray-100 rounded-md transition duration-300"
            onClick={toggleMenu}
          >
            Servicios
          </Link>
          <Link
            href="/proyectos"
            className="block py-3 px-4 w-full text-center text-lg font-medium text-slate-700 hover:bg-gray-100 rounded-md transition duration-300"
            onClick={toggleMenu}
          >
            Proyectos
          </Link>
          <Link
            href="/proceso"
            className="block py-3 px-4 w-full text-center text-lg font-medium text-slate-950 hover:bg-gray-100 rounded-md transition duration-300"
            onClick={toggleMenu}
          >
            Proceso
          </Link>

          <div className="flex gap-4 mt-6">
            <SocialLink href={social.facebook} label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-7 w-7 fill-[#1877f2]">
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </SocialLink>
            <SocialLink href={social.whatsapp} label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 fill-[#25D366]">
                <path d="M20.52 3.48A11.85 11.85 0 0 0 12.04 0C5.4 0 .05 5.35.05 11.97c0 2.11.55 4.17 1.6 5.98L0 24l6.22-1.63a11.9 11.9 0 0 0 5.82 1.49h.01c6.63 0 12.01-5.35 12.02-11.97 0-3.2-1.25-6.22-3.53-8.4zM12.04 22a9.9 9.9 0 0 1-5.06-1.38l-.36-.2-3.69.96.99-3.6-.23-.37A10 10 0 1 1 22.05 12c-.01 5.52-4.53 9.99-10.01 10zM17.55 14.3c-.27-.13-1.58-.78-1.83-.86-.24-.08-.42-.12-.6.13-.18.26-.69.85-.84 1.02-.15.16-.31.19-.57.06-1.55-.77-2.56-1.38-3.56-3.13-.27-.47.27-.44.77-1.47.08-.16.04-.3-.02-.42-.06-.12-.6-1.45-.82-1.98-.22-.53-.44-.46-.6-.47-.15-.01-.32-.01-.49-.01-.17 0-.45.06-.69.32-.24.26-.9.88-.9 2.14s.92 2.48 1.05 2.64c.13.16 1.81 2.77 4.38 3.88.61.26 1.09.41 1.46.53.62.2 1.19.17 1.64.1.5-.07 1.58-.65 1.8-1.28.22-.63.22-1.16.15-1.27-.06-.11-.22-.18-.49-.3z" />
              </svg>
            </SocialLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
