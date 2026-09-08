"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { whatsappUrl } from "@/lib/site-content";
import "./sales-assistant.css";

type Message = { role: "assistant" | "user"; text: string; animate?: boolean };

const quickQuestions = ["¿Hacen GPS en vivo?", "¿Cuánto cuesta una página?", "¿Qué plataformas desarrollan?", "Quiero un sistema a la medida"];

function getAnswer(question: string) {
  const value = question.toLowerCase();
  if (/gps|mapa|ruta|ubicaci|repart|trabajador/.test(value)) return "Sí. Construimos mapas operativos con ubicación en vivo, rutas, paradas, última señal, batería, evidencias e historial. GeoJornada y Sana Life son ejemplos de esta capacidad.";
  if (/precio|cuesta|página|pagina|plan|pago/.test(value)) return "Una página de entrada comienza en $2,500 MXN. La web profesional inicia en $7,500 y una tienda en $15,000. El software a la medida se divide y cotiza por alcance.";
  if (/plataforma|android|ios|iphone|windows|mac|watch|linux|servidor/.test(value)) return "Creamos programas para web, Windows, Mac, iPhone, Android y Apple Watch. También podemos instalar un servidor dentro de tu negocio o mantener la información disponible en línea.";
  if (/inventario|crm|venta|caja|finanza|producto|pedido/.test(value)) return "Podemos reunir clientes, ventas, cotizaciones, productos, inventario, compras, caja, cobranza y reportes en un solo programa, con app móvil si tu equipo trabaja fuera de la oficina.";
  if (/garant|soporte|mantenimiento/.test(value)) return "Incluimos 30 días de garantía técnica para defectos dentro del alcance aprobado. Después podemos continuar con mantenimiento y nuevas etapas sin obligarte a una permanencia.";
  if (/pensi|imss|planifica|escenario/.test(value)) return "Planifica40 es una aplicación para Windows que extrae información de estados de cuenta, calcula semanas y salarios, compara escenarios de pensión y genera reportes PDF para clientes.";
  if (/proyecto|caso|ejemplo|marca/.test(value)) return "Puedes explorar GeoJornada, Sana Life, MovilSource, MarShop, CellGo, LibreMente y Planifica40 en la sección de proyectos. Ahí mostramos qué resuelve cada programa y cómo se usa.";
  if (/medida|idea|necesito|quiero|sistema|software/.test(value)) return "Claro. Primero entendemos tu proceso y proponemos una primera etapa concreta. Puede incluir panel administrativo, app, GPS, inventario, pagos, reportes o integraciones según tu operación.";
  return "Podemos orientarte sobre páginas, apps, GPS, inventarios, CRM, finanzas, servidores y software a la medida. Si me cuentas qué quieres controlar o mejorar, te doy una respuesta más precisa.";
}

function TypewriterText({ text, animate = false }: { text: string; animate?: boolean }) {
  const [visible, setVisible] = useState(animate ? "" : text);

  useEffect(() => {
    if (!animate) {
      setVisible(text);
      return;
    }

    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setVisible(text.slice(0, index));
      if (index >= text.length) window.clearInterval(interval);
    }, 14);

    return () => window.clearInterval(interval);
  }, [animate, text]);

  return <>{visible}{animate && visible.length < text.length ? <span className="sales-assistant__cursor" aria-hidden="true" /> : null}</>;
}

export default function SalesAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const responseTimer = useRef<number | null>(null);
  const messageArea = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const launcherRef = useRef<HTMLButtonElement | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Hola, soy la guía de INNDESO. Puedo explicarte qué construimos, mostrarte casos y orientarte sobre precios." },
  ]);

  useEffect(() => {
    messageArea.current?.scrollTo({ top: messageArea.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => () => {
    if (responseTimer.current) window.clearTimeout(responseTimer.current);
  }, []);

  useEffect(() => {
    if (!open) return;

    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 120);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      launcherRef.current?.focus();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const ask = (question: string) => {
    const clean = question.trim();
    if (!clean || typing) return;
    setMessages((current) => [...current, { role: "user", text: clean }]);
    setInput("");
    setTyping(true);
    responseTimer.current = window.setTimeout(() => {
      setMessages((current) => [...current, { role: "assistant", text: getAnswer(clean), animate: true }]);
      setTyping(false);
      responseTimer.current = null;
    }, 680);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    ask(input);
  };

  return (
    <aside className={`sales-assistant${open ? " is-open" : ""}`} aria-label="Asistente de INNDESO">
      {open ? (
        <div className="sales-assistant__panel" id="inndeso-assistant" role="dialog" aria-modal="false" aria-labelledby="inndeso-assistant-title">
          <div className="sales-assistant__header">
            <div className="sales-assistant__identity">
              <span className="sales-assistant__robot" aria-hidden="true"><i /><b>••</b></span>
              <div><strong id="inndeso-assistant-title">Guía INNDESO</strong><small><i /> En línea</small></div>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar asistente">×</button>
          </div>

          <div className="sales-assistant__messages" aria-live="polite" ref={messageArea}>
            {messages.map((message, index) => (
              <p className={`is-${message.role}`} key={`${message.role}-${index}`}>
                <TypewriterText text={message.text} animate={message.animate} />
              </p>
            ))}
            {typing ? <p className="is-assistant is-typing" aria-label="La guía está escribiendo"><i /><i /><i /></p> : null}
          </div>

          <div className="sales-assistant__quick" aria-label="Preguntas rápidas">
            {quickQuestions.map((question) => <button type="button" key={question} onClick={() => ask(question)} disabled={typing}>{question}</button>)}
          </div>

          <form className="sales-assistant__form" onSubmit={handleSubmit}>
            <label htmlFor="assistant-question" className="sr-only">Escribe tu pregunta</label>
            <input ref={inputRef} id="assistant-question" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Escribe tu pregunta…" autoComplete="off" />
            <button type="submit" aria-label="Enviar pregunta" disabled={typing}>→</button>
          </form>

          <div className="sales-assistant__links">
            <Link href="/proyectos" onClick={() => setOpen(false)}>Ver proyectos</Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Hablar con una persona ↗</a>
          </div>
          <small className="sales-assistant__disclosure">Asistente informativo automático. No sustituye una cotización.</small>
        </div>
      ) : null}

      <button ref={launcherRef} className="sales-assistant__launcher" type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Cerrar asistente de INNDESO" : "Abrir asistente de INNDESO"} aria-expanded={open} aria-controls="inndeso-assistant">
        <span className="sales-assistant__robot" aria-hidden="true"><i /><b>••</b></span>
        <span><small>¿Tienes una idea?</small><strong>Pregúntanos</strong></span>
      </button>
    </aside>
  );
}
