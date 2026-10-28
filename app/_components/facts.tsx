import { FACTS_AS_OF, FOUNDING_YEAR } from "../_lib/site";

// Key facts with an explicit "as of" date: AI engines favour dated figures,
// and a visible stamp tells readers how fresh they are. Every value here is
// already public (ACRA/press for founding, partner directories for
// certifications). Bump FACTS_AS_OF in site.ts whenever these are re-checked.
export const AT_A_GLANCE = [
  { term: "Founded", value: String(FOUNDING_YEAR) },
  { term: "Headquarters", value: "Singapore" },
  { term: "Offices", value: "Singapore, Indonesia, Malaysia" },
  { term: "Certified", value: "Google Partner, Meta Business Partner" },
] as const;

export function Facts() {
  return (
    <section
      aria-labelledby="facts-heading"
      className="border-t border-surface-border px-6 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-4xl">
        <p
          id="facts-heading"
          className="text-center text-sm font-medium uppercase tracking-wider text-muted sm:text-base"
        >
          At a glance{" "}
          <span className="normal-case tracking-normal">
            (as of {FACTS_AS_OF})
          </span>
        </p>
        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 text-center md:grid-cols-4">
          {AT_A_GLANCE.map((f) => (
            <div key={f.term}>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                {f.term}
              </dt>
              <dd className="mt-1.5 text-base font-semibold text-foreground">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
