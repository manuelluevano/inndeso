import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoServiceLanding from "@/components/SeoServiceLanding";
import { seoServiceBySlug, seoServicePages } from "@/lib/seo-services";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return seoServicePages.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = seoServiceBySlug[params.slug];
  if (!service) return {};
  const path = `/servicios/${service.slug}/`;
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: path },
    openGraph: { type: "website", url: path, title: `${service.title} | INNDESO`, description: service.description, images: [service.image] },
    twitter: { card: "summary_large_image", title: `${service.title} | INNDESO`, description: service.description, images: [service.image] },
  };
}

export default function ServiceSeoPage({ params }: { params: { slug: string } }) {
  const service = seoServiceBySlug[params.slug];
  if (!service) notFound();
  return <SeoServiceLanding service={service} />;
}
