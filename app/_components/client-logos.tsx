// 29 client logos, two assets each:
//  - /clients/<slug>.png        white silhouette (rest state, dimmed)
//  - /clients/color/<slug>.png  dark-adapted full-color version (hover state):
//    official brand art with neutral-dark pixels flipped to white (the same
//    move brands make in their own dark-mode logos) so black wordmark text
//    stays legible on this background.
// `color: false` marks brands whose primary identity is monochrome
// (no color version exists) — those brighten to full white on hover instead.
// `tall` marks vertical lockups that get the full cell height, since the
// standard height cap renders them illegibly small.
// Order interleaves categories so no row reads as all-finance.
const LOGOS: ReadonlyArray<{ slug: string; color?: boolean; tall?: boolean }> = [
  { slug: "tiger-brokers" },
  { slug: "canon" },
  { slug: "ho-bee-land" },
  { slug: "volvo" },
  { slug: "cgs" },
  { slug: "uol", tall: true },
  { slug: "kate-spade", color: false },
  { slug: "yanlord", tall: true },
  { slug: "polestar", color: false },
  { slug: "unionpay", tall: true },
  { slug: "anessa" },
  { slug: "cdl", tall: true },
  { slug: "daikin" },
  { slug: "spa-esprit", color: false, tall: true },
  { slug: "cortina-watch", tall: true },
  { slug: "sc-global", tall: true },
  { slug: "wearnes", color: false, tall: true },
  { slug: "hl-bank" },
  { slug: "mcl-land", color: false },
  { slug: "puma", color: false },
  { slug: "guocoland", color: false },
  { slug: "switzerland" },
  { slug: "bank-of-china" },
  { slug: "best-denki" },
  { slug: "skechers" },
  { slug: "tsubaki" },
  { slug: "starlux", color: false },
  { slug: "grohe", tall: true },
  { slug: "singhaiyi", tall: true },
  { slug: "fino" },
  { slug: "american-standard" },
  { slug: "yeos" },
];

export function ClientLogos() {
  return (
    <section
      aria-label="Selected clients"
      className="border-t border-surface-border px-6 py-14 sm:py-16"
    >
      <p className="mb-10 text-center text-xs font-medium uppercase tracking-wider text-muted sm:mb-12">
        Trusted by leading brands
      </p>

      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-6 sm:gap-x-6">
        {LOGOS.map(({ slug, color = true, tall = false }) => {
          const sizing = tall
            ? "max-h-12 max-w-[7rem] sm:max-h-14 sm:max-w-[8.5rem]"
            : "max-h-8 max-w-[7rem] sm:max-h-9 sm:max-w-[8.5rem]";
          return (
            <li
              key={slug}
              className="group relative flex h-12 w-32 items-center justify-center sm:h-14 sm:w-40"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/clients/${slug}.png`}
                alt=""
                decoding="async"
                loading="lazy"
                className={`${sizing} w-auto opacity-70 brightness-[0.55] transition-[opacity,filter] duration-200 ${
                  color
                    ? "group-hover:opacity-0"
                    : "group-hover:opacity-100 group-hover:brightness-100"
                }`}
              />
              {color && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={`/clients/color/${slug}.png`}
                  alt=""
                  aria-hidden
                  decoding="async"
                  loading="lazy"
                  className={`${sizing} absolute inset-0 m-auto w-auto opacity-0 transition-opacity duration-200 group-hover:opacity-100`}
                />
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
