import { Logo } from "./logo";

// Share-image layout for next/og (Satori: inline styles, flexbox only).
// Matches the site: dark navy, white headline, teal accent.
export const OG_SIZE = { width: 1200, height: 630 };

export function OgCard({
  eyebrow,
  title,
  metric,
  metricLabel,
}: {
  eyebrow: string;
  title: string;
  metric?: string;
  metricLabel?: string;
}) {
  // Long headlines step down so they stay within three or four lines.
  const titleSize = title.length > 80 ? 46 : title.length > 55 ? 54 : 64;
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 80px",
        background: "#0a0f1e",
        color: "#f4f4f5",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", color: "#f4f4f5" }}>
          <Logo width={260} height={69} />
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#14b8a6", letterSpacing: 2, textTransform: "uppercase" }}>
          {eyebrow}
        </div>
      </div>
      <div style={{ display: "flex", fontSize: titleSize, lineHeight: 1.12, letterSpacing: -1, fontWeight: 700 }}>
        {title}
      </div>
      {metric ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ display: "flex", fontSize: 64, fontWeight: 700, color: "#14b8a6" }}>{metric}</span>
          <span
            style={{ display: "flex", marginLeft: 28, maxWidth: 760, fontSize: 28, lineHeight: 1.25, color: "#9ca3af" }}
          >
            {metricLabel}
          </span>
        </div>
      ) : (
        <div style={{ display: "flex", fontSize: 28, color: "#9ca3af" }}>www.cpxi-asia.com</div>
      )}
    </div>
  );
}
