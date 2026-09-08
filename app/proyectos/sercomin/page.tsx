import type { Metadata } from "next";
import ProjectDetail from "@/components/ProjectDetail";
import { caseStudies } from "@/lib/site-content";

const project = caseStudies.find((item) => item.slug === "sercomin")!;

export const metadata: Metadata = {
  title: "Sercomin: sitio web y catálogo industrial",
  description: project.summary,
  alternates: { canonical: "/proyectos/sercomin/" },
  openGraph: { type: "website", url: "/proyectos/sercomin/", title: `${project.name} | INNDESO`, description: project.summary, images: [project.cover] },
};

export default function SercominPage() {
  return <ProjectDetail slug="sercomin" />;
}
