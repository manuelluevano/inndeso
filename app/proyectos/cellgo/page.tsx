import type { Metadata } from "next";
import ProjectDetail from "@/components/ProjectDetail";
import { caseStudies } from "@/lib/site-content";

const project = caseStudies.find((item) => item.slug === "cellgo")!;

export const metadata: Metadata = {
  title: `${project.name} — Ecommerce, inventario y taller`,
  description: project.summary,
  alternates: { canonical: "/proyectos/cellgo/" },
  openGraph: { type: "website", url: "/proyectos/cellgo/", title: `${project.name} | INNDESO`, description: project.summary, images: [project.cover] },
};

export default function CellGoPage() {
  return <ProjectDetail slug="cellgo" />;
}
