# Next.js + GTM Base Template

Plantilla mínima para iniciar un proyecto **Next.js (App Router) + Tailwind + Google Tag Manager (GTM)**, lista para mapear eventos a **Meta Pixel** y **Google Ads/GA4** mediante GTM. Incluye un **tracker de rutas** que empuja `page_view` al `dataLayer` y un **endpoint opcional** para **Meta Conversions API**.

## Estructura
- `app/layout.tsx` — Inserta el script de GTM (head + noscript).
- `app/page.tsx` — Página de ejemplo + evento `lead`.
- `components/RouteChangeTracker.tsx` — Empuja `page_view` a `dataLayer` en cada cambio de ruta.
- `lib/gtm.ts` — Helper para `dataLayer.push`.
- `app/api/meta-capi/route.ts` — **Opcional**: endpoint para Meta Conversions API.
- `.env.local.example` — Variables de entorno.

## Requisitos
- Node.js 18+
- NPM o PNPM

## Uso rápido
1) Crea un proyecto Next.js vacío **o** usa directamente este template:
   - Recomendado: `npx create-next-app@latest sercomin-landing --js --app --eslint --tailwind --src-dir=false --use-npm`
   - Luego copia el contenido de esta plantilla **encima** del nuevo proyecto (respetando rutas).

2) Copia `.env.local.example` a `.env.local` y coloca tu contenedor:
   ```env
   NEXT_PUBLIC_GTM_ID="GTM-XXXXXXX"
   META_CAPI_TOKEN=""
   META_PIXEL_ID=""
   ```

3) Ejecuta en desarrollo:
   ```bash
   npm install
   npm run dev
   ```
   Abre `http://localhost:3000` y verifica con **Tag Assistant** (Preview) y **Meta Pixel Helper**.

## Mapeo sugerido en GTM
- Trigger `page_view` → GA4 Page View + Meta PageView + Google Ads (opc.).
- Trigger `lead` → GA4 `generate_lead` + Meta Lead + Ads Conversion.
- Trigger `purchase` → GA4 Purchase + Meta Purchase + Ads Purchase (si lo implementas).

## Notas
- Para Consent Mode v2 y banner de cookies, añade tu gestor preferido y variables de consentimiento al `dataLayer`.
- El endpoint `/api/meta-capi` es básico y se ofrece como referencia.