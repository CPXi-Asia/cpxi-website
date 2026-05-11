// TODO(Reuben): replace placeholder names with the actual 7 service names
// and confirm the Growth/Technology split. Brief says "two columns",
// "navy/teal colour split to indicate Growth vs Technology practice".
const GROWTH = [
  "Performance Media",
  "Programmatic",
  "Paid Search",
  "Paid Social",
] as const;

const TECHNOLOGY = [
  "Analytics & Measurement",
  "Tagging & Tracking",
  "MarTech Integration",
] as const;

export function Services() {
  return (
    <section className="border-t border-surface-border px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <span className="text-xs font-medium uppercase tracking-wider text-muted">
          What We Do
        </span>
        {/* TODO(Reuben): one-sentence positioning line goes here. */}
        <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Two practices, one operating standard.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20">
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
        <span className={`text-xs font-semibold uppercase tracking-widest ${accentClass}`}>
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
