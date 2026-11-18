import Link from "next/link";
import { CaseStudyCard } from "./case-study-card";
import { CASE_STUDIES } from "../_lib/case-studies";

// Home-page teaser: the most recent case studies, linking to the full list.
export function FeaturedCaseStudies() {
  return (
    <section
      aria-labelledby="featured-heading"
      className="border-t border-surface-border px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-muted sm:text-base">
            Results
          </span>
          <h2
            id="featured-heading"
            className="mx-auto mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            What results has CPXi Asia delivered?
          </h2>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.slice(0, 3).map((c) => (
            <CaseStudyCard key={c.slug} study={c} />
          ))}
        </ul>

        <div className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-block rounded-md border border-surface-border px-6 py-3 text-base font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            See all {CASE_STUDIES.length} case studies
          </Link>
        </div>
      </div>
    </section>
  );
}
