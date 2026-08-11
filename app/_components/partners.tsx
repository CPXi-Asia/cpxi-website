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

// Martech stack partners per Reuben/Wilfred (2026-08-11 review).
const MARTECH = [
  { slug: "customerio", name: "Customer.io" },
  { slug: "segment", name: "Segment" },
  { slug: "antsomi", name: "Antsomi" },
  { slug: "meiro", name: "Meiro" },
  { slug: "mixpanel", name: "Mixpanel" },
  { slug: "klaviyo", name: "Klaviyo" },
  { slug: "hubspot", name: "HubSpot" },
  { slug: "adjust", name: "Adjust" },
  { slug: "appsflyer", name: "AppsFlyer" },
] as const;

const logoImgClass =
  "w-auto opacity-70 brightness-[0.55] transition-[opacity,filter] duration-200 hover:opacity-100 hover:brightness-100";

export function Partners() {
  return (
    <section
      aria-label="Partners and awards"
      className="border-t border-surface-border px-6 py-14 sm:py-16"
    >
      <p className="mb-10 text-center text-sm font-medium uppercase tracking-wider text-muted sm:text-base">
        Partners
      </p>

      <ul
        aria-label="Media platform partners"
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

      <ul
        aria-label="Marketing technology partners"
        className="mx-auto mt-12 flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-7 sm:mt-14 sm:gap-x-12"
      >
        {MARTECH.map((p) => (
          <li key={p.slug}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/partners/${p.slug}.png`}
              alt={p.name}
              decoding="async"
              loading="lazy"
              className={`h-5 sm:h-6 ${logoImgClass}`}
            />
          </li>
        ))}
      </ul>

      {/* Certification badges per Reuben (2026-08-11): Google Partner
          (rebuilt from the legacy site's official badge art) and Meta
          Business Partner (Meta's current program branding, from Reuben's
          supplied image). Verification links carried over from the legacy
          site's linked badges. */}
      <div className="mx-auto mt-14 max-w-3xl border-t border-surface-border pt-10 sm:mt-16">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted sm:text-base">
          Proudly Certified By
        </p>
        <ul
          aria-label="Certifications"
          className="mt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-8 sm:gap-x-20"
        >
        <li>
          <a
            href="https://www.google.com/partners/agency?id=9659567678"
            target="_blank"
            rel="noopener noreferrer"
            title="Verify: Google Partner"
            className="group relative block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/certifications/google-partner.png"
              alt="Google Partner"
              decoding="async"
              loading="lazy"
              className="h-16 w-auto opacity-70 brightness-[0.55] transition-[opacity,filter] duration-200 group-hover:opacity-0 sm:h-20"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/certifications/color/google-partner.png"
              alt=""
              aria-hidden
              decoding="async"
              loading="lazy"
              className="absolute inset-0 m-auto h-16 w-auto opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:h-20"
            />
          </a>
        </li>
        <li>
          <a
            href="https://business.facebook.com/business/partner-directory/search?solution_type=campaign_management&id=731258404104975&section=overview"
            target="_blank"
            rel="noopener noreferrer"
            title="Verify: Meta Business Partner"
            className="group relative block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/certifications/meta-business-partner.png"
              alt="Meta Business Partner"
              decoding="async"
              loading="lazy"
              className="h-12 w-auto opacity-70 brightness-[0.55] transition-[opacity,filter] duration-200 group-hover:opacity-0 sm:h-14"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/certifications/color/meta-business-partner.png"
              alt=""
              aria-hidden
              decoding="async"
              loading="lazy"
              className="absolute inset-0 m-auto h-12 w-auto opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:h-14"
            />
          </a>
        </li>
        </ul>
        <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-muted">
          Awarded to agencies that demonstrate proven expertise to deliver
          strong campaign performance &amp; measurable client growth.
        </p>
      </div>

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
