import { ContactForm } from "./contact-form";
import { Logo } from "./logo";

// TODO(Reuben): replace with real numbers from credential bar action item.
const CREDENTIALS = [
  { value: "$XXX+", label: "Managed spend" },
  { value: "XX+", label: "Active clients" },
  { value: "XX", label: "Years in market" },
] as const;

export function Hero() {
  return (
    <section className="relative min-h-screen px-6 pt-8 pb-12 sm:px-10 lg:px-16">
      <header className="mb-16 lg:mb-24">
        <Logo className="h-8 w-auto sm:h-10 text-foreground" />
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="flex flex-col">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden />
            Digital Agency, Singapore
          </span>

          {/* Non-breaking hyphens (U+2011) keep each line as an unbreakable unit
              so the browser can't split "Vendor‑Agnostic" across two lines at
              the hyphen on narrow columns. Font sizes tuned one step down so
              the unbreakable lines still fit at all breakpoints. */}
          <h1 className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            Vendor‑Agnostic.
            <br />
            <span className="text-accent">Outcome‑Obsessed.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            Every other agency has a preferred vendor. We have a preferred
            result. Outcomes over outputs — always.
          </p>

          <dl className="mt-16 grid grid-cols-3 gap-6 border-t border-surface-border pt-8 lg:mt-auto lg:pt-10">
            {CREDENTIALS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-3xl font-bold text-foreground sm:text-4xl">
                  {stat.value}
                </dd>
                <p className="mt-2 text-xs uppercase tracking-wider text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:pt-2">
          <div className="rounded-xl border border-surface-border bg-surface p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-foreground">Get in touch</h2>
            <p className="mt-1 text-sm text-muted">
              We&rsquo;ll respond within one business day.
            </p>
            <div className="mt-6">
              <ContactForm formId="hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
