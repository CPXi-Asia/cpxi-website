import type { ServicePage } from "../../_lib/services";

// Sourced from CPXi's Singapore media-solutions and introduction decks
// (formats, pDOOH inventory, programmatic-vs-direct comparison, timelines,
// reporting cadence). Audience+ is described in aggregated, anonymised terms
// only. Screen counts are omitted because inventory changes often.
const page: ServicePage = {
  slug: "programmatic-dooh-advertising",
  practice: "Growth",
  service: "Programmatic & DOOH",
  title: "Programmatic and DOOH advertising in Singapore",
  metaTitle: "Programmatic & DOOH Advertising in Singapore | CPXi Asia",
  metaDescription:
    "Programmatic display, video, audio and DOOH advertising in Singapore: Changi, Orchard, CBD, MRT and condo screens, bought and measured as one campaign.",
  definition:
    "CPXi Asia plans, buys and optimises programmatic advertising in Singapore: display, native, video, audio, connected TV and digital out-of-home (DOOH) screens, bought automatically by audience rather than reserved placement by placement. We run DOOH and online media together, so people who see your ads on a screen at Changi or in a condo lift can be reached again on their phones and measured through to store visits and sales.",
  fit: "We are a good fit if you want screens and online media working as one campaign, with the flexibility to change creative, schedule and screens mid-flight. If you need a guaranteed fixed share of a single landmark screen for months, a direct booking with the media owner may suit you better, and we can arrange that too.",
  sections: [
    {
      heading: "What is programmatic DOOH, and how is it different from buying screens directly?",
      intro:
        "Programmatic digital out-of-home (pDOOH) is the automated buying of digital billboards and screens by audience, location, time of day and conditions such as weather, instead of reserving fixed slots with each media owner.",
      items: [
        { name: "How you pay", detail: "Direct: a share of a screen's daily slots. Programmatic: per thousand impressions, for the audiences you choose." },
        { name: "Scheduling", detail: "Direct: fixed slots and zones. Programmatic: day-parting, weather triggers and screen-by-screen selection." },
        { name: "Creative changes", detail: "Direct: longer lead times to swap creative. Programmatic: creative can be changed at any time." },
        { name: "Optimisation", detail: "Direct: none once booked. Programmatic: delivery shifts toward the screens and times that perform." },
        { name: "Reach", detail: "Direct: one media owner per booking. Programmatic: one buy across many screen owners." },
        { name: "Commitment", detail: "Direct: minimum spends and long placements. Programmatic: more flexible budgets, well suited to short tactical bursts." },
      ],
      outro:
        "The trade-off: programmatic DOOH does not guarantee a fixed share of voice on one specific screen. Where that matters, we combine programmatic with direct bookings.",
    },
    {
      heading: "Where can your ads run in Singapore?",
      intro:
        "We are connected with most of Singapore's digital screen owners, covering inventory island-wide:",
      items: [
        { name: "Changi Airport", detail: "Departure and arrival networks across Terminals 1 to 4, baggage-claim screens, and Jewel's digital network and link bridges." },
        { name: "Malls and Orchard Road", detail: "ION Orchard, Raffles City, VivoCity, i12 Katong, Waterway Point and other mall networks and LED façades." },
        { name: "CBD and offices", detail: "Billboards around Raffles Place and Marina Bay, office-building lobby networks and co-working spaces." },
        { name: "Transit", detail: "MRT station and line networks, bus shelters and interchanges, and in-taxi and taxi-top screens." },
        { name: "Homes", detail: "Condominium lobby and lift screens and HDB lift-lobby networks, reaching residents where they live." },
        { name: "Online", detail: "Display, native, video and rich media across premium Singapore publishers, plus audio streaming, podcasts and connected TV." },
      ],
    },
    {
      heading: "Which formats do you run?",
      items: [
        { name: "Display and native", detail: "Standard banners and native ads that match the look of the publisher's content, with whitelists to keep you on relevant sites." },
        { name: "Rich media and high impact", detail: "Interactive formats such as 3D cubes, countdown timers, shoppable and gamified units, scratch-to-reveal, website takeovers and mobile interscrollers." },
        { name: "Video and connected TV", detail: "Online video and connected TV across Singapore streaming and smart-TV inventory." },
        { name: "Audio", detail: "Music and radio streaming, podcasts and in-game audio, with script-writing and production available." },
        { name: "Digital out-of-home", detail: "Static and video creative on airport, mall, transit, office and residential screens, including 3D-capable billboards." },
        { name: "Dynamic creative", detail: "Creative that changes by time of day, weather or audience, on screens and online." },
      ],
    },
    {
      heading: "How do you target and measure the campaign?",
      intro:
        "We buy through leading demand-side platforms, including Google Display & Video 360 and Yahoo DSP, and plan audiences using consumer research such as GWI.",
      items: [
        { name: "Audience targeting", detail: "Custom-intent and affinity audiences, contextual targeting, publisher whitelists and your own first-party data." },
        { name: "Audience+", detail: "Our audience-expansion tool builds aggregated, anonymised segments of people who visit relevant places, such as shopping districts or the CBD, so screen and online media reach the same audiences. Advertisers receive aggregated reports only." },
        { name: "Footfall measurement", detail: "We measure store-visit uplift among people exposed to your ads against a defined radius around your outlets, reported in aggregate." },
        { name: "DOOH reporting", detail: "Proof-of-display reports, the share of your target audience reached, and the lift in brand searches and site visits during the campaign." },
        { name: "Brand safety", detail: "Publisher whitelists and blocklists plus negative keywords, checked throughout the flight." },
        { name: "Dashboards and reports", detail: "A unified dashboard during the campaign, monthly reports within 5–7 working days of month end, and an end-of-campaign report within 7–10 working days." },
      ],
    },
    {
      heading: "How quickly can a campaign go live?",
      steps: [
        { name: "Plan and book", detail: "We recommend confirming plans early, especially for premium CBD and airport screens, which are subject to media-owner approval." },
        { name: "Set up (about 1–2 weeks)", detail: "Campaign structure takes 5–7 working days, tracking pixels 3–5 working days and platform approvals 1–3 working days. Programmatic DOOH typically needs about 10 working days from receiving assets." },
        { name: "Launch and optimise", detail: "We optimise from day one; always-on campaigns typically reach full optimisation in 3–6 months." },
      ],
    },
  ],
  faqs: [
    {
      q: "What is programmatic DOOH?",
      a: "Programmatic digital out-of-home is the automated buying of digital screens, such as airport, mall, transit and condo screens, by audience, location and time, rather than reserving fixed slots with each media owner. It lets you change creative and schedules mid-campaign and buy across many screen owners at once.",
    },
    {
      q: "Is programmatic DOOH better than buying billboards directly?",
      a: "It depends on the goal. Programmatic DOOH is more flexible: you pay for audience impressions, can day-part and weather-trigger, and can switch creative at any time. Direct bookings suit campaigns that need a guaranteed fixed share of one landmark screen. Many campaigns use both.",
    },
    {
      q: "Can you advertise at Changi Airport programmatically?",
      a: "Yes. We buy Changi Airport screens across Terminals 1 to 4, including departure, arrival and baggage-claim networks, and Jewel's digital network, by terminal or by departures and arrivals.",
    },
    {
      q: "How do you measure whether DOOH worked?",
      a: "Through proof-of-display reports, the share of your target audience reached, store-visit uplift among exposed audiences, and the lift in brand searches and website visits during the campaign. Online retargeting of screen-exposed audiences adds clicks and conversions you can measure directly.",
    },
    {
      q: "How far in advance should we book DOOH?",
      a: "Programmatic DOOH typically needs about 10 working days from receiving your creative assets. Premium CBD and airport screens are subject to media-owner approval, so we recommend confirming plans as early as possible.",
    },
    {
      q: "Which programmatic platforms do you use?",
      a: "We buy through leading demand-side platforms, including Google Display & Video 360 and Yahoo DSP, and choose the platform per campaign based on the inventory and audiences needed.",
    },
    {
      q: "Can you run programmatic and social media in the same campaign?",
      a: "Yes. CPXi Asia also runs Google, Meta and TikTok campaigns, so screen, programmatic and social media can be planned, optimised and reported together.",
    },
  ],
  relatedCaseStudies: [
    "tiger-brokers-2024-brand-campaign",
    "webull-2025-brand-campaign",
    "tiong-bahru-bakery-festive-2025",
    "property-developer-overseas-leads",
  ],
  caseStudyServices: ["Programmatic", "Digital Out-of-Home", "Out-of-Home"],
  published: "2026-10-22",
  updated: "2026-10-22",
};

export default page;
