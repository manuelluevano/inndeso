import type { Metadata } from "next";
import ProjectDetail from "@/components/ProjectDetail";
import { caseStudies } from "@/lib/site-content";

const project = caseStudies.find((item) => item.slug === "planifica40")!;

export const metadata: Metadata = {
  title: `${project.name} — Cálculo y planeación de pensiones`,
  description: project.summary,
  alternates: { canonical: "/proyectos/planifica40/" },
  openGraph: {
    type: "website",
    url: "/proyectos/planifica40/",
    title: `${project.name} | INNDESO`,
    description: project.summary,
    images: [project.cover],
  },
};

export default function Planifica40Page() {
  return <ProjectDetail slug="planifica40" />;
}
