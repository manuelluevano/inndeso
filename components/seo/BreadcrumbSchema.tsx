type BreadcrumbItem = {
  name: string;
  path: string;
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://inndeso.com.mx";

export default function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const itemListElement = items.map((item, index) => {
    const path = item.path === "/" ? "/" : `/${item.path.replace(/^\/+|\/+$/g, "")}/`;

    return {
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(path, SITE_URL).toString(),
    };
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement,
        }),
      }}
    />
  );
}
