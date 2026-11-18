import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStudyCard } from "../../_components/case-study-card";
import { JsonLd } from "../../_components/json-ld";
import { getCaseStudy } from "../../_lib/case-studies";
import { INSIGHTS, getInsight, insightPath } from "../../_lib/insights";
import { getServicePage, servicePath } from "../../_lib/services";
import { SITE_NAME, SITE_URL } from "../../_lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata(props: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const insight = getInsight(slug);
  if (!insight) return {};
  const path = insightPath(insight.slug);
  return {
    title: insight.metaTitle,
    description: insight.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: insight.metaTitle,
      description: insight.metaDescription,
      publishedTime: insight.published,
      modifiedTime: insight.updated,
    },
  };
}

// Pinned to Singapore time so the build server's timezone can't shift a date.
const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("en-SG", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Singapore",
  }).format(new Date(`${iso}T00:00:00+08:00`));

export default async function InsightPage(props: PageProps<"/insights/[slug]">) {
  const { slug } = await props.params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  const url = `${SITE_URL}${insightPath(insight.slug)}`;
  const services = insight.relatedServices
    .map(getServicePage)
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const cases = (insight.relatedCaseStudies ?? [])
    .map(getCaseStudy)
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .slice(0, 3);

  return (
    <main className="px-6 pb-24 pt-10 sm:px-10 sm:pt-14 lg:px-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "@id": `${url}#article`,
              headline: insight.title,
              description: insight.answer,
              url,
              mainEntityOfPage: url,
              image: `${url}/opengraph-image`,
              datePublished: insight.published,
              dateModified: insight.updated,
              inLanguage: "en-SG",
              author: { "@id": `${SITE_URL}/#organization` },
              publisher: { "@id": `${SITE_URL}/#organization` },
              about: services.map((s) => ({ "@id": `${SITE_URL}${servicePath(s.slug)}#service` })),
              ...(insight.sources?.length ? { citation: insight.sources.map((s) => s.url) } : {}),
            },
            {
              "@type": "FAQPage",
              mainEntity: insight.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/insights` },
                { "@type": "ListItem", position: 3, name: insight.title, item: url },
              ],
            },
          ],
        }}
      />

      <article className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-foreground">Home</Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/insights" className="hover:text-foreground">Insights</Link>
            </li>
          </ol>
        </nav>

        <h1 className="mt-10 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {insight.title}
        </h1>
        <p className="mt-5 text-sm text-muted">
          By {SITE_NAME} · Published{" "}
          <time dateTime={insight.published}>{formatDate(insight.published)}</time>
          {insight.updated !== insight.published && (
            <>
              {" "}· Updated <time dateTime={insight.updated}>{formatDate(insight.updated)}</time>
            </>
          )}
        </p>

        <p className="mt-8 text-lg leading-relaxed text-foreground sm:text-xl">{insight.answer}</p>

        <section aria-labelledby="key-points" className="mt-10 rounded-xl border border-surface-border bg-surface p-6 sm:p-8">
          <h2 id="key-points" className="text-sm font-medium uppercase tracking-wider text-accent">
            Key points
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-foreground marker:text-accent">
            {insight.keyPoints.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>

        {insight.sections.map((section, i) => {
          const id = `section-${i}`;
          return (
            <section key={section.heading} aria-labelledby={id} className="mt-14">
              <h2 id={id} className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {section.heading}
              </h2>
              {section.paragraphs?.map((p) => (
                <p key={p} className="mt-4 text-lg leading-relaxed text-muted">{p}</p>
              ))}
              {section.table && (
                <div className="mt-6 overflow-x-auto rounded-xl border border-surface-border">
                  <table className="w-full min-w-[32rem] text-left text-sm sm:text-base">
                    <thead className="bg-surface">
                      <tr>
                        {section.table.columns.map((c, n) => (
                          <th key={n} scope="col" className="px-4 py-3 font-semibold text-foreground">
                            {c}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-border">
                      {section.table.rows.map(([label, ...cells]) => (
                        <tr key={label}>
                          <th scope="row" className="px-4 py-3 align-top font-medium text-foreground">
                            {label}
                          </th>
                          {cells.map((cell, n) => (
                            <td key={n} className="px-4 py-3 align-top leading-relaxed text-muted">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {section.items && (
                <dl className="mt-6 space-y-4">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-xl border border-surface-border bg-surface p-5 sm:p-6"
                    >
                      <dt className="font-semibold text-foreground">{item.name}</dt>
                      <dd className="mt-1 leading-relaxed text-muted">{item.detail}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {section.after?.map((p) => (
                <p key={p} className="mt-6 text-lg leading-relaxed text-muted">{p}</p>
              ))}
            </section>
          );
        })}

        <section aria-labelledby="faq-heading" className="mt-16">
          <h2 id="faq-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-6 divide-y divide-surface-border border-y border-surface-border">
            {insight.faqs.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="text-lg font-semibold text-foreground">{f.q}</h3>
                <p className="mt-2 leading-relaxed text-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {insight.sources && insight.sources.length > 0 && (
          <section aria-labelledby="sources-heading" className="mt-12">
            <h2 id="sources-heading" className="text-lg font-semibold text-foreground">Sources</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {insight.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} className="text-accent hover:text-accent-hover" rel="noopener">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {services.length > 0 && (
          <section aria-labelledby="services-heading" className="mt-16 rounded-xl border border-surface-border bg-surface p-8">
            <h2 id="services-heading" className="text-xl font-semibold text-foreground">
              How CPXi Asia can help
            </h2>
            <ul className="mt-4 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={servicePath(s.slug)} className="text-lg font-medium text-accent hover:text-accent-hover">
                    {s.title} →
                  </Link>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.metaDescription}</p>
                </li>
              ))}
            </ul>
            <Link
              href="/#contact"
              className="mt-6 inline-block rounded-md bg-accent-strong px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-strong-hover"
            >
              Talk to us
            </Link>
          </section>
        )}
      </article>

      {cases.length > 0 && (
        <section aria-labelledby="related-heading" className="mx-auto mt-20 max-w-7xl">
          <h2 id="related-heading" className="text-2xl font-bold tracking-tight text-foreground">
            Related case studies
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((c) => (
              <CaseStudyCard key={c.slug} study={c} />
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
