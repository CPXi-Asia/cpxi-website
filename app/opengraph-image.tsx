import { ImageResponse } from "next/og";
import { Logo } from "./_components/logo";
import { SITE_NAME, TAGLINE } from "./_lib/site";

export const alt = `${SITE_NAME} — ${TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Mirrors the hero: dark navy, white headline, teal accent on the second line.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0a0f1e",
          color: "#f4f4f5",
        }}
      >
        <div style={{ display: "flex", color: "#f4f4f5" }}>
          <Logo width={340} height={90} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 72, lineHeight: 1.1, letterSpacing: -1.5 }}>
          <span>Performance marketing and technology</span>
          <span style={{ color: "#14b8a6" }}>for brands across Asia.</span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#9ca3af" }}>
          Singapore · Indonesia · Malaysia
        </div>
      </div>
    ),
    size,
  );
}
