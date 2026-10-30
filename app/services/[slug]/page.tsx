import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStudyCard } from "../../_components/case-study-card";
import { JsonLd } from "../../_components/json-ld";
import { getCaseStudy } from "../../_lib/case-studies";
import { SERVICE_PAGES, getServicePage, servicePath } from "../../_lib/services";
import { SITE_URL } from "../../_lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_PAGES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const page = getServicePage(slug);
  if (!page) return {};
  const path = servicePath(page.slug);
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: path },
    openGraph: { url: path, title: page.metaTitle, description: page.metaDescription },
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

export default async function ServicePageRoute(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const page = getServicePage(slug);
  if (!page) notFound();

  const url = `${SITE_URL}${servicePath(page.slug)}`;
  const related = page.relatedCaseStudies
    .map(getCaseStudy)
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    // Lists name drafts first and published fallbacks last; show at most 6.
    .slice(0, 6);

  return (
    <main className="px-6 pb-24 pt-10 sm:px-10 sm:pt-14 lg:px-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": `${url}#service`,
              name: page.title,
              serviceType: page.service,
              description: page.definition,
              url,
              provider: { "@id": `${SITE_URL}/#organization` },
              areaServed: { "@type": "Country", name: "Singapore" },
            },
            {
              "@type": "FAQPage",
              mainEntity: page.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
                { "@type": "ListItem", position: 3, name: page.service, item: url },
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
              <Link href="/services" className="hover:text-foreground">Services</Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-foreground">{page.service}</li>
          </ol>
        </nav>

        <p
          className={`mt-10 text-sm font-medium uppercase tracking-wider ${
            page.practice === "Technology" ? "text-navy" : "text-accent"
          }`}
        >
          {page.practice} · {page.service}
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {page.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-foreground sm:text-xl">{page.definition}</p>
        <p className="mt-5 text-lg leading-relaxed text-muted">{page.fit}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link
            href="/#contact"
            className="rounded-md bg-accent-strong px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-strong-hover"
          >
            Talk to us
          </Link>
          <p className="text-xs text-muted">Updated {formatDate(page.updated)}</p>
        </div>

        {page.sections.map((section, i) => {
          const id = `section-${i}`;
          return (
            <section key={section.heading} aria-labelledby={id} className="mt-16">
              <h2 id={id} className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {section.heading}
              </h2>
              {section.intro && (
                <p className="mt-4 text-lg leading-relaxed text-muted">{section.intro}</p>
              )}
              {section.steps && (
                <ol className="mt-6 space-y-4">
                  {section.steps.map((step, n) => (
                    <li
                      key={step.name}
                      className="flex gap-4 rounded-xl border border-surface-border bg-surface p-5 sm:p-6"
                    >
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent-strong text-sm font-bold text-white">
                        {n + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-foreground">{step.name}</p>
                        <p className="mt-1 leading-relaxed text-muted">{step.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              )}
              {section.items && (
                <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
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
              {section.outro && (
                <p className="mt-6 text-lg leading-relaxed text-muted">{section.outro}</p>
              )}
            </section>
          );
        })}

        <section aria-labelledby="faq-heading" className="mt-16">
          <h2 id="faq-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-6 divide-y divide-surface-border border-y border-surface-border">
            {page.faqs.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="text-lg font-semibold text-foreground">{f.q}</h3>
                <p className="mt-2 leading-relaxed text-muted">{f.a}</p>
              </div>
            ))}
          </div>
          <Link href="/faq" className="mt-5 inline-block text-sm font-medium text-accent hover:text-accent-hover">
            See all frequently asked questions →
          </Link>
        </section>

        <div className="mt-16 rounded-xl border border-surface-border bg-surface p-8 text-center">
          <p className="text-xl font-semibold text-foreground">
            Planning a {page.service.toLowerCase()} project?
          </p>
          <Link
            href="/#contact"
            className="mt-6 inline-block rounded-md bg-accent-strong px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-strong-hover"
          >
            Get in touch
          </Link>
        </div>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="mx-auto mt-20 max-w-7xl">
          <h2 id="related-heading" className="text-2xl font-bold tracking-tight text-foreground">
            Related case studies
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((c) => (
              <CaseStudyCard key={c.slug} study={c} />
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
