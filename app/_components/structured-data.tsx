import { GROWTH, TECHNOLOGY } from "./services";
import {
  CONTACT_EMAIL,
  DESCRIPTION,
  FOUNDING_YEAR,
  LINKEDIN_URL,
  POSTAL_CODE,
  SITE_NAME,
  SITE_URL,
  STREET_ADDRESS,
} from "../_lib/site";

// schema.org Organization + WebSite. Google uses this for the knowledge panel;
// AI engines use it as the machine-readable "who is this company" record.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: "CPXI Singapore Pte. Ltd.",
      url: SITE_URL,
      logo: `${SITE_URL}/apple-touch-icon.png`,
      description: DESCRIPTION,
      email: CONTACT_EMAIL,
      foundingDate: String(FOUNDING_YEAR),
      address: {
        "@type": "PostalAddress",
        streetAddress: STREET_ADDRESS,
        postalCode: POSTAL_CODE,
        addressLocality: "Singapore",
        addressCountry: "SG",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: CONTACT_EMAIL,
        areaServed: ["SG", "ID", "MY"],
        availableLanguage: ["en"],
      },
      sameAs: [LINKEDIN_URL],
      areaServed: ["Singapore", "Indonesia", "Malaysia", "Asia"],
      knowsAbout: [...GROWTH, ...TECHNOLOGY],
      award:
        "Market Research Agency of the Year (Bronze), Marketing-Interactive Agency of the Year Awards 2025, Singapore",
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", name: "Google Partner" },
        { "@type": "EducationalOccupationalCredential", name: "Meta Business Partner" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
