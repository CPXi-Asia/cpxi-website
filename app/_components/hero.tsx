import { ContactForm } from "./contact-form";
import { Logo } from "./logo";

const CREDENTIALS = [
  { value: "2014", label: "Founded in Singapore" },
  { value: "20+ years", label: "Digital media heritage (US, via Digital Remedy)" },
  { value: "3 markets", label: "Across Asia" },
] as const;

export function Hero() {
  return (
    <section className="relative min-h-screen px-6 pt-8 pb-12 sm:px-10 lg:px-16">
      <header className="mb-16 lg:mb-24">
        <Logo className="h-8 w-auto sm:h-10 text-foreground" />
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Performance marketing and technology{" "}
            <span className="text-accent">for brands across Asia.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            A Singapore-headquartered digital agency with offices in Indonesia
            and Malaysia, founded in 2014. Our digital media roots go back more
            than 20 years, through Digital Remedy in New York. We run
            performance marketing and marketing technology for brands across the
            region.
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
