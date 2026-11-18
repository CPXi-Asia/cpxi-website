import type { ServicePage } from "../../_lib/services";

// Sourced from CPXi's GEO/AEO overview deck (2026), its SEO + GEO/AEO pitch
// proposals (scope, 12-month roadmap, reporting) and the October 2026 AI
// visibility test behind the "what AI assistants look at" insight. Pricing and
// client names are left out.
const page: ServicePage = {
  slug: "seo-ai-search-optimisation",
  practice: "Growth",
  service: "SEO & AI Search",
  title: "SEO and AI search optimisation (GEO) in Singapore",
  metaTitle: "SEO & AI Search Optimisation (GEO) in Singapore | CPXi Asia",
  metaDescription:
    "SEO and generative engine optimisation (GEO) in Singapore: be found in Google and named by ChatGPT, Gemini, Perplexity and Google's AI Overviews.",
  definition:
    "CPXi Asia improves how brands in Singapore are found in Google and named by AI assistants such as ChatGPT, Gemini, Perplexity and Google's AI Overviews. We deliver SEO and generative engine optimisation (GEO) as one service: technical fixes so search engines and AI crawlers can read your site, pages that answer your buyers' questions directly, and the reviews, listings and mentions on other sites that make engines trust your brand.",
  fit: "We are a good fit if you want search and AI assistants to bring in customers over the next 6–12 months, alongside or instead of paid search. If you need traffic next week, start with paid search: SEO and GEO compound over time, and nobody can guarantee a place in an AI answer.",
  sections: [
    {
      heading: "What is GEO, and how is it different from SEO?",
      intro:
        "GEO (generative engine optimisation), AEO (answer engine optimisation) and AIO (AI optimisation) all describe the same goal: getting a business shown or named in AI-generated answers. They are built on the same foundations as SEO, but a win looks different on each surface:",
      items: [
        { name: "SEO: Google and Bing results", detail: "Rank for the searches your buyers make, then earn the click." },
        { name: "AEO: answer boxes and voice", detail: "Be the answer that gets extracted into featured snippets, People Also Ask and voice results." },
        { name: "Google AI Overviews and AI Mode", detail: "Be one of the sources cited in the AI summary above the results." },
        { name: "GEO: ChatGPT, Perplexity, Gemini, Copilot, Claude", detail: "Be retrieved, named and recommended when someone asks an assistant for a business like yours." },
      ],
      outro:
        "Most of the work is shared: useful, specific content, a clear site structure and links from other sites help on every surface. What matters more in AI answers is your brand as an entity: how often other sources mention you, and whether they describe you consistently and positively. That is why we deliver SEO and GEO together rather than as separate services.",
    },
    {
      heading: "What do AI assistants look at when they recommend a business?",
      intro:
        "When we tested the questions Singapore buyers ask across ChatGPT, Perplexity, Gemini and Google AI Mode in October 2026, the businesses named most often had these in common:",
      items: [
        { name: "Reviews and ratings", detail: "For generic \"best in Singapore\" questions, answers closely followed Google Maps listings, with star ratings and review counts quoted in the answer." },
        { name: "Named proof", detail: "A single published Singapore case study naming the client, the platforms and the results was enough to win a specific enterprise question." },
        { name: "Directories and partner listings", detail: "For niche questions, assistants picked firms listed on the relevant vendor partner pages and industry directories." },
        { name: "Awards that match the question", detail: "Assistants cited awards to justify a pick, but only when the award category matched what was asked." },
        { name: "Consistent facts", detail: "Out-of-date directory profiles and old websites were quoted as fact, so founding year, location and services need to match everywhere." },
      ],
      outro:
        "We work on all five, not only on your website.",
    },
    {
      heading: "What does the work include?",
      intro: "A typical 12-month programme runs in four stages:",
      steps: [
        { name: "Month 1: audit and baseline", detail: "A full technical and content audit, keyword and intent mapping, a baseline of how AI assistants answer your buyers' questions today, and GA4 tracking for conversions and AI referral traffic." },
        { name: "Months 2–3: fix and optimise", detail: "Technical fixes (crawling, indexing, speed, redirects), on-page optimisation of priority pages, internal linking, structured data and your Google Business Profile." },
        { name: "Months 4–6: grow with content", detail: "Human-written content each month, answering the questions your buyers ask: service pages, guides, comparisons and FAQs written to be quoted." },
        { name: "Months 7–12: compound", detail: "Refresh pages that underperform, expand the topics that are working, earn mentions and listings on trusted sites, and review progress every quarter." },
      ],
    },
    {
      heading: "How do you make pages that AI assistants quote?",
      items: [
        { name: "Answer first", detail: "Each page opens with a direct answer, then the evidence, then the nuance only you can add." },
        { name: "Question-led headings", detail: "Headings phrased as the questions buyers type, so each section can be lifted out and quoted on its own." },
        { name: "Specific information", detail: "Real timelines, processes, numbers and examples that only your business has, rather than generic copy." },
        { name: "Structured data", detail: "Schema.org markup for your organisation, services, articles and FAQs, so engines know exactly what each page is about." },
        { name: "Readable by AI crawlers", detail: "Key content in the page's HTML rather than loaded by scripts, crawler access checked, and an llms.txt summary of the site." },
        { name: "Dated facts", detail: "Published and updated dates, and an \"as of\" date on key figures, because engines favour information they can tell is current." },
      ],
    },
    {
      heading: "How do you measure SEO and GEO?",
      items: [
        { name: "Rankings", detail: "Positions for your priority non-branded keywords, in a live tracker you can check at any time." },
        { name: "Organic traffic and conversions", detail: "Visits, enquiries, bookings and sales from organic search in Google Analytics 4, with branded and non-branded searches separated." },
        { name: "AI referral traffic", detail: "Visits and conversions arriving from ChatGPT, Perplexity, Gemini and Copilot." },
        { name: "AI answer checks", detail: "A fixed set of buyer questions asked to the main assistants every month, recording whether you are named and which sources they cite." },
        { name: "Monthly report", detail: "Delivered in the first week of each month, with what moved, why, and the priorities for the month ahead." },
      ],
      outro:
        "No tool can yet give a reliable \"ranking\" inside AI answers: answers change from one run to the next and by location. We treat AI checks as a sample and judge progress on the trend over several months, alongside traffic and enquiries. We run the same monthly check on our own website.",
    },
  ],
  faqs: [
    {
      q: "What is generative engine optimisation (GEO)?",
      a: "GEO is the work of getting a business retrieved and named in answers from AI assistants such as ChatGPT, Perplexity, Gemini, Copilot and Claude. It builds on SEO: clear, specific content, a site that AI crawlers can read, and consistent, positive mentions of the brand on other trusted sites.",
    },
    {
      q: "Is GEO different from SEO?",
      a: "Most of the work overlaps: content, site structure, technical health and links help in both. GEO puts more weight on how the brand is described across the web, such as reviews, directory listings, press and partner pages. CPXi Asia delivers SEO and GEO together as one service.",
    },
    {
      q: "Can you guarantee that ChatGPT will recommend us?",
      a: "No. Nobody can guarantee a place in an AI answer, just as nobody can guarantee a Google ranking. Assistants name businesses they see described consistently and credibly across many sources, which takes time to build. We report the trend each month, alongside traffic and enquiries.",
    },
    {
      q: "How long do SEO and GEO take to show results?",
      a: "Technical fixes and on-page changes can show movement within the first three months. Growth in non-branded visibility and AI mentions usually builds over six to twelve months, which is why we plan programmes over a year.",
    },
    {
      q: "How do you measure visibility in AI assistants?",
      a: "We track visits and conversions arriving from ChatGPT, Perplexity, Gemini and Copilot in Google Analytics 4, and every month we ask a fixed set of buyer questions to the main assistants, recording whether you are named and which sources are cited.",
    },
    {
      q: "Do you write the content?",
      a: "Yes. Our team writes the content, with a set volume each month, and your team reviews it for accuracy before it goes live. Content is human-written and built on information from your business, such as processes, prices and results.",
    },
    {
      q: "Does a Google Business Profile matter for AI search?",
      a: "Yes, for local and \"best in Singapore\" questions. In our tests, Google's AI answers and other assistants drew heavily on Google Maps listings, including star ratings and review counts. We optimise your profile and advise on a steady flow of genuine reviews.",
    },
  ],
  relatedCaseStudies: [],
  caseStudyServices: ["SEO"],
  published: "2026-11-05",
  updated: "2026-11-05",
};

export default page;
