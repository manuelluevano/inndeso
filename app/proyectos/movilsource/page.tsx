import type { Metadata } from "next";
import ProjectDetail from "@/components/ProjectDetail";
import { caseStudies } from "@/lib/site-content";

const project = caseStudies.find((item) => item.slug === "movilsource")!;
export const metadata: Metadata = {
  title: `${project.name} — Sistema integral para talleres`,
  description: project.summary,
  alternates: { canonical: "/proyectos/movilsource" },
  openGraph: { title: `${project.name} | INNDESO`, description: project.summary, images: [project.cover] },
};

export default function MovilSourcePage() { return <ProjectDetail slug="movilsource" />; }
