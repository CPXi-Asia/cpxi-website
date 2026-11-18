import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStudyCard } from "../../_components/case-study-card";
import { JsonLd } from "../../_components/json-ld";
import {
  CASE_STUDIES,
  caseStudyMeta,
  caseStudyPath,
  getCaseStudy,
  relatedCaseStudies,
} from "../../_lib/case-studies";
import { servicePagesForCaseStudy, servicePath } from "../../_lib/services";
import { SITE_NAME, SITE_URL } from "../../_lib/site";

// Every case study is prerendered; unknown slugs 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/case-studies/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  const title = `${study.headline} | ${SITE_NAME}`;
  const path = caseStudyPath(study.slug);
  return {
    title,
    description: study.summary,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title,
      description: study.summary,
      publishedTime: study.published,
      modifiedTime: study.updated,
    },
  };
}

// Pinned to Singapore time so the build server's timezone can't shift a date.
const dateFormat = new Intl.DateTimeFormat("en-SG", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Singapore",
});
const formatDate = (iso: string) => dateFormat.format(new Date(`${iso}T00:00:00+08:00`));

export default async function CaseStudyPage(props: PageProps<"/case-studies/[slug]">) {
  const { slug } = await props.params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const url = `${SITE_URL}${caseStudyPath(study.slug)}`;
  const facts = [
    { term: "Client", value: study.via ? `${study.client} (with ${study.via})` : study.client },
    { term: "Project", value: study.project },
    { term: "Industry", value: study.industry },
    { term: "Market", value: study.market },
    { term: "When", value: [study.period, study.year].filter(Boolean).join(", ") || null },
    { term: "Services", value: study.services.join(", ") },
    { term: "Channels", value: study.channels.join(", ") },
  ].filter((f) => f.value);

  return (
    <main className="px-6 pb-24 pt-10 sm:px-10 sm:pt-14 lg:px-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "@id": `${url}#article`,
              headline: study.headline,
              description: study.summary,
              url,
              datePublished: study.published,
              dateModified: study.updated,
              author: { "@id": `${SITE_URL}/#organization` },
              publisher: { "@id": `${SITE_URL}/#organization` },
              about: { "@type": "Organization", name: study.client },
              keywords: [study.industry, study.market, ...study.services, ...study.channels].join(", "),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Case studies", item: `${SITE_URL}/case-studies` },
                { "@type": "ListItem", position: 3, name: study.client, item: url },
              ],
            },
          ],
        }}
      />

      <article className="mx-auto max-w-4xl">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-foreground">Home</Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/case-studies" className="hover:text-foreground">Case studies</Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-foreground">{study.client}</li>
          </ol>
        </nav>

        <p className="mt-10 text-sm font-medium uppercase tracking-wider text-accent">
          {caseStudyMeta(study)}
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {study.headline}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">{study.summary}</p>
        <p className="mt-6 text-xs text-muted">
          Published {formatDate(study.published)}
          {study.updated !== study.published && <> · Updated {formatDate(study.updated)}</>}
        </p>

        <section aria-labelledby="results-heading" className="mt-12">
          <h2 id="results-heading" className="text-sm font-medium uppercase tracking-wider text-muted">
            Results
          </h2>
          <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {study.results.map((r) => (
              <li
                key={r.label}
                className="rounded-xl border border-surface-border bg-surface p-6"
              >
                <p className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">{r.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{r.label}</p>
              </li>
            ))}
          </ul>
        </section>

        <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-5 border-y border-surface-border py-8 sm:grid-cols-2">
          {facts.map((f) => (
            <div key={f.term}>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted">{f.term}</dt>
              <dd className="mt-1 text-base text-foreground">{f.value}</dd>
            </div>
          ))}
        </dl>

        <section aria-labelledby="challenge-heading" className="mt-12">
          <h2 id="challenge-heading" className="text-2xl font-bold tracking-tight text-foreground">
            The challenge
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{study.challenge}</p>
        </section>

        <section aria-labelledby="approach-heading" className="mt-12">
          <h2 id="approach-heading" className="text-2xl font-bold tracking-tight text-foreground">
            What we did
          </h2>
          <ul className="mt-4 space-y-3">
            {study.approach.map((step) => (
              <li key={step} className="flex gap-3 text-lg leading-relaxed text-muted">
                <span aria-hidden className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </section>

        {study.learnings && study.learnings.length > 0 && (
          <section aria-labelledby="learnings-heading" className="mt-12">
            <h2 id="learnings-heading" className="text-2xl font-bold tracking-tight text-foreground">
              What we learned
            </h2>
            <ul className="mt-4 space-y-3">
              {study.learnings.map((point) => (
                <li key={point} className="flex gap-3 text-lg leading-relaxed text-muted">
                  <span aria-hidden className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-navy" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {servicePagesForCaseStudy(study.services).length > 0 && (
          <aside aria-label="Related services" className="mt-12">
            <p className="text-xs font-medium uppercase tracking-wider text-muted">Related services</p>
            <ul className="mt-3 flex flex-wrap gap-3">
              {servicePagesForCaseStudy(study.services).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={servicePath(s.slug)}
                    className="inline-block rounded-md border border-surface-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    {s.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}

        <div className="mt-16 rounded-xl border border-surface-border bg-surface p-8 text-center">
          <p className="text-xl font-semibold text-foreground">
            Want results like these for your brand?
          </p>
          <Link
            href="/#contact"
            className="mt-6 inline-block rounded-md bg-accent-strong px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-strong-hover"
          >
            Get in touch
          </Link>
        </div>
      </article>

      <section aria-labelledby="related-heading" className="mx-auto mt-20 max-w-7xl">
        <h2 id="related-heading" className="text-2xl font-bold tracking-tight text-foreground">
          More case studies
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {relatedCaseStudies(study).map((c) => (
            <CaseStudyCard key={c.slug} study={c} />
          ))}
        </ul>
      </section>
    </main>
  );
}
