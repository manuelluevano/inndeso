import type { Metadata } from "next";
import ProjectDetail from "@/components/ProjectDetail";
import { caseStudies } from "@/lib/site-content";

const project = caseStudies.find((item) => item.slug === "libremente")!;

export const metadata: Metadata = {
  title: `${project.name} — Aplicación de lectura y aprendizaje`,
  description: project.summary,
  alternates: { canonical: "/proyectos/libremente" },
  openGraph: {
    title: `${project.name} | INNDESO`,
    description: project.summary,
    images: [project.cover],
  },
};

export default function LibreMentePage() {
  return <ProjectDetail slug="libremente" />;
}
