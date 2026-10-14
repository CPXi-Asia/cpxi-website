import { LOGOS } from "../_components/client-logos";
import { MARTECH, PLATFORMS } from "../_components/partners";
import { GROWTH, TECHNOLOGY } from "../_components/services";
import { CONTACT_EMAIL, DESCRIPTION, SITE_NAME, SITE_URL } from "../_lib/site";

// llms.txt (https://llmstxt.org): a plain-markdown brief for AI crawlers.
// Built from the same constants the page renders, so it can't drift.
export const dynamic = "force-static";

const list = (items: readonly string[]) => items.map((i) => `- ${i}`).join("\n");

export function GET() {
  const body = `# ${SITE_NAME}

> ${DESCRIPTION}

## Services

### Growth
${list(GROWTH)}

### Technology
${list(TECHNOLOGY)}

## Selected clients

${LOGOS.map((l) => l.name).join(", ")}.

## Partners and certifications

- Media platforms: ${PLATFORMS.map((p) => p.name).join(", ")}
- Marketing technology: ${MARTECH.map((p) => p.name).join(", ")}
- Certified Google Partner and Meta Business Partner

## Awards

- Market Research Agency of the Year (Bronze), Marketing-Interactive Agency of the Year Awards 2025, Singapore

## Contact

- Website: ${SITE_URL}
- Email: ${CONTACT_EMAIL}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
