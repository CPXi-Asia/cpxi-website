import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../_components/json-ld";
import { INSIGHTS, insightPath } from "../_lib/insights";
import { SITE_NAME, SITE_URL } from "../_lib/site";

const TITLE = "Insights";
const DESCRIPTION =
  "Plain answers to the questions Singapore marketers ask about performance marketing, programmatic, marketing technology and AI search, from CPXi Asia.";

export const metadata: Metadata = {
  title: `${TITLE} | ${SITE_NAME}`,
  description: DESCRIPTION,
  alternates: { canonical: "/insights" },
  openGraph: { url: "/insights", title: `${TITLE} | ${SITE_NAME}`, description: DESCRIPTION },
};

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("en-SG", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Singapore",
  }).format(new Date(`${iso}T00:00:00+08:00`));

export default function InsightsPage() {
  return (
    <main className="px-6 pb-24 pt-14 sm:px-10 sm:pt-20 lg:px-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${TITLE} | ${SITE_NAME}`,
          description: DESCRIPTION,
          url: `${SITE_URL}/insights`,
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: INSIGHTS.map((i, n) => ({
              "@type": "ListItem",
              position: n + 1,
              url: `${SITE_URL}${insightPath(i.slug)}`,
              name: i.title,
            })),
          },
        }}
      />

      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Insights
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">{DESCRIPTION}</p>

        <h2 className="sr-only">All articles</h2>
        <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {INSIGHTS.map((i) => (
            <li key={i.slug} className="h-full">
              <Link
                href={insightPath(i.slug)}
                className="group flex h-full flex-col rounded-xl border border-surface-border bg-surface p-6 transition-colors hover:border-accent sm:p-8"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  <time dateTime={i.published}>{formatDate(i.published)}</time>
                </p>
                <h3 className="mt-4 text-xl font-semibold leading-snug text-foreground group-hover:text-accent-hover">
                  {i.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{i.metaDescription}</p>
                <p className="mt-auto pt-6 text-sm font-medium text-accent">Read →</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
