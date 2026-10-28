import type { Metadata } from "next";
import { CaseStudyCard } from "../_components/case-study-card";
import { JsonLd } from "../_components/json-ld";
import { CASE_STUDIES, caseStudyPath } from "../_lib/case-studies";
import { SITE_NAME, SITE_URL } from "../_lib/site";

const TITLE = "Case studies";
const DESCRIPTION =
  "Campaign results from CPXi Asia: performance marketing, programmatic, social and marketing technology for brands in Singapore and across Asia.";

export const metadata: Metadata = {
  title: `${TITLE} | ${SITE_NAME}`,
  description: DESCRIPTION,
  alternates: { canonical: "/case-studies" },
  openGraph: { url: "/case-studies", title: `${TITLE} | ${SITE_NAME}`, description: DESCRIPTION },
};

export default function CaseStudiesPage() {
  const industries = [...new Set(CASE_STUDIES.map((c) => c.industry))].sort();

  return (
    <main className="px-6 pb-24 pt-14 sm:px-10 sm:pt-20 lg:px-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${TITLE} | ${SITE_NAME}`,
          description: DESCRIPTION,
          url: `${SITE_URL}/case-studies`,
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: CASE_STUDIES.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${SITE_URL}${caseStudyPath(c.slug)}`,
              name: c.headline,
            })),
          },
        }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Case studies
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            Results from campaigns we have run for brands in Singapore and
            across Asia, across {industries.length} industries. Each one sets
            out the brief, what we did, and the numbers it delivered.
          </p>
        </div>

        <h2 className="sr-only">All case studies</h2>
        <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((c) => (
            <CaseStudyCard key={c.slug} study={c} />
          ))}
        </ul>
      </div>
    </main>
  );
}
