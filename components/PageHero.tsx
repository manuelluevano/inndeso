import Link from "next/link";
import "@/components/site-pages.css";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  action?: {
    label: string;
    href: string;
    external?: boolean;
  };
};

export default function PageHero({ eyebrow, title, description, action }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__glow" aria-hidden="true" />
      <div className="page-hero__inner">
        <div>
          <p className="page-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero__description">{description}</p>
        </div>
        {action ? (
          action.external ? (
            <a className="page-button page-button--light" href={action.href} target="_blank" rel="noopener noreferrer">
              {action.label}
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <Link className="page-button page-button--light" href={action.href}>
              {action.label}
              <span aria-hidden="true">→</span>
            </Link>
          )
        ) : null}
      </div>
    </section>
  );
}
