"use client";

import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  const social = {
    facebook: "https://www.facebook.com/profile.php?id=61578554534142",
    instagram: "https://www.instagram.com/tu_usuario",
    tiktok: "https://www.tiktok.com/@tu_usuario",
    whatsapp:
      "https://wa.me/523315203120?text=Hola%20INNDESO%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n",
  };

  return (
    <footer className="mt-20 bg-gradient-to-b from-neutral-900 to-black text-neutral-300">
      {/* CTA superior */}
      <div className="px-4 sm:px-6 pt-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 sm:p-12 shadow-lg shadow-blue-900/20">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  ¿Listo para impulsar tu proyecto?
                </h2>
                <p className="mt-2 text-sm sm:text-base text-white/90">
                  Hablemos de cómo convertir tus ideas en resultados reales.
                </p>
              </div>
              <a
                href={social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-blue-700 shadow-sm hover:bg-white/90 transition"
                aria-label="Escríbenos por WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-[#25D366]">
                  <path d="M20.52 3.48A11.85 11.85 0 0 0 12.04 0C5.4 0 .05 5.35.05 11.97c0 2.11.55 4.17 1.6 5.98L0 24l6.22-1.63a11.9 11.9 0 0 0 5.82 1.49h.01c6.63 0 12.01-5.35 12.02-11.97 0-3.2-1.25-6.22-3.53-8.4zM12.04 22a9.9 9.9 0 0 1-5.06-1.38l-.36-.2-3.69.96.99-3.6-.23-.37A10 10 0 1 1 22.05 12c-.01 5.52-4.53 9.99-10.01 10zM17.55 14.3c-.27-.13-1.58-.78-1.83-.86-.24-.08-.42-.12-.6.13-.18.26-.69.85-.84 1.02-.15.16-.31.19-.57.06-1.55-.77-2.56-1.38-3.56-3.13-.27-.47.27-.44.77-1.47.08-.16.04-.3-.02-.42-.06-.12-.6-1.45-.82-1.98-.22-.53-.44-.46-.6-.47-.15-.01-.32-.01-.49-.01-.17 0-.45.06-.69.32-.24.26-.9.88-.9 2.14s.92 2.48 1.05 2.64c.13.16 1.81 2.77 4.38 3.88.61.26 1.09.41 1.46.53.62.2 1.19.17 1.64.1.5-.07 1.58-.65 1.8-1.28.22-.63.22-1.16.15-1.27-.06-.11-.22-.18-.49-.3z" />
                </svg>
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="px-4 sm:px-6 lg:px-8 mt-14">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="INNDESO" className="h-10 w-auto" />
              <span className="text-white text-lg font-semibold tracking-wide">INNDESO</span>
            </div>
            <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
              Innovación y desarrollo de software a la medida. Creamos productos
              digitales eficientes, escalables y con impacto real.
            </p>

            {/* Redes sociales */}
            <div className="mt-6 flex items-center gap-3">
              <a href={social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/5 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-6 w-6 fill-[#1877f2]">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </a>
              <a href={social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/5 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 stroke-[#c13584]">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="5" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="#c13584" />
                </svg>
              </a>
              <a href={social.tiktok} aria-label="TikTok" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/5 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6 fill-[#6a76ac]">
                  <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                </svg>
              </a>
              <a href={social.whatsapp} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/5 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-[#25D366]">
                  <path d="M20.52 3.48A11.85 11.85 0 0 0 12.04 0C5.4 0 .05 5.35.05 11.97c0 2.11.55 4.17 1.6 5.98L0 24l6.22-1.63a11.9 11.9 0 0 0 5.82 1.49h.01c6.63 0 12.01-5.35 12.02-11.97 0-3.2-1.25-6.22-3.53-8.4zM12.04 22a9.9 9.9 0 0 1-5.06-1.38l-.36-.2-3.69.96.99-3.6-.23-.37A10 10 0 1 1 22.05 12c-.01 5.52-4.53 9.99-10.01 10zM17.55 14.3c-.27-.13-1.58-.78-1.83-.86-.24-.08-.42-.12-.6.13-.18.26-.69.85-.84 1.02-.15.16-.31.19-.57.06-1.55-.77-2.56-1.38-3.56-3.13-.27-.47.27-.44.77-1.47.08-.16.04-.3-.02-.42-.06-.12-.6-1.45-.82-1.98-.22-.53-.44-.46-.6-.47-.15-.01-.32-.01-.49-.01-.17 0-.45.06-.69.32-.24.26-.9.88-.9 2.14s.92 2.48 1.05 2.64c.13.16 1.81 2.77 4.38 3.88.61.26 1.09.41 1.46.53.62.2 1.19.17 1.64.1.5-.07 1.58-.65 1.8-1.28.22-.63.22-1.16.15-1.27-.06-.11-.22-.18-.49-.3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white">Enlaces</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/" className="text-neutral-400 hover:text-white transition">Inicio</Link></li>
              <li><Link href="/servicios" className="text-neutral-400 hover:text-white transition">Servicios</Link></li>
              <li><Link href="/proyectos" className="text-neutral-400 hover:text-white transition">Proyectos</Link></li>
              <li><Link href="/proceso" className="text-neutral-400 hover:text-white transition">Proceso</Link></li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white">Servicios</h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-400">
              <li className="hover:text-white transition">Desarrollo Web</li>
              <li className="hover:text-white transition">Aplicaciones Móviles</li>
              <li className="hover:text-white transition">Integraciones y APIs</li>
              <li className="hover:text-white transition">Optimización y Performance</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white">Contacto</h3>
            <ul className="mt-4 space-y-4 text-sm text-neutral-400">
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-white/70">
                  <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v.4l10 6.25L22 6.4V6a2 2 0 0 0-2-2m0 4.2l-8.65 5.4a1 1 0 0 1-1.1 0L4 8.2V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z" />
                </svg>
                <a href="mailto:hola@inndeso.com" className="hover:text-white transition">inndeso.mx@gmail.com
</a>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-white/70">
                  <path fill="currentColor" d="M6.62 10.79a15.052 15.052 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.85 22 2 13.15 2 2a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01z" />
                </svg>
                <a href={social.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  +52 33 1520 3120
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 text-white/70">
                  <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7m0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5" />
                </svg>
                <span>
                  Guadalajara, Jalisco, México
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="mt-12 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">© {year} INNDESO. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6 text-xs">
            <Link href="#" className="text-neutral-400 hover:text-white transition">Privacidad</Link>
            <Link href="#" className="text-neutral-400 hover:text-white transition">Términos</Link>
            <Link href="#" className="text-neutral-400 hover:text-white transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
