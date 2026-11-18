import type { Insight } from "../../_lib/insights";

// Findings from CPXi's own October 2026 test of agency-buyer questions in
// ChatGPT, Perplexity, Gemini and Google AI Mode. Competitors are described,
// not named.
const insight: Insight = {
  slug: "how-ai-assistants-choose-businesses-to-recommend",
  title: "How do AI assistants decide which businesses to recommend?",
  metaTitle: "How AI Assistants Choose Which Businesses to Recommend | CPXi Asia",
  metaDescription:
    "We asked ChatGPT, Perplexity, Gemini and Google AI Mode the questions Singapore buyers ask. Five things decided which businesses were named.",
  answer:
    "AI assistants recommend businesses that other trusted sources already describe clearly and consistently. When we asked ChatGPT, Perplexity, Gemini and Google AI Mode the questions Singapore buyers ask about agencies, the firms named most often had five things in common: strong Google review profiles, published case studies with named clients and numbers, listings on partner and industry directories, awards that matched the question, and the same facts about themselves everywhere.",
  keyPoints: [
    "For generic \"best in Singapore\" questions, AI answers closely followed Google Maps listings, including star ratings and review counts.",
    "One published case study with a named client and hard numbers was enough to win a specific enterprise question.",
    "For niche questions, assistants picked firms listed on the relevant vendor partner pages.",
    "Out-of-date profiles and old websites were repeated as fact.",
  ],
  sections: [
    {
      heading: "How did we test it?",
      paragraphs: [
        "In October 2026, before rebuilding our own website, we tested how AI assistants answer questions about our own category: marketing agencies in Singapore. We asked three buyer questions to four assistants, ChatGPT, Perplexity, Gemini and Google AI Mode, with web search switched on, and ran the same questions as Google searches. We also asked each assistant about our own company.",
      ],
      items: [
        { name: "A generic question", detail: "Who are the best performance marketing agencies in Singapore?" },
        { name: "A specific enterprise question", detail: "Which agency in Singapore can handle both paid media and marketing technology, such as a CDP and marketing automation?" },
        { name: "A niche question", detail: "Who can implement a customer data platform such as Segment or Meiro in Singapore?" },
      ],
      after: [
        "That is 12 answers to the buyer questions. AI answers change from one run to the next and by location, so treat each one as a sample rather than a ranking. The patterns below held across assistants.",
      ],
    },
    {
      heading: "Do Google reviews affect AI recommendations?",
      paragraphs: [
        "Yes, for generic questions. Asked for the best performance marketing agencies in Singapore, Gemini and Google AI Mode largely reproduced the Google Maps listings, showing each agency's address, star rating and number of reviews. ChatGPT quoted the same ratings.",
        "The one agency named by all four assistants had more than 300 Google reviews. A firm with no reviews had almost no chance on this kind of question, however good its website.",
      ],
    },
    {
      heading: "Can one case study make a difference?",
      paragraphs: [
        "On a specific question, yes. For the enterprise question about paid media plus marketing technology, two of the four assistants named the same global agency first. Both drew on a single published Singapore case study that named the client, the platforms used and the percentage improvement in results.",
        "Specific, attributable proof beats general claims. A case study saying \"a leading insurer\" gives an assistant much less to work with than one naming the client, the market, the tools and the numbers.",
      ],
    },
    {
      heading: "Why do partner directories matter for niche questions?",
      paragraphs: [
        "For the question about implementing a customer data platform, two of the four assistants named agencies that appear on a CDP vendor's partner page. A third put first a firm whose own website lists the CDPs it works with. The fourth gave general advice without naming anyone.",
        "For niche, technical questions, assistants look for third-party confirmation that a business really does the thing asked about. Vendor partner pages, certification directories and industry listings provide it.",
      ],
    },
    {
      heading: "Do awards help?",
      paragraphs: [
        "Only when the award matches the question. One assistant justified recommending an agency for a performance marketing question by citing its performance marketing award. Awards in unrelated categories were not used as evidence for that question.",
      ],
    },
    {
      heading: "What happens when your information is out of date?",
      paragraphs: [
        "It gets repeated. When we asked about our own company, two assistants quoted an incorrect founding year, taken from our LinkedIn page and our previous website. One used that previous website, still online at the time, as its main source, including case studies we no longer featured. We have since retired it.",
        "AI assistants cross-check sources. When your website, LinkedIn page, directory profiles and Google Business Profile disagree, an assistant may pick the wrong version or treat the business as less certain.",
      ],
    },
    {
      heading: "What ranked in Google for the same questions?",
      paragraphs: [
        "In Google search, the pages that ranked for Singapore agency searches were dedicated service pages, \"best agencies in Singapore\" lists published by third parties, agency directories and trade press. Single-page websites did not appear. Google's AI Overviews draw on the pages that rank below them, so this matters for AI answers too.",
      ],
    },
    {
      heading: "What should a business do about it?",
      items: [
        { name: "1. Build genuine reviews", detail: "Set up and verify your Google Business Profile and ask satisfied clients for reviews, steadily rather than all at once." },
        { name: "2. Publish named proof", detail: "Case studies with the client's permission to be named, the platforms used and specific results." },
        { name: "3. Get listed where buyers check", detail: "Vendor partner directories, certification listings and the industry directories that already rank for your category." },
        { name: "4. Make your facts consistent", detail: "Founding year, location, services and contact details identical on your site, LinkedIn, directories and Google profile. Retire or redirect old sites." },
        { name: "5. Answer questions on your own site", detail: "A page per service, with the answer first and question-led headings, plus FAQs and dated facts." },
        { name: "6. Measure monthly", detail: "Ask the same set of buyer questions every month and track whether you are named and which sources are cited." },
      ],
    },
    {
      heading: "What can't this test tell you?",
      paragraphs: [
        "It is a small sample in one category. Answers vary from run to run, by location and as the assistants change their models and search tools. The test was run from outside Singapore, so a buyer in Singapore may see different answers. The patterns are useful as a guide to where to invest, not as a formula.",
      ],
    },
  ],
  faqs: [
    {
      q: "How does ChatGPT decide which businesses to recommend?",
      a: "When it searches the web, ChatGPT recommends businesses that several trusted sources describe consistently: review platforms such as Google Maps, third-party \"best of\" lists, directories, case studies and the business's own site. In our tests, review counts, named case studies and partner listings made the biggest difference.",
    },
    {
      q: "Do Google reviews affect ChatGPT and Gemini recommendations?",
      a: "Yes, especially for generic \"best in Singapore\" questions. In our October 2026 test, Gemini and Google AI Mode largely reproduced Google Maps listings with star ratings and review counts, and ChatGPT quoted the same ratings.",
    },
    {
      q: "How long does it take for AI assistants to start mentioning a business?",
      a: "Usually months rather than weeks. Assistants rely on what is already published about a business across many sites, so reviews, listings, case studies and press need time to build up and be picked up by search indexes.",
    },
    {
      q: "Is optimising for AI assistants different from SEO?",
      a: "Most of the work overlaps, because AI assistants often search the web and Google's AI Overviews draw on ranking pages. AI answers put extra weight on how consistently and positively other sites describe your business.",
    },
  ],
  relatedServices: ["seo-ai-search-optimisation"],
  published: "2026-11-05",
  updated: "2026-11-05",
};

export default insight;
