import type { Insight } from "../../_lib/insights";

// Drawn from CPXi's martech intro decks (CDP-vs-CRM explainer, Unity360,
// engagement model) and PDPA answers given to prospects; the same source as
// the CDP implementation service page.
const insight: Insight = {
  slug: "cdp-vs-crm",
  title: "CDP vs CRM: which does a Singapore brand need?",
  metaTitle: "CDP vs CRM: Which Does a Singapore Brand Need? | CPXi Asia",
  metaDescription:
    "The difference between a customer data platform (CDP) and a CRM, when a CRM is enough, when you need a CDP, and how to run either under Singapore's PDPA.",
  answer:
    "A CRM records what your known customers have done with you, usually updated in batches, and is often enough if you mainly email a known list. A customer data platform (CDP) builds a live profile for every visitor, including anonymous ones, across your website, app, stores and ads, and acts on it in real time. Brands with customer data in several systems usually need both: the CRM stays the record of customers and sales, and the CDP powers marketing.",
  keyPoints: [
    "A CRM covers known customers; a CDP also covers anonymous visitors.",
    "A CRM updates in batches and mostly drives email; a CDP reacts in real time across email, push, SMS, WhatsApp, web and ads.",
    "A CDP rarely replaces a CRM. It sits alongside it and feeds marketing.",
    "Either can be run in line with Singapore's PDPA if consent, minimisation and retention are designed in from the start.",
  ],
  sections: [
    {
      heading: "What is the difference between a CDP and a CRM?",
      paragraphs: [
        "Both hold customer data, but they are built for different jobs. A CRM is a system of record for relationships: contacts, purchases, sales activity and service history, mostly for people who have already identified themselves. A CDP is built for marketing: it collects behaviour from every channel as it happens, stitches devices and sessions into one profile per person, and sends audiences and triggers to the tools that reach them.",
      ],
      table: {
        columns: ["", "CRM", "CDP"],
        rows: [
          ["Who it covers", "Known customers, leads and members", "Every visitor, including anonymous ones"],
          ["Where data comes from", "Sales, service and sign-up forms, often entered or imported", "Website, app, stores, loyalty, CRM and ad platforms, collected automatically"],
          ["How fresh it is", "Batch updates", "Real time, triggered by events such as a page view or an abandoned cart"],
          ["Channels it drives", "Mostly email and sales follow-up", "Email, push, SMS, WhatsApp, in-app messages, website personalisation and ad audiences"],
          ["Automation", "Limited", "Journeys that react to behaviour across channels"],
          ["Typical owner", "Sales and customer service", "Marketing, with data and IT"],
        ],
      },
      after: [
        "In practice: a CRM tells you a customer bought something. A CDP also knows she clicked your WhatsApp link on her phone and then bought on her laptop, so you can stop showing her \"Buy now\" ads the moment she checks out.",
      ],
    },
    {
      heading: "When is a CRM enough?",
      items: [
        { name: "You mainly email a known list", detail: "Newsletters and scheduled campaigns to customers who have already signed up." },
        { name: "Your data lives in one or two systems", detail: "For example, an online store and an email tool that already share data." },
        { name: "Most sales happen through people", detail: "B2B and high-value sales where account managers drive follow-up, and the CRM is where they work." },
        { name: "You don't need real-time triggers", detail: "Daily or weekly updates are fast enough for how you communicate." },
      ],
      after: [
        "If this describes you, a well-configured CRM or email platform is the better investment. A CDP adds cost and setup work that won't pay back.",
      ],
    },
    {
      heading: "When do you need a CDP?",
      items: [
        { name: "Data is spread across several systems", detail: "Website, app, point of sale, loyalty and CRM each hold part of the picture, and nobody sees one view of the customer." },
        { name: "Most of your visitors are anonymous", detail: "People browse on several devices before signing in or buying, and you lose them in between." },
        { name: "You want to react in the moment", detail: "Abandoned-cart reminders, win-back messages or offers triggered by what someone just did." },
        { name: "You market on many channels", detail: "Push, SMS, WhatsApp, in-app, web and paid media, and you want them coordinated rather than run separately." },
        { name: "You want better ad audiences", detail: "First-party audiences and lookalikes for Google, Meta and TikTok, and suppression of people who have already bought." },
      ],
    },
    {
      heading: "Can a CDP replace a CRM?",
      paragraphs: [
        "Usually not, and it doesn't need to. The CRM remains the record your sales and service teams work from. The CDP takes data from the CRM and every other source, builds the unified profile, and passes audiences and events back to the CRM and to your marketing tools. Some smaller businesses use the marketing-automation features of a CRM as a lightweight CDP, which can be the right first step before investing in a full platform.",
      ],
    },
    {
      heading: "How do you keep a CDP or CRM compliant with Singapore's PDPA?",
      paragraphs: [
        "Singapore's Personal Data Protection Act (PDPA) applies to both. Compliance comes from how the system is set up and run, not from the type of software.",
      ],
      items: [
        { name: "Consent at the source", detail: "Capture consent when customers sign up, and store it on their profile so every channel can respect it." },
        { name: "Collect only what you use", detail: "Each use case should justify the data it needs. Set retention rules from the start." },
        { name: "Keep data in the platforms", detail: "Avoid exporting files between systems. When a transfer is unavoidable, encrypt it and log access." },
        { name: "Extra checks in regulated industries", detail: "Financial services brands should review campaigns against MAS requirements as well as the PDPA before messages go out." },
      ],
    },
    {
      heading: "How long does a CDP take to set up?",
      paragraphs: [
        "A first use case is usually live within a 60–90 day pilot. Before that comes a short discovery workshop, a stack audit of two to three weeks and about two weeks of planning. Cleaning and mapping existing data can add 20–30 days. Most projects reach the stage of adding more data sources and channels in around five months.",
      ],
    },
    {
      heading: "How should you decide?",
      paragraphs: ["Five questions settle most cases:"],
      items: [
        { name: "1. How many systems hold customer data?", detail: "One or two points to a CRM; several points to a CDP." },
        { name: "2. What share of visitors are anonymous?", detail: "A high share is where a CDP's identity stitching earns its keep." },
        { name: "3. How fast do you need to react?", detail: "If minutes matter, you need real-time triggers." },
        { name: "4. How many channels do you run?", detail: "The more channels, the more value in one profile driving all of them." },
        { name: "5. Who will run it?", detail: "A CDP needs an owner in marketing and support from data or IT. Without one, start smaller." },
      ],
      after: [
        "If the answers are mixed, start with a stack audit: map what you already run and what you can keep, then pilot one high-value use case before committing to a platform.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is the main difference between a CDP and a CRM?",
      a: "A CRM manages relationships with known customers and is usually updated in batches. A CDP builds a real-time profile of every visitor, including anonymous ones, from all your channels, and sends audiences and triggers to your marketing and advertising tools.",
    },
    {
      q: "Do I need both a CDP and a CRM?",
      a: "Brands with customer data in several systems usually do. The CRM stays the record for sales and service, and the CDP unifies data from it and every other source to power marketing. If you mainly email a known list from one or two systems, a CRM alone is often enough.",
    },
    {
      q: "Is HubSpot or Salesforce a CDP?",
      a: "They are primarily CRMs, though both offer marketing-automation and data features that can cover some CDP jobs. Whether that is enough depends on how many data sources you need to unify, how many visitors are anonymous and how quickly you need to react.",
    },
    {
      q: "Which CDPs are used in Singapore?",
      a: "Brands in Singapore use platforms such as Segment, Meiro, Customer.io and Klaviyo, among others. The right choice depends on your sales model, data maturity and the tools you already run, so options are best scored side by side against your needs.",
    },
    {
      q: "Is a CDP PDPA-compliant?",
      a: "A CDP can be run in line with Singapore's PDPA if consent is captured at sign-up and stored on the profile, data collection is limited to what each use case needs, retention rules are set, and data stays inside the platforms rather than being exported.",
    },
  ],
  relatedServices: ["cdp-implementation"],
  relatedCaseStudies: ["sats-travel-app"],
  sources: [
    {
      name: "Personal Data Protection Commission Singapore: PDPA overview",
      url: "https://www.pdpc.gov.sg/about/the-legislation/pdpa-overview",
    },
  ],
  published: "2026-11-05",
  updated: "2026-11-05",
};

export default insight;
