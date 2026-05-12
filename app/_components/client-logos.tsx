// 29 client logos sourced from official brand assets (Wikimedia Commons,
// brand press kits) and baked to white silhouettes on transparent
// backgrounds. Order interleaves categories so the marquee doesn't show
// all finance logos in a row.
const LOGOS = [
  "tiger-brokers",
  "canon",
  "ho-bee-land",
  "volvo",
  "cgs",
  "kate-spade",
  "yanlord",
  "polestar",
  "unionpay",
  "anessa",
  "cdl",
  "spa-esprit",
  "webull",
  "cortina-watch",
  "sc-global",
  "wearnes",
  "hl-bank",
  "puma",
  "guocoland",
  "switzerland",
  "bank-of-china",
  "skechers",
  "tsubaki",
  "starlux",
  "longbridge",
  "grohe",
  "fino",
  "american-standard",
  "yeos",
];

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
          {[...LOGOS, ...LOGOS].map((slug, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={`/clients/${slug}.png`} alt="" decoding="async" />
          ))}
        </div>
      </div>
    </section>
  );
}
