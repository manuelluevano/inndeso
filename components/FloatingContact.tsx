"use client";

const WHATSAPP_URL =
  "https://wa.me/523312050703?text=Hola%20INNDESO%2C%20quiero%20informaci%C3%B3n%20sobre%20su%20servicio";

export default function FloatingContact() {
  return (
    <>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        data-track-cta="true"
        data-cta-name="whatsapp_floating_desktop"
        data-cta-location="floating_button"
        className="fixed bottom-5 right-5 z-[60] hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_24px_rgba(22,163,74,0.45)] transition hover:scale-105 md:inline-flex"
      >
        <span className="floating-whatsapp-pulse" aria-hidden="true" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="relative h-7 w-7 fill-current">
          <path d="M20.52 3.48A11.85 11.85 0 0 0 12.04 0C5.4 0 .05 5.35.05 11.97c0 2.11.55 4.17 1.6 5.98L0 24l6.22-1.63a11.9 11.9 0 0 0 5.82 1.49h.01c6.63 0 12.01-5.35 12.02-11.97 0-3.2-1.25-6.22-3.53-8.4zM12.04 22a9.9 9.9 0 0 1-5.06-1.38l-.36-.2-3.69.96.99-3.6-.23-.37A10 10 0 1 1 22.05 12c-.01 5.52-4.53 9.99-10.01 10zM17.55 14.3c-.27-.13-1.58-.78-1.83-.86-.24-.08-.42-.12-.6.13-.18.26-.69.85-.84 1.02-.15.16-.31.19-.57.06-1.55-.77-2.56-1.38-3.56-3.13-.27-.47.27-.44.77-1.47.08-.16.04-.3-.02-.42-.06-.12-.6-1.45-.82-1.98-.22-.53-.44-.46-.6-.47-.15-.01-.32-.01-.49-.01-.17 0-.45.06-.69.32-.24.26-.9.88-.9 2.14s.92 2.48 1.05 2.64c.13.16 1.81 2.77 4.38 3.88.61.26 1.09.41 1.46.53.62.2 1.19.17 1.64.1.5-.07 1.58-.65 1.8-1.28.22-.63.22-1.16.15-1.27-.06-.11-.22-.18-.49-.3z" />
        </svg>
      </a>

      <div className="fixed inset-x-3 bottom-3 z-[60] md:hidden">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-track-cta="true"
          data-cta-name="whatsapp_floating_mobile"
          data-cta-location="floating_bar_mobile"
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-4 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.35)]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current text-[#25D366]">
            <path d="M20.52 3.48A11.85 11.85 0 0 0 12.04 0C5.4 0 .05 5.35.05 11.97c0 2.11.55 4.17 1.6 5.98L0 24l6.22-1.63a11.9 11.9 0 0 0 5.82 1.49h.01c6.63 0 12.01-5.35 12.02-11.97 0-3.2-1.25-6.22-3.53-8.4zM12.04 22a9.9 9.9 0 0 1-5.06-1.38l-.36-.2-3.69.96.99-3.6-.23-.37A10 10 0 1 1 22.05 12c-.01 5.52-4.53 9.99-10.01 10zM17.55 14.3c-.27-.13-1.58-.78-1.83-.86-.24-.08-.42-.12-.6.13-.18.26-.69.85-.84 1.02-.15.16-.31.19-.57.06-1.55-.77-2.56-1.38-3.56-3.13-.27-.47.27-.44.77-1.47.08-.16.04-.3-.02-.42-.06-.12-.6-1.45-.82-1.98-.22-.53-.44-.46-.6-.47-.15-.01-.32-.01-.49-.01-.17 0-.45.06-.69.32-.24.26-.9.88-.9 2.14s.92 2.48 1.05 2.64c.13.16 1.81 2.77 4.38 3.88.61.26 1.09.41 1.46.53.62.2 1.19.17 1.64.1.5-.07 1.58-.65 1.8-1.28.22-.63.22-1.16.15-1.27-.06-.11-.22-.18-.49-.3z" />
          </svg>
          Contactar por WhatsApp
        </a>
      </div>
    </>
  );
}
