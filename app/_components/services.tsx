import Link from "next/link";
import { SERVICE_PAGES, servicePageFor, servicePath } from "../_lib/services";
import { DEFINITION, FIT } from "../_lib/site";

// The 7 service lines and Growth/Technology split per CPMG-Positioning-v3.pdf
// (Reuben's CPMG folder) — the same doc behind the navy/teal practice split.
export const GROWTH = [
  "Performance Marketing",
  "Search & Social",
  "Content & Creative",
  "Brand & Identity",
] as const;

export const TECHNOLOGY = [
  "Marketing Technology",
  "Web & Product",
  "Data & Intelligence",
  "AI Strategy & Consulting",
] as const;

export function Services() {
  return (
    <section className="border-t border-surface-border px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl text-center">
        <span className="text-sm font-medium uppercase tracking-wider text-muted sm:text-base">
          What We Do
        </span>
        {/* Phrased as the question a prospect would type into a search or AI
            assistant, answered directly underneath. */}
        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          What does CPXi Asia do?
        </h2>
        <div className="mx-auto mt-8 max-w-3xl space-y-5 text-left text-lg leading-relaxed text-muted sm:text-center">
          <p className="text-foreground">{DEFINITION}</p>
          <p>{FIT}</p>
        </div>
        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-12 text-left md:grid-cols-2 lg:gap-20">
          <ServiceColumn
            label="Growth"
            color="accent"
            items={GROWTH}
          />
          <ServiceColumn
            label="Technology"
            color="navy"
            items={TECHNOLOGY}
          />
        </div>
        {SERVICE_PAGES.length > 0 && (
          <div className="mx-auto mt-16 max-w-3xl border-t border-surface-border pt-10">
            <p className="text-sm font-medium uppercase tracking-wider text-muted">
              Specialist services in Singapore
            </p>
            <ul className="mt-5 flex flex-wrap justify-center gap-3">
              {SERVICE_PAGES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={servicePath(s.slug)}
                    className="inline-block rounded-md border border-surface-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent sm:text-base"
                  >
                    {s.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

function ServiceColumn({
  label,
  color,
  items,
}: {
  label: string;
  color: "accent" | "navy";
  items: readonly string[];
}) {
  const accentClass = color === "accent" ? "text-accent" : "text-navy";
  const ruleClass = color === "accent" ? "bg-accent" : "bg-navy";
  const hoverClass = color === "accent" ? "hover:text-accent" : "hover:text-navy";

  return (
    <div>
      <div className="flex items-center gap-3">
        <span className={`h-px w-8 ${ruleClass}`} aria-hidden />
        <span className={`text-lg font-semibold uppercase tracking-wide sm:text-xl ${accentClass}`}>
          {label}
        </span>
      </div>
      <ul className="mt-6 space-y-4 sm:space-y-5">
        {items.map((name) => {
          const page = servicePageFor(name);
          return (
            <li
              key={name}
              className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              {page ? (
                <Link
                  href={servicePath(page.slug)}
                  className={`underline decoration-surface-border decoration-2 underline-offset-8 transition-colors ${hoverClass}`}
                >
                  {name}
                </Link>
              ) : (
                name
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
