import type { Metadata } from "next";
import ProjectDetail from "@/components/ProjectDetail";
import { caseStudies } from "@/lib/site-content";

const project = caseStudies.find((item) => item.slug === "geojornada")!;
export const metadata: Metadata = {
  title: `${project.name} — GPS y control de personal`,
  description: project.summary,
  alternates: { canonical: "/proyectos/geojornada/" },
  openGraph: { type: "website", url: "/proyectos/geojornada/", title: `${project.name} | INNDESO`, description: project.summary, images: [project.cover] },
};

export default function GeoJornadaPage() { return <ProjectDetail slug="geojornada" />; }
