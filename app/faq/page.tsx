import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../_components/json-ld";
import { FAQ_COUNT, FAQ_GROUPS } from "../_content/faq";
import { SITE_NAME, SITE_URL } from "../_lib/site";

const TITLE = "Frequently asked questions";
const DESCRIPTION =
  "Answers to the questions brands ask CPXi Asia most: channels, measurement, reporting, pricing, data privacy and marketing technology in Singapore.";
const UPDATED = "2026-10-22";

export const metadata: Metadata = {
  title: `FAQ | ${SITE_NAME}`,
  description: DESCRIPTION,
  alternates: { canonical: "/faq" },
  openGraph: { url: "/faq", title: `FAQ | ${SITE_NAME}`, description: DESCRIPTION },
};

export default function FaqPage() {
  return (
    <main className="px-6 pb-24 pt-14 sm:px-10 sm:pt-20 lg:px-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/faq#faq`,
              url: `${SITE_URL}/faq`,
              dateModified: UPDATED,
              publisher: { "@id": `${SITE_URL}/#organization` },
              mainEntity: FAQ_GROUPS.flatMap((g) =>
                g.items.map((item) => ({
                  "@type": "Question",
                  name: item.q,
                  acceptedAnswer: { "@type": "Answer", text: item.a },
                })),
              ),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
              ],
            },
          ],
        }}
      />

      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {TITLE}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
          {FAQ_COUNT}{" "}questions brands ask us most often in pitches and planning
          sessions, answered plainly. Don&rsquo;t see yours?{" "}
          <Link href="/#contact" className="text-accent underline underline-offset-4 hover:text-accent-hover">
            Ask us directly
          </Link>
          .
        </p>

        <nav aria-label="FAQ topics" className="mt-10">
          <ul className="flex flex-wrap gap-3">
            {FAQ_GROUPS.map((g) => (
              <li key={g.id}>
                <a
                  href={`#${g.id}`}
                  className="inline-block rounded-md border border-surface-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {g.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {FAQ_GROUPS.map((g) => (
          <section key={g.id} id={g.id} aria-labelledby={`${g.id}-heading`} className="mt-16 scroll-mt-8">
            <h2 id={`${g.id}-heading`} className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {g.title}
            </h2>
            <div className="mt-6 divide-y divide-surface-border border-y border-surface-border">
              {g.items.map((item) => (
                <div key={item.q} className="py-6">
                  <h3 className="text-lg font-semibold text-foreground">{item.q}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.a}</p>
                  {item.links && (
                    <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                      {item.links.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          className="font-medium text-accent hover:text-accent-hover"
                        >
                          {l.label} →
                        </Link>
                      ))}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="mt-16 rounded-xl border border-surface-border bg-surface p-8 text-center">
          <p className="text-xl font-semibold text-foreground">Still have a question?</p>
          <Link
            href="/#contact"
            className="mt-6 inline-block rounded-md bg-accent-strong px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-strong-hover"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  );
}
