import { Logo } from "./logo";

export function Hero() {
  return (
    <section className="relative px-6 pt-8 sm:px-10 lg:px-16">
      <header>
        <Logo className="h-8 w-auto sm:h-10 text-foreground" />
      </header>

      {/* Centered on the page axis to match the logo bands below. */}
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center py-14 text-center sm:py-20">
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Performance marketing and technology{" "}
          <span className="text-accent">for brands across Asia.</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          Singapore-headquartered, with offices in Indonesia and Malaysia.
          Our roots go back 20+ years through Digital Remedy in New York.
        </p>

        <a
          href="#contact"
          className="mt-10 inline-block rounded-md bg-accent-strong px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-strong-hover"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
