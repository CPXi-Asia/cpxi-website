// 34 client logos, two assets each:
//  - /clients/<slug>.png        white silhouette (rest state, dimmed)
//  - /clients/color/<slug>.png  dark-adapted full-color version (hover state):
//    official brand art with neutral-dark pixels flipped to white (the same
//    move brands make in their own dark-mode logos) so black wordmark text
//    stays legible on this background.
// `color: false` marks brands whose primary identity is monochrome
// (no color version exists) — those brighten to full white on hover instead.
// `tall` marks vertical lockups that get the full cell height, since the
// standard height cap renders them illegibly small.
// `name` is the alt text — the only place crawlers and AI engines can read
// who the clients are.
// Order interleaves categories so no row reads as all-finance.
export const LOGOS: ReadonlyArray<{
  slug: string;
  name: string;
  color?: boolean;
  tall?: boolean;
}> = [
  { slug: "tiger-brokers", name: "Tiger Brokers" },
  { slug: "starbucks", name: "Starbucks" },
  { slug: "canon", name: "Canon" },
  { slug: "ho-bee-land", name: "Ho Bee Land" },
  { slug: "volvo", name: "Volvo" },
  { slug: "cgs", name: "CGS International" },
  { slug: "uol", name: "UOL Group", tall: true },
  { slug: "kate-spade", name: "Kate Spade", color: false },
  { slug: "yanlord", name: "Yanlord", tall: true },
  { slug: "polestar", name: "Polestar", color: false },
  { slug: "unionpay", name: "UnionPay", tall: true },
  { slug: "anessa", name: "Anessa" },
  { slug: "cdl", name: "City Developments Limited", tall: true },
  { slug: "daikin", name: "Daikin" },
  { slug: "spa-esprit", name: "Spa Esprit Group", color: false, tall: true },
  { slug: "cortina-watch", name: "Cortina Watch", tall: true },
  { slug: "sc-global", name: "SC Global Developments", tall: true },
  { slug: "wearnes", name: "Wearnes", color: false, tall: true },
  { slug: "hl-bank", name: "Hong Leong Bank" },
  { slug: "mcl-land", name: "MCL Land", color: false },
  { slug: "puma", name: "Puma", color: false },
  { slug: "guocoland", name: "GuocoLand", color: false },
  { slug: "switzerland", name: "Switzerland Tourism" },
  { slug: "bank-of-china", name: "Bank of China" },
  { slug: "best-denki", name: "BEST Denki" },
  { slug: "skechers", name: "Skechers" },
  { slug: "mount-alvernia", name: "Mount Alvernia Hospital", tall: true },
  { slug: "tsubaki", name: "Tsubaki" },
  { slug: "starlux", name: "STARLUX Airlines", color: false },
  { slug: "grohe", name: "GROHE", tall: true },
  { slug: "singhaiyi", name: "SingHaiyi", tall: true },
  { slug: "fino", name: "Fino" },
  { slug: "american-standard", name: "American Standard" },
  { slug: "yeos", name: "Yeo's" },
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
        {LOGOS.map(({ slug, name, color = true, tall = false }) => {
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
                alt={name}
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
