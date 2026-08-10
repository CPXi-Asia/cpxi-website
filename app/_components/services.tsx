// The 7 service lines and Growth/Technology split per CPMG-Positioning-v3.pdf
// (Reuben's CPMG folder) — the same doc behind the navy/teal practice split.
const GROWTH = [
  "Performance Marketing",
  "Search & Social",
  "Content & Creative",
  "Brand & Identity",
] as const;

const TECHNOLOGY = [
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
        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          We don&rsquo;t just offer services. We engineer outcomes.
        </h2>
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

  return (
    <div>
      <div className="flex items-center gap-3">
        <span className={`h-px w-8 ${ruleClass}`} aria-hidden />
        <span className={`text-lg font-semibold uppercase tracking-wide sm:text-xl ${accentClass}`}>
          {label}
        </span>
      </div>
      <ul className="mt-6 space-y-4 sm:space-y-5">
        {items.map((name) => (
          <li
            key={name}
            className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
