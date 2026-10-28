// Questions prospects actually ask CPXi in pitches, RFPs and sales calls
// (compiled from 2024–2026 tenders and pitch Q&A), answered in plain,
// self-contained sentences so search and AI assistants can quote any one
// answer on its own. Questions needing a business decision (minimum term,
// team line-up, competitor policy, references, Hong Kong coverage) are left
// out until agreed.
import { ADDRESS, DEFINITION } from "../_lib/site";

export type FaqLink = { label: string; href: string };
export type FaqItem = { q: string; a: string; links?: FaqLink[] };
export type FaqGroup = { id: string; title: string; items: FaqItem[] };

const PERF = "/services/performance-marketing";
const PROG = "/services/programmatic-dooh-advertising";
const CDP = "/services/cdp-implementation";

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "about",
    title: "About CPXi Asia",
    items: [
      { q: "What does CPXi Asia do?", a: DEFINITION },
      {
        q: "Which industries do you work with?",
        a: "We work with brands in property, financial services, automotive, FMCG, beauty and personal care, retail and fashion, food and beverage, travel and aviation, consumer electronics, healthcare, education and B2B. Clients include Starbucks, Canon, Volvo, UOL Group and Bank of China.",
        links: [{ label: "See case studies", href: "/case-studies" }],
      },
      {
        q: "Do you work with government and public-sector clients?",
        a: "Yes. We run digital campaigns for public-sector agencies, statutory boards and educational institutions in Singapore, alongside our commercial clients.",
      },
      {
        q: "Do you cover markets outside Singapore?",
        a: "Yes. We have offices in Singapore, Indonesia and Malaysia, and run regional campaigns across Southeast Asia. We have also run campaigns in markets such as Australia and the United States for Asian brands expanding overseas.",
      },
      {
        q: "Where are you based?",
        a: `Our headquarters is at ${ADDRESS}, with offices in Indonesia and Malaysia.`,
        links: [{ label: "Contact us", href: "/#contact" }],
      },
    ],
  },
  {
    id: "services",
    title: "Services and channels",
    items: [
      {
        q: "Which advertising channels do you run?",
        a: "Google (Search, Performance Max, Demand Gen, YouTube, Shopping), Meta, TikTok, LinkedIn, programmatic display, video, audio and connected TV, digital out-of-home screens, and retail media. We plan them together and give each channel a clear job.",
        links: [{ label: "Performance marketing", href: PERF }],
      },
      {
        q: "Do you buy offline media such as out-of-home, transit and radio?",
        a: "Yes. As well as programmatic digital out-of-home, we book traditional out-of-home, transit and airport media directly with media owners, and can book radio alongside digital audio.",
        links: [{ label: "Programmatic and DOOH", href: PROG }],
      },
      {
        q: "Do you produce creative in-house?",
        a: "Yes. We produce digital and rich-media ad creative and campaign content, and work alongside your brand or creative agency when you already have one.",
      },
      {
        q: "Do you run influencer (KOL) campaigns?",
        a: "Yes. We shortlist creators with an AI-assisted screening tool and then review each one manually for audience fit, tone and authenticity, including checks for fake followers. Campaigns are tracked with UTM links, promo codes and conversions.",
      },
      {
        q: "Do you do SEO, and can you help us appear in AI answers?",
        a: "Yes. Alongside technical and content SEO, we help brands show up in AI assistants and Google's AI answers (often called GEO or AEO), and track rankings, AI referral traffic and citations in monthly reports.",
      },
      {
        q: "How do you use AI in your work?",
        a: "We use AI to speed up research, audience analysis, creator screening and campaign optimisation, with people making the decisions. Our technology team also helps clients work out where AI fits in their own marketing stack.",
      },
      {
        q: "Can you run ads for financial services in line with MAS requirements?",
        a: "Yes. We run campaigns for brokerages and other financial services brands in Singapore, plan messaging and funnels around their regulatory requirements, and all ad copy goes through the client's compliance review before launch.",
      },
    ],
  },
  {
    id: "measurement",
    title: "Measurement and reporting",
    items: [
      {
        q: "Can you measure store visits from digital or out-of-home ads?",
        a: "Yes. We measure store-visit uplift among people exposed to your ads, reported in aggregate, and use Google's store-visit measurement where volumes allow. For out-of-home we also report proof of display and the share of your target audience reached.",
        links: [{ label: "How DOOH is measured", href: PROG }],
      },
      {
        q: "Can you run brand lift studies?",
        a: "Yes. We run pre- and post-campaign brand lift studies with research partners, measuring changes in awareness, consideration and usage between exposed audiences and a control group.",
      },
      {
        q: "Will we have a live dashboard?",
        a: "Yes. We set up a Looker Studio dashboard showing spend, results and cost per outcome by channel, available to your team at any time.",
      },
      {
        q: "How often do you report?",
        a: "Weekly performance reviews for active campaigns, a monthly report within 5–7 working days of month end with insights and next actions, and an end-of-campaign report within 7–10 working days.",
      },
      {
        q: "Do you guarantee results?",
        a: "No. Any agency that guarantees a cost per lead before seeing your data is guessing. We give directional ranges based on your history and the market, agree targets with you, and report honestly against them.",
      },
      {
        q: "Should we keep Performance Max?",
        a: "Usually yes, with controls: cap its budget, exclude your brand terms and manage placements, and run it alongside search campaigns that capture high-intent searches with more transparency.",
        links: [{ label: "Performance marketing", href: PERF }],
      },
    ],
  },
  {
    id: "commercials",
    title: "Pricing and commercials",
    items: [
      {
        q: "How do you charge?",
        a: "Media spend and our fee are shown separately. Our management fee is based on media spend and covers account setup, media planning, ongoing optimisation, reporting and consultation. An audit of existing accounts can be scoped before you commit.",
      },
      {
        q: "Is there a minimum budget?",
        a: "There is no single minimum: it depends on the channels and goals. We recommend a budget large enough for the platforms to learn and for results to be meaningful, and some out-of-home media owners set minimum bookings, which we flag upfront.",
      },
      {
        q: "Who owns the ad accounts and data?",
        a: "We recommend that you own your ad accounts, Google Tag Manager container and analytics property, with CPXi added as an admin, so your data and history stay with you.",
      },
    ],
  },
  {
    id: "working-together",
    title: "Working with us",
    items: [
      {
        q: "How quickly can you start?",
        a: "Paid media campaigns are usually live within 1–2 weeks of confirming the plan. Programmatic out-of-home typically needs about 10 working days from receiving creative assets.",
      },
      {
        q: "What happens between the brief and launch?",
        a: "We review your goals, audience and current results, then propose a plan with channels, targeting, budget split and KPIs. Once agreed, we set up tracking and campaigns, test everything before launch, and start optimising from day one.",
      },
      {
        q: "How long until campaigns are fully optimised?",
        a: "Quick wins usually show in the first few weeks. Always-on campaigns typically reach full optimisation in 3–6 months as the platforms learn and we refine audiences and creative.",
      },
      {
        q: "Will you sign an NDA?",
        a: "Yes. We routinely sign non-disclosure and confidentiality agreements with clients before sharing data or plans.",
      },
    ],
  },
  {
    id: "data-privacy",
    title: "Data, privacy and brand safety",
    items: [
      {
        q: "Are you compliant with Singapore's PDPA?",
        a: "Yes. We design campaigns and data projects around consent, data minimisation and retention rules, keep customer data inside your platforms rather than exporting it, and hash personal data before it is shared with ad platforms.",
      },
      {
        q: "How do you keep ads brand-safe and prevent fraud?",
        a: "We use publisher whitelists and blocklists, negative keyword lists and placement exclusions, and monitor delivery throughout each campaign. For influencer work, we check creators for fake followers and engagement before booking.",
      },
    ],
  },
  {
    id: "martech",
    title: "Marketing technology",
    items: [
      {
        q: "What is the difference between a CDP and a CRM?",
        a: "A CRM records what known customers have done, usually in batches. A customer data platform (CDP) builds a live profile for every visitor, including anonymous ones, across devices and channels, and lets you act on it in real time.",
        links: [{ label: "CDP implementation", href: CDP }],
      },
      {
        q: "Which CDP do you recommend?",
        a: "It depends on how you sell, your data maturity and the tools you already use. We score the options with you side by side. Platforms we work with include Segment, Meiro, Customer.io and Klaviyo.",
        links: [{ label: "CDP implementation", href: CDP }],
      },
      {
        q: "What access do you need to set up tracking?",
        a: "Publish access to your Google Tag Manager container (or your web team installs ours once) and Marketer access to Google Analytics 4. We configure and test everything, and publish only after you approve.",
      },
    ],
  },
];

export const FAQ_COUNT = FAQ_GROUPS.reduce((n, g) => n + g.items.length, 0);
