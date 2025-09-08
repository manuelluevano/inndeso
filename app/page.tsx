
"use client";

import Experiencia from "@/components/Experiencia";
import PorQueInndeso from "@/components/PorQueInndeso";
import RouteChangeTracker from "@/components/RouteChangeTracker";
import StatsChips from "@/components/StatsChips";
import { motion } from "framer-motion";
import Image from "next/image";
 
export default function Home() {

  return (
    <>

    <main id="inicio" className="relative ">
      
       <RouteChangeTracker />
      <section className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-6">


      {/* FONDO AZUL DIFUMINADO CON TRANSPARENCIA */}
<div className="absolute inset-0 -z-10 overflow-hidden">
  {/* Base con stops RGBA (con alpha) y final transparente */}
  <div className="absolute inset-0 [background:linear-gradient(135deg,
      rgba(7,18,36,.92) 0%,
      rgba(11,32,58,.82) 35%,
      rgba(18,58,98,.70) 70%,
      rgba(10,26,43,0) 100%)]" />

  {/* Luces muy suaves (con blend para no tapar) */}
  <div className="absolute inset-0 blur-3xl mix-blend-screen pointer-events-none">
    <div className="absolute inset-0 [background:radial-gradient(900px_700px_at_30%_80%,rgba(96,165,250,.30),transparent_60%)]" />
    <div className="absolute inset-0 [background:radial-gradient(700px_600px_at_85%_15%,rgba(56,189,248,.22),transparent_60%)]" />
  </div>

  {/* Viñeta más ligera para que no oscurezca el pie */}
  <div className="absolute inset-0 [background:radial-gradient(1200px_900px_at_50%_45%,transparent_55%,rgba(0,0,0,.20))]" />
</div>
        <div className="grid md:grid-cols-2 gap-20 items-center mt-10">
          {/* Texto */}
          <div>
            <h1 className="text-5xl  font-extrabold leading-tight">
              Empresa de <span className="text-blue-600">desarrollo de software</span> y
              <span className="text-blue-600"> soluciones digitales</span>
            </h1>

            <p className="mt-5  max-w-xl">
              En INNDESO diseñamos soluciones digitales a la medida: sitios web, apps y automatizaciones.
              Creamos experiencias que impulsan tu marca y conectan con tu audiencia con enfoque en calidad,
              velocidad y resultados.
            </p>

             {/* bullets de valor */}
            <ul className="mt-8 mb-8 space-y-2 text-black">
              <li className="flex items-center gap-2">
                <span className=" h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-600 grid place-items-center">✓</span>
                Entregas en semanas, no meses
              </li>
              <li className="flex items-center gap-2">
                <span className=" h-5 w-5 rounded-full bg-blue-500/20 text-blue-600 grid place-items-center">✓</span>
                Diseño fácil de usar y medir
              </li>
              <li className="flex items-center gap-2">
                <span className=" h-5 w-5 rounded-full bg-yellow-500/20 text-yellow-600 grid place-items-center">✓</span>
                Soporte y mejoras continuas
              </li>
            </ul>

            <div className="mt-8 mb-8">
              <a
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition"
              >
              Contactar
              </a>
              

              {/* <a href="#contacto"
                 onClick={() => (window as any).dataLayer?.push({event:'lead', lead_source:'hero_cta'})}
                 className="inline-flex items-center rounded-xl bg-sky-600 px-5 py-3 text-white font-medium shadow hover:bg-sky-700 transition">
                 Contactar
                 </a> */}
            </div>
          </div>

          {/* Imagen */}

            <motion.div
              className="relative max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              >
              {/* Glow suave detrás */}
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-300/40 via-fuchsia-300/30 to-emerald-300/40 blur-3xl rounded-full" />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.03, rotate: -0.5 }}
                >
                <Image
                  src="/hero.png"
                  alt="Ilustración de desarrollo de software"
                  width={880}
                  height={660}
                  className="w-full h-auto drop-shadow-xl"
                  priority
                  />
              </motion.div>
            </motion.div>


        </div>
      </section>
    </main>

      <section>
        <Experiencia/>
      </section>




    
    <section>
      <StatsChips/>
    </section>

      <section>
        <PorQueInndeso/>
      </section>
          </>

  );
}
