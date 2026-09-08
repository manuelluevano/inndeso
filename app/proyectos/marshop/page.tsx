import type { Metadata } from "next";
import ProjectDetail from "@/components/ProjectDetail";
import { caseStudies } from "@/lib/site-content";

const project = caseStudies.find((item) => item.slug === "marshop")!;

export const metadata: Metadata = {
  title: `${project.name} — Ventas, abonos e inventario para macOS`,
  description: project.summary,
  alternates: { canonical: "/proyectos/marshop/" },
  openGraph: {
    type: "website",
    url: "/proyectos/marshop/",
    title: `${project.name} | INNDESO`,
    description: project.summary,
    images: [project.cover],
  },
};

export default function MarShopPage() {
  return <ProjectDetail slug="marshop" />;
}
