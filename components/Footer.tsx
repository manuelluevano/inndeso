import Link from "next/link";
import Image from "next/image";
import { contactEmail, whatsappUrl } from "@/lib/site-content";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="site-footer">
      <div className="site-footer__top">
        <div>
          <span className="site-footer__kicker">Tu siguiente sistema empieza aquí</span>
          <h2>Una idea clara puede cambiar <span>toda tu operación.</span></h2>
        </div>
        <div>
          <p>Explícanos qué haces hoy, qué te cuesta trabajo y qué quieres controlar. Te ayudamos a convertirlo en un proyecto posible.</p>
          <a className="site-footer__primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-track-cta="true" data-cta-name="footer_whatsapp" data-cta-location="footer">Iniciar conversación <span aria-hidden="true">↗</span></a>
        </div>
      </div>

      <div className="site-footer__middle">
        <div>
          <Link href="/" className="site-footer__brand" aria-label="INNDESO, volver al inicio">
            <span className="site-footer__brand-logo" aria-hidden="true"><Image src="/icono.png" alt="" width={515} height={501} /></span>
            <span className="site-footer__brand-name">INNDESO</span>
          </Link>
          <p className="site-footer__statement">Diseñamos software que conecta personas, procesos, dispositivos y datos. Desde Guadalajara para empresas en México.</p>
          <span className="site-footer__availability"><i aria-hidden="true" /> Proyectos nuevos disponibles</span>
          <div className="site-footer__socials">
            <a href="https://www.instagram.com/inndeso_mx/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de INNDESO"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.7" r="1" className="is-fill"/></svg></a>
            <a href="https://www.facebook.com/profile.php?id=61578554534142" target="_blank" rel="noopener noreferrer" aria-label="Facebook de INNDESO"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 8H17V4.4c-.4-.1-1.9-.2-3.3-.2-3.3 0-5.5 2-5.5 5.7V13H5v4h3.2v7h4V17h3.3l.5-4h-3.8V10c0-1.2.3-2 2.3-2Z" className="is-fill"/></svg></a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp de INNDESO"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12 0 12 12 0 0 0 1.6 18L0 24l6.2-1.6A12 12 0 0 0 24 12c0-3.2-1.2-6.2-3.5-8.5ZM12 21.5a9.7 9.7 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.9 9.9 0 1 1 12 21.5Zm5.5-7.7c-.3-.1-1.6-.8-1.8-.9-.3-.1-.4-.1-.6.2l-.8 1c-.2.2-.3.2-.6.1-1.6-.8-2.6-1.4-3.6-3.2-.3-.5.3-.4.8-1.5.1-.2 0-.3 0-.4l-.8-2c-.2-.5-.5-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.6c.2.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.5-.3Z" className="is-fill"/></svg></a>
          </div>
        </div>

        <nav className="site-footer__column" aria-label="Soluciones del footer">
          <h3>Soluciones</h3>
          <ul>
            <li><Link href="/servicios#software">Software a la medida</Link></li>
            <li><Link href="/servicios#gps">GPS y mapas en vivo</Link></li>
            <li><Link href="/servicios#apps">Apps multiplataforma</Link></li>
            <li><Link href="/servicios#ventas">Inventario y ventas</Link></li>
            <li><Link href="/servicios#infraestructura">Servidores e integraciones</Link></li>
          </ul>
        </nav>

        <nav className="site-footer__column" aria-label="Explorar el sitio">
          <h3>Explorar</h3>
          <ul>
            <li><Link href="/proyectos">Proyectos</Link></li>
            <li><Link href="/proyectos/geojornada">Caso GPS en vivo</Link></li>
            <li><Link href="/proyectos/sana-life">Caso de logística</Link></li>
            <li><Link href="/proyectos/cellgo">Caso ecommerce CellGo</Link></li>
            <li><Link href="/proyectos/marshop">Caso comercial MarShop</Link></li>
            <li><Link href="/proyectos/libremente">Caso de aprendizaje LibreMente</Link></li>
            <li><Link href="/proyectos/planifica40">Caso financiero Planifica40</Link></li>
            <li><Link href="/precios">Precios y planes</Link></li>
            <li><Link href="/proceso">Cómo trabajamos</Link></li>
          </ul>
        </nav>

        <div className="site-footer__column">
          <h3>Contacto</h3>
          <ul>
            <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp · +52 33 1205 0703</a></li>
            <li><a href={`mailto:${contactEmail}`}>{contactEmail}</a></li>
            <li><a href="https://www.instagram.com/inndeso_mx/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=61578554534142" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><span>Guadalajara, Jalisco, México</span></li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© {year} INNDESO. Desarrollo de software a la medida.</span>
        <div className="site-footer__bottom-links"><Link href="/precios">Garantía y pagos</Link><a href={`mailto:${contactEmail}?subject=Solicitud%20de%20privacidad`}>Privacidad de datos</a></div>
      </div>
    </footer>
  );
}
