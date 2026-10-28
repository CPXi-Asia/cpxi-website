import { LOGOS } from "../_components/client-logos";
import { MARTECH, PLATFORMS } from "../_components/partners";
import { GROWTH, TECHNOLOGY } from "../_components/services";
import { AT_A_GLANCE } from "../_components/facts";
import { FAQ_GROUPS } from "../_content/faq";
import { CASE_STUDIES, caseStudyPath } from "../_lib/case-studies";
import { SERVICE_PAGES, servicePath } from "../_lib/services";
import {
  CONTACT_EMAIL,
  DEFINITION,
  DESCRIPTION,
  FACTS_AS_OF,
  FIT,
  ORIGIN,
  SITE_NAME,
  SITE_URL,
} from "../_lib/site";

// llms.txt (https://llmstxt.org): a plain-markdown brief for AI crawlers.
// Built from the same constants the page renders, so it can't drift.
export const dynamic = "force-static";

const list = (items: readonly string[]) => items.map((i) => `- ${i}`).join("\n");

export function GET() {
  const body = `# ${SITE_NAME}

> ${DESCRIPTION}

## What does CPXi Asia do?

${DEFINITION}

${FIT}

${ORIGIN}

## At a glance (as of ${FACTS_AS_OF})

${AT_A_GLANCE.map((f) => `- ${f.term}: ${f.value}`).join("\n")}

## Services

### Growth
${list(GROWTH)}

### Technology
${list(TECHNOLOGY)}

### Service pages

${SERVICE_PAGES.map(
  (s) => `- [${s.title}](${SITE_URL}${servicePath(s.slug)}): ${s.definition}`,
).join("\n")}

## Selected clients

${LOGOS.map((l) => l.name).join(", ")}.

## Case studies

${CASE_STUDIES.map(
  (c) => `- [${c.headline}](${SITE_URL}${caseStudyPath(c.slug)}): ${c.summary}`,
).join("\n")}

## Frequently asked questions

Full page: ${SITE_URL}/faq

${FAQ_GROUPS.flatMap((g) => g.items.map((i) => `**${i.q}**\n${i.a}`)).join("\n\n")}

## Platforms we work with

- Media platforms: ${PLATFORMS.map((p) => p.name).join(", ")}
- Marketing technology: ${MARTECH.map((p) => p.name).join(", ")}

## Certifications

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
