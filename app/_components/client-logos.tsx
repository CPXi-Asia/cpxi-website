// 31 client logos extracted from the master intro deck.
// Filenames are sequential (client-01.png .. client-31.png) — they're
// presented as a single anonymous marquee; no per-logo metadata needed.
const LOGOS = Array.from({ length: 31 }, (_, i) => `/clients/client-${String(i + 1).padStart(2, "0")}.png`);

export function ClientLogos() {
  return (
    <section
      aria-label="Selected clients"
      className="border-t border-surface-border py-16 sm:py-20"
    >
      <p className="mb-10 text-center text-xs font-medium uppercase tracking-wider text-muted sm:mb-12">
        Trusted by leading brands across APAC
      </p>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {/* Duplicated for seamless looping: track translates from 0 to -50% */}
          {[...LOGOS, ...LOGOS].map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={src} alt="" loading="lazy" decoding="async" />
          ))}
        </div>
      </div>
    </section>
  );
}
