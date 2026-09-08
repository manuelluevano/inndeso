import type { Metadata } from "next";
import ProjectDetail from "@/components/ProjectDetail";
import { caseStudies } from "@/lib/site-content";

const project = caseStudies.find((item) => item.slug === "sana-life")!;
export const metadata: Metadata = {
  title: `${project.name} — Logística y reparto veterinario`,
  description: project.summary,
  alternates: { canonical: "/proyectos/sana-life/" },
  openGraph: { type: "website", url: "/proyectos/sana-life/", title: `${project.name} | INNDESO`, description: project.summary, images: [project.cover] },
};

export default function SanaLifePage() { return <ProjectDetail slug="sana-life" />; }
