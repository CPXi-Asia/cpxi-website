import type { Metadata } from "next";
import Link from "next/link";
import { GROWTH, TECHNOLOGY } from "../_components/services";
import { JsonLd } from "../_components/json-ld";
import { SERVICE_PAGES, servicePageFor, servicePath } from "../_lib/services";
import { DEFINITION, SITE_NAME, SITE_URL } from "../_lib/site";

const DESCRIPTION =
  "Performance marketing, programmatic and DOOH, and marketing technology services from CPXi Asia, for brands in Singapore and across Asia.";

export const metadata: Metadata = {
  title: `Services | ${SITE_NAME}`,
  description: DESCRIPTION,
  alternates: { canonical: "/services" },
  openGraph: { url: "/services", title: `Services | ${SITE_NAME}`, description: DESCRIPTION },
};

const PRACTICES = [
  { name: "Growth", items: GROWTH, accent: "text-accent" },
  { name: "Technology", items: TECHNOLOGY, accent: "text-navy" },
] as const;

export default function ServicesPage() {
  return (
    <main className="px-6 pb-24 pt-14 sm:px-10 sm:pt-20 lg:px-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              name: `Services | ${SITE_NAME}`,
              description: DESCRIPTION,
              url: `${SITE_URL}/services`,
              publisher: { "@id": `${SITE_URL}/#organization` },
              mainEntity: {
                "@type": "ItemList",
                itemListElement: SERVICE_PAGES.map((s, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  url: `${SITE_URL}${servicePath(s.slug)}`,
                  name: s.title,
                })),
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
              ],
            },
          ],
        }}
      />

      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Services
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">{DEFINITION}</p>

        <section aria-labelledby="specialist-heading" className="mt-16">
          <h2 id="specialist-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Specialist services in Singapore
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {SERVICE_PAGES.map((s) => (
              <li key={s.slug} className="h-full">
                <Link
                  href={servicePath(s.slug)}
                  className="group flex h-full flex-col rounded-xl border border-surface-border bg-surface p-6 transition-colors hover:border-accent sm:p-8"
                >
                  <p
                    className={`text-xs font-medium uppercase tracking-wider ${
                      s.practice === "Technology" ? "text-navy" : "text-accent"
                    }`}
                  >
                    {s.practice} · {s.service}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold leading-snug text-foreground group-hover:text-accent-hover">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.metaDescription}</p>
                  <p className="mt-auto pt-6 text-sm font-medium text-accent">Read more →</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="all-heading" className="mt-20">
          <h2 id="all-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Everything we do
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
            {PRACTICES.map((p) => (
              <div key={p.name}>
                <h3 className={`text-lg font-semibold uppercase tracking-wide ${p.accent}`}>{p.name}</h3>
                <ul className="mt-4 divide-y divide-surface-border border-y border-surface-border">
                  {p.items.map((name) => {
                    const page = servicePageFor(name);
                    return (
                      <li key={name} className="py-4 text-lg text-foreground">
                        {page ? (
                          <Link href={servicePath(page.slug)} className="font-medium hover:text-accent">
                            {name} →
                          </Link>
                        ) : (
                          name
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 rounded-xl border border-surface-border bg-surface p-8 text-center">
          <p className="text-xl font-semibold text-foreground">Not sure which service fits?</p>
          <Link
            href="/#contact"
            className="mt-6 inline-block rounded-md bg-accent-strong px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-strong-hover"
          >
            Talk to us
          </Link>
        </div>
      </div>
    </main>
  );
}
