// Single source of truth for facts repeated across metadata, JSON-LD and
// llms.txt. Search and AI engines cross-check these, so keep them identical
// everywhere (directory listings, LinkedIn, press) too.
export const SITE_URL = "https://www.cpxi-asia.com";
export const SITE_NAME = "CPXi Asia";
export const CONTACT_EMAIL = "hello@cpxi-asia.com";
export const TAGLINE = "Performance marketing and technology for brands across Asia";
// Current until the office move in January 2027; update here, in the Google
// Business Profile and on directory listings on the same day.
export const ADDRESS = "60 Paya Lebar Road, #08-20 Paya Lebar Square, Singapore 409051";

// Converged from public sources (2026-10-14, re-checked 2026-10-21): Jakarta
// office launched early 2014 (ACN/Antara press release, 5 May 2014), CPXI
// Singapore Pte. Ltd. registered 16 Sep 2014 (ACRA), Singapore office opened
// June 2015. Self-reported "2013" on LinkedIn/The Manifest is the outlier. The
// "2000" in older decks is the New York parent (CPX Interactive), not CPXi
// Asia. Phrase tenure as "since 2014" rather than "N years" so the copy never
// goes stale. Public wording (John, 2026-10-21): founded in 2014 as the Asian
// arm of CPX Interactive; no founding city.
export const FOUNDING_YEAR = 2014;
export const ORIGIN = `CPXi Asia was founded in ${FOUNDING_YEAR} as the Asian arm of CPX Interactive. It is headquartered in Singapore.`;
export const DESCRIPTION = `A Singapore-headquartered digital agency with offices in Indonesia and Malaysia, founded in ${FOUNDING_YEAR}. Performance marketing and marketing technology for brands across Asia.`;

// Plain-language "what is it / who is it for / what does it do" answers that
// sit under the services H2. AI answer engines quote definitions like this
// verbatim, so they replace the old slogan. Fit statement is drawn from
// CPMG-Positioning-v3.pdf: focused and senior-led, mid-market to enterprise,
// strictly vendor-agnostic.
export const DEFINITION =
  "CPXi Asia is an independent digital agency for brands across Asia. We plan and run paid media across Google, Meta, TikTok and programmatic channels, produce the content and creative behind it, and build the marketing technology that measures it: customer data platforms, marketing automation, analytics and websites.";
export const FIT =
  "We are the right fit for mid-market and enterprise brands that want one senior-led team across media and marketing technology, and vendor-agnostic advice on which platforms to use. If you need a single agency network across dozens of countries, a global holding-company agency may suit you better.";

// Date stamp for the "at a glance" facts. Bump it whenever those facts are
// re-checked; AI engines favour figures with an explicit "as of".
export const FACTS_AS_OF = "October 2026";
