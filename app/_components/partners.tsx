// Partners section (modeled on brainlabsdigital.com "Who are our partners?"):
// platform logo grid, then the AOTY award.
//
// Platform wordmarks sourced from Wikimedia Commons official brand SVGs and
// baked to white-on-transparent (same treatment as /clients logos).
// TODO(Reuben): confirm the platform list. Xiaohongshu was skipped (only a
// square app-icon exists as clean art). If any of these carry an official
// partner-program tier (e.g. TikTok Marketing Partner), send the badge art
// and it can replace the plain wordmark.
//
// Award lockup uses the Marketing-Interactive "M" cube mark (cropped from the
// organiser's transparent event logo, year-free) with the award facts set in
// site type. Verified against the official 2025 winners list:
// https://awards.marketing-interactive.com/agency-of-the-year-sg/2025-winners/
// TODO(Reuben): swap in the official 2025 winner badge if we have the kit.

const PLATFORMS = [
  { slug: "google", name: "Google" },
  { slug: "meta", name: "Meta" },
  { slug: "tiktok", name: "TikTok" },
  { slug: "spotify", name: "Spotify" },
  { slug: "linkedin", name: "LinkedIn" },
] as const;

const logoImgClass =
  "w-auto opacity-70 brightness-[0.55] transition-[opacity,filter] duration-200 hover:opacity-100 hover:brightness-100";

export function Partners() {
  return (
    <section
      aria-label="Partners and awards"
      className="border-t border-surface-border px-6 py-14 sm:py-16"
    >
      <p className="mb-10 text-center text-xs font-medium uppercase tracking-wider text-muted">
        Partners
      </p>

      <ul
        aria-label="Platform partners"
        className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16"
      >
        {PLATFORMS.map((p) => (
          <li key={p.slug}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/partners/${p.slug}.png`}
              alt={p.name}
              decoding="async"
              loading="lazy"
              className={`h-7 sm:h-8 ${logoImgClass}`}
            />
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-14 flex max-w-2xl items-center justify-center gap-5 border-t border-surface-border pt-10 sm:mt-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/awards/aoty-cube.png"
          alt="Marketing-Interactive Agency of the Year Awards"
          decoding="async"
          loading="lazy"
          className="h-14 w-auto flex-shrink-0 sm:h-16"
        />
        <div>
          <p className="text-base font-semibold text-foreground sm:text-lg">
            Market Research Agency of the Year, Bronze
          </p>
          <p className="mt-1 text-sm text-muted">
            Marketing-Interactive Agency of the Year Awards 2025, Singapore
          </p>
        </div>
      </div>
    </section>
  );
}
