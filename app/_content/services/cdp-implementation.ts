import type { ServicePage } from "../../_lib/services";

// Sourced from CPXi's martech intro decks (Unity360 framework, engagement
// model, CDP-vs-CRM explainer) and PDPA/GTM answers given to prospects.
const page: ServicePage = {
  slug: "cdp-implementation",
  practice: "Technology",
  service: "Marketing Technology",
  title: "Customer data platform (CDP) implementation in Singapore",
  metaTitle: "CDP Implementation in Singapore | CPXi Asia",
  metaDescription:
    "Choose, implement and activate a customer data platform (CDP) in Singapore: stack audit, a 60–90 day pilot, PDPA built in, and paid media connected.",
  definition:
    "CPXi Asia helps brands in Singapore choose, set up and use a customer data platform (CDP): one system that brings customer data from your website, app, stores and CRM into a single profile per customer, cleans it, and makes it usable for marketing. Because we also run paid media, we connect the CDP to your ads, email, push and WhatsApp, so the data drives campaigns rather than sitting in a dashboard.",
  fit: "We are a good fit if your customer data is spread across several systems and you want it working in your marketing within months, not through a multi-year IT programme. If you only email a small list, a good email tool may be all you need, and we will tell you so.",
  sections: [
    {
      heading: "What is a CDP, and how is it different from a CRM?",
      intro:
        "A CRM records what your known customers have done with you, usually in batches. A CDP builds a live profile for every visitor, including anonymous ones, by stitching together their visits, devices and sessions, and lets you act on it the moment something happens.",
      items: [
        { name: "Who it covers", detail: "CRM: known customers and members. CDP: every user, including anonymous visitors." },
        { name: "Timing", detail: "CRM: batch updates. CDP: real time, triggered by events such as a page view or an abandoned cart." },
        { name: "Channels", detail: "CRM: mostly email. CDP: email, push, SMS, WhatsApp, in-app messages, website personalisation and ad audiences." },
        { name: "Automation", detail: "CRM: limited. CDP: full journeys that react to behaviour across channels." },
      ],
      outro:
        "In practice: a CRM tells you a customer bought something. A CDP also knows she clicked your WhatsApp link on her phone and then bought on her laptop, so you can stop showing her \"Buy now\" ads on her phone the moment she checks out.",
    },
    {
      heading: "How does a CDP implementation with CPXi work?",
      intro:
        "We start small and prove value before scaling. A typical timeline looks like this, though every stack is different:",
      steps: [
        { name: "Discovery workshop (1 day)", detail: "We map your goals, pain points, customer journeys and the data you already collect." },
        { name: "Stack audit (2–3 weeks)", detail: "We review your current platforms, integrations, data quality and gaps, including what you can keep." },
        { name: "Recommendation and plan (about 2 weeks)", detail: "We score the platform options against your needs, design how the data will flow, and identify quick wins." },
        { name: "Data preparation", detail: "We map and clean your data so profiles are accurate from day one. This typically adds 20–30 days." },
        { name: "Pilot (60–90 days)", detail: "We connect the core data sources and launch one high-value use case, such as abandoned-cart recovery or win-back, measured against a control group." },
        { name: "Scale and automate", detail: "Once the pilot proves its value, we add data sources, journeys and channels, and review performance with you every quarter." },
      ],
      outro: "Most projects reach the scaling stage in around five months.",
    },
    {
      heading: "What does the CDP connect to?",
      intro:
        "We call our approach Unity360: it links your advertising and your customer data so each makes the other work harder.",
      items: [
        { name: "Unify", detail: "Bring app, website, point-of-sale, loyalty and CRM data into a single customer view through the CDP's connectors." },
        { name: "Analyse", detail: "Real-time dashboards, a segment builder and predictive scores such as churn risk and next best action." },
        { name: "Activate", detail: "Automated push, email, SMS, WhatsApp, in-app banners, website personalisation and retargeting." },
        { name: "Feed your media", detail: "First-party audiences improve lookalike targeting, speed up test-and-learn cycles and tie ad spend to revenue." },
      ],
    },
    {
      heading: "Which CDP should you choose?",
      intro:
        "It depends on how you sell, how mature your data is, and what you already run. We recommend based on your existing stack and score the options with you side by side. Most needs fall into one of three patterns:",
      items: [
        { name: "Retail and e-commerce", detail: "Catalogue integration, real-time checkout personalisation, and abandoned-cart and purchase triggers. Best for high-frequency purchases and growing order value and lifetime value." },
        { name: "Lead generation and nurturing", detail: "Lead segmentation, multi-step nurture journeys and form and ad integrations, with compliant data capture. Best for long sales cycles in education, healthcare, financial services and travel." },
        { name: "Enterprise identity resolution", detail: "Identity stitching across every touchpoint, real-time orchestration and flexible hosting (managed or private cloud). Best for large organisations managing data across markets." },
      ],
      outro:
        "Platforms we work with include Segment, Meiro, Customer.io and Klaviyo, and we integrate with marketing automation and CRM tools such as HubSpot and Microsoft Dynamics 365.",
    },
    {
      heading: "How do you keep customer data PDPA-compliant?",
      items: [
        { name: "Consent at the source", detail: "Consent is captured when customers sign up, in line with Singapore's PDPA, and stored on their profile." },
        { name: "Minimal data movement", detail: "Data stays in the platforms rather than being exported. When a transfer is unavoidable, files are encrypted and access is logged." },
        { name: "Minimisation and retention", detail: "We collect only what a use case needs and set retention rules from the start." },
        { name: "Regulated industries", detail: "For financial services, the pilot includes a MAS and PDPA compliance review before any message goes out." },
      ],
    },
    {
      heading: "What do you need from us to get started?",
      items: [
        { name: "Your goals", detail: "The outcomes that matter: more repeat purchases, more qualified leads, lower churn." },
        { name: "A list of your systems", detail: "Website, app, POS, CRM, email and ad platforms, plus who owns each." },
        { name: "Tag access", detail: "Publish access to your Google Tag Manager container, or your web team installs ours once. Marketer access to Google Analytics 4." },
        { name: "Ownership stays with you", detail: "We recommend you own the containers, accounts and data. We configure, test and publish only after you approve." },
      ],
    },
  ],
  faqs: [
    {
      q: "Do I need a CDP, or is a CRM enough?",
      a: "If you mainly email known customers on a schedule, a CRM or email tool may be enough. A CDP earns its keep when data sits in several systems, when most visitors are anonymous, or when you want to react in real time across channels such as push, WhatsApp, web and ads.",
    },
    {
      q: "How long does a CDP implementation take?",
      a: "A first use case is usually live within a 60–90 day pilot, after a one-day workshop, a 2–3 week stack audit and about 2 weeks of planning. Data cleaning can add 20–30 days. Most projects reach the scaling stage in around five months.",
    },
    {
      q: "Which CDP do you recommend?",
      a: "There is no single best CDP. We recommend based on your sales model, your data maturity and the tools you already use, and we score the options with you side by side. Platforms we work with include Segment, Meiro, Customer.io and Klaviyo.",
    },
    {
      q: "Can a CDP trigger marketing in real time?",
      a: "Yes. A CDP can trigger messages from behaviour as it happens, for example a reminder when someone adds to cart but has not bought within a set window. Rules can be controlled centrally, with local teams running the activation.",
    },
    {
      q: "Is a CDP compliant with Singapore's PDPA?",
      a: "A CDP can be run in line with the PDPA if consent, data minimisation and retention are designed in from the start. We capture consent at sign-up, keep data inside the platforms rather than exporting it, and add a MAS and PDPA review for financial services clients.",
    },
    {
      q: "Can you work with the platforms we already have?",
      a: "Yes. The stack audit starts from what you already run. Sometimes a lighter setup on top of your existing CRM and analytics is the right first step, rather than a full new platform.",
    },
    {
      q: "Do you also run the campaigns?",
      a: "Yes. CPXi Asia is also a performance marketing agency, so we can use the CDP's audiences in paid media across Google, Meta, TikTok and programmatic, and measure the results against revenue.",
    },
  ],
  relatedCaseStudies: ["sats-travel-app"],
  caseStudyServices: ["Marketing Technology"],
  published: "2026-10-22",
  updated: "2026-10-22",
};

export default page;
