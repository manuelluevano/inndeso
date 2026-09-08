import type { Metadata } from "next";
import ProjectDetail from "@/components/ProjectDetail";
import { caseStudies } from "@/lib/site-content";

const project = caseStudies.find((item) => item.slug === "fertikhor")!;

export const metadata: Metadata = {
  title: "FertiKhor: sitio web para nutrición vegetal",
  description: project.summary,
  alternates: { canonical: "/proyectos/fertikhor/" },
  openGraph: { type: "website", url: "/proyectos/fertikhor/", title: `${project.name} | INNDESO`, description: project.summary, images: [project.cover] },
};

export default function FertiKhorPage() {
  return <ProjectDetail slug="fertikhor" />;
}
