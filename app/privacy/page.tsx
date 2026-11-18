import type { Metadata } from "next";
import Link from "next/link";
import { ADDRESS, CONTACT_EMAIL, SITE_NAME } from "../_lib/site";

// Plain-language notice under Singapore's PDPA, describing what this site
// actually does: the contact form emails enquiries (no database), Google Tag
// Manager loads analytics, Vercel hosts the site. Update it whenever the site
// starts collecting anything new.
const UPDATED = "30 October 2026";

export const metadata: Metadata = {
  title: `Privacy policy | ${SITE_NAME}`,
  description: `How ${SITE_NAME} collects, uses and protects personal data, in line with Singapore's Personal Data Protection Act (PDPA).`,
  alternates: { canonical: "/privacy" },
};

const SECTIONS: { heading: string; body: (string | { list: string[] })[] }[] = [
  {
    heading: "Who we are",
    body: [
      `This website is operated by CPXI Singapore Pte. Ltd. (UEN 201427473H), trading as ${SITE_NAME}, at ${ADDRESS}. In this policy, "we" and "us" mean ${SITE_NAME}.`,
      "We follow Singapore's Personal Data Protection Act 2012 (PDPA) in how we collect, use and disclose personal data.",
    ],
  },
  {
    heading: "What we collect",
    body: [
      "When you send us an enquiry through the contact form, we collect:",
      { list: ["your name", "your company", "your email address", "anything you write in your message"] },
      "When you browse the site, we use Google Tag Manager to load analytics tools, such as Google Analytics, that set cookies and collect information like the pages you visit, how you arrived, your approximate location, and your device and browser type. Our hosting provider also records standard technical logs, such as IP addresses, to keep the site secure and running.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      { list: [
        "to reply to your enquiry and follow up on it",
        "to understand how visitors use the site, so we can improve it",
        "to measure the results of our own marketing",
        "to keep the site secure",
      ] },
      "We do not sell your personal data.",
    ],
  },
  {
    heading: "Who we share it with",
    body: [
      "We share personal data only with service providers who help us run the site and respond to you, under appropriate safeguards: Google (email delivery and analytics) and Vercel (website hosting). Where it helps us answer your enquiry, we may share it with our colleagues in our Indonesia and Malaysia offices.",
      "Some of these providers may process data outside Singapore. Where that happens, we take steps to ensure your data receives a standard of protection comparable to the PDPA.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "Contact-form enquiries are delivered to our business email and kept for as long as we need them to respond to you and for our legitimate business or legal purposes. Analytics data is kept according to the retention settings of the analytics tools.",
    ],
  },
  {
    heading: "Cookies",
    body: [
      "You can block or delete cookies in your browser settings, and you can opt out of Google Analytics with Google's browser add-on. The site will still work if you do.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "You can ask to access or correct the personal data we hold about you, or withdraw your consent to our using it. Contact our Data Protection Officer and we will respond as soon as reasonably possible.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="px-6 pb-24 pt-14 sm:px-10 sm:pt-20 lg:px-16">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
          Privacy policy
        </h1>
        <p className="mt-4 text-sm text-muted">Last updated {UPDATED}</p>

        {SECTIONS.map((s) => (
          <section key={s.heading} className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">{s.heading}</h2>
            {s.body.map((b, i) =>
              typeof b === "string" ? (
                <p key={i} className="mt-4 leading-relaxed text-muted">
                  {b}
                </p>
              ) : (
                <ul key={i} className="mt-4 list-disc space-y-1 pl-6 leading-relaxed text-muted">
                  {b.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ),
            )}
          </section>
        ))}

        <section className="mt-12 rounded-xl border border-surface-border bg-surface p-6 sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-foreground">Contact our Data Protection Officer</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}?subject=Personal%20data%20request`} className="text-accent underline underline-offset-4 hover:text-accent-hover">
              {CONTACT_EMAIL}
            </a>{" "}
            with the subject &ldquo;Personal data request&rdquo;, or write to the Data Protection Officer,{" "}
            {SITE_NAME}, {ADDRESS}.
          </p>
        </section>

        <p className="mt-12 text-sm text-muted">
          We may update this policy from time to time; the date above shows when it last changed.{" "}
          <Link href="/" className="text-accent hover:text-accent-hover">Back to home</Link>
        </p>
      </article>
    </main>
  );
}
