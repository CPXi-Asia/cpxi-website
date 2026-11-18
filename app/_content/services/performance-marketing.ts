import type { ServicePage } from "../../_lib/services";

// Sourced from CPXi's 2025–2026 proposals and intro decks (channel mix,
// audit-led rebuild approach, operating cadence, GA4/GTM setup, reporting
// timelines, fee structure). Results live in the linked case studies.
const page: ServicePage = {
  slug: "performance-marketing",
  practice: "Growth",
  service: "Performance Marketing",
  title: "Performance marketing agency in Singapore",
  metaTitle: "Performance Marketing Agency in Singapore | CPXi Asia",
  metaDescription:
    "Google, Meta, TikTok and LinkedIn campaigns run to leads, sales and store visits, with clean tracking and transparent reporting. CPXi Asia, Singapore.",
  definition:
    "CPXi Asia is an independent performance marketing agency in Singapore. We plan, run and optimise paid media across Google, Meta, TikTok and LinkedIn, plus programmatic and digital out-of-home, and measure every channel against the outcome you care about: leads, sales or store visits. We set up the tracking first, so reported results reflect what actually happened.",
  fit: "We are a good fit if you want one accountable team from tracking to reporting, and a partner that will tell you where budget is being wasted before asking for more. If you are looking for the cheapest set-and-forget campaign management, we are probably not the right choice: we spend time on measurement, testing and reporting.",
  sections: [
    {
      heading: "Which channels do you run?",
      intro:
        "We don't lead with platforms. We give each channel a job in the plan, then judge it on that job.",
      items: [
        { name: "Google", detail: "Search split by intent (brand, generic, competitor, local), Performance Max, Demand Gen, YouTube and Shopping, with remarketing timed to when people are most likely to convert." },
        { name: "Meta", detail: "Facebook and Instagram lead forms, catalogue and collection ads, lookalike audiences and retargeting of people who engaged but did not convert." },
        { name: "TikTok", detail: "In-feed and Spark Ads that amplify organic-style creator content, with retargeting and lookalike audiences." },
        { name: "LinkedIn", detail: "Lead Gen Forms, document ads, video and Sponsored Messages, targeting by job title, seniority and company. Not only for B2B." },
        { name: "Programmatic and DOOH", detail: "Display, video, rich media, audio and digital screens across Singapore, coordinated with search and social." },
        { name: "More platforms", detail: "Reddit, Pinterest, Xiaohongshu and retail media such as Shopee off-site ads, where your audience is." },
      ],
    },
    {
      heading: "How do you take over or start an account?",
      intro:
        "For existing accounts we start with an audit, because the fastest gains usually come from fixing what is already there, not from spending more.",
      steps: [
        { name: "Fix the measurement (weeks 1–2)", detail: "Check what is counted as a conversion, remove duplicate and low-value conversion actions, and agree one primary goal per account." },
        { name: "Stop the waste (weeks 1–3)", detail: "Negative keywords, placement and audience exclusions, and pausing spend that is not contributing." },
        { name: "Consolidate (weeks 3–6)", detail: "Simplify campaign structures so platform algorithms have enough data to learn, building the new structure alongside the old one so volume is protected." },
        { name: "Reallocate (weeks 4–8)", detail: "Move budget toward the campaigns, audiences and creative that drive the outcome at your target cost." },
        { name: "Scale (week 8 onward)", detail: "Expand what works, test new audiences and creative, and defend share on your most valuable searches." },
      ],
      outro:
        "For new accounts, campaigns are typically live within 1–2 weeks of confirming the plan and connecting the accounts.",
    },
    {
      heading: "How do you measure and report results?",
      items: [
        { name: "Tracking set up first", detail: "Google Analytics 4 and Google Tag Manager configured and tested before launch, covering every critical conversion step." },
        { name: "One goal per channel", detail: "Each channel is measured on real cost per lead, purchase or visit against your target. Awareness spend is capped and judged on reach and brand lift, not last-click sales." },
        { name: "Store visits", detail: "Footfall measured through Google store visits and our own footfall attribution for retail brands with physical outlets." },
        { name: "Live dashboard", detail: "A Looker Studio dashboard with spend, results and cost per outcome by channel, available to your team at any time." },
        { name: "Weekly and monthly reporting", detail: "Weekly performance reviews for active campaigns, and a monthly report within the first week of each month with insights and recommended next actions." },
        { name: "Your data stays yours", detail: "We recommend that ad accounts and tag containers are owned by you, with CPXi added as an admin, and customer data is hashed before it is shared with ad platforms." },
      ],
    },
    {
      heading: "How do you keep improving performance?",
      items: [
        { name: "Daily", detail: "Spend, pacing and delivery checks across every platform." },
        { name: "Weekly", detail: "Performance reviews against agreed thresholds to decide what to hold, scale or fix." },
        { name: "Monthly", detail: "Creative refreshes, keyword and ad-copy updates around live promotions, and budget reallocation." },
        { name: "Quarterly", detail: "Strategy reviews that recalibrate audiences, channels and targets." },
      ],
    },
  ],
  faqs: [
    {
      q: "How quickly can campaigns go live?",
      a: "Usually within 1–2 weeks of confirming the plan. Campaign structure takes 5–7 working days, tracking pixels 3–5 working days, and platform approvals 1–3 working days.",
    },
    {
      q: "How long before we see results?",
      a: "Quick wins from removing waste and fixing tracking usually show in the first few weeks. A full restructure takes around 90 days, and always-on campaigns typically reach full optimisation in 3–6 months.",
    },
    {
      q: "Do you guarantee results?",
      a: "No. Any agency that guarantees a cost per lead before seeing your data is guessing. We give directional ranges based on your history and the market, agree targets with you, and report honestly against them.",
    },
    {
      q: "Should we keep or switch off Performance Max?",
      a: "Usually neither extreme. Performance Max works best when it is capped, excludes your brand terms and has controlled placements, running alongside search campaigns that capture high-intent searches with more control and transparency.",
    },
    {
      q: "Who owns the ad accounts and data?",
      a: "We recommend that you own your ad accounts, Google Tag Manager container and analytics property, with CPXi added as an admin. That way your data and history stay with you whoever manages the campaigns.",
    },
    {
      q: "How do you charge?",
      a: "Media spend and our fee are shown separately. Our management fee is based on media spend and covers account setup, media planning, ongoing optimisation, reporting and consultation. An audit of existing accounts can be scoped before you commit.",
    },
    {
      q: "Can you run campaigns for financial services brands?",
      a: "Yes. We run campaigns for brokerages and other financial services brands in Singapore, and plan messaging and funnels around their regulatory requirements. All ad copy goes through the client's compliance review before launch.",
    },
  ],
  relatedCaseStudies: [
    "volvo-ex30-xc60-lead-generation",
    "bentley-singapore-linkedin-lead-gen",
    "uol-parktown-residence",
    "skechers-hotshot-2026",
    "luxury-retailer-ecommerce-roas",
    "daikin-singapore-always-on-search",
    "fmcg-retailer-ecommerce-growth",
    "tertiary-institution-student-recruitment",
  ],
  caseStudyServices: ["Performance Marketing", "Search", "Social Media"],
  published: "2026-10-22",
  updated: "2026-10-22",
};

export default page;
