import type { Metadata } from "next";
import { TechnologyPage } from "@/components/sections/TechnologyPage";
import { TECH_FAQ } from "@/lib/tech-faq";

const SITE = "https://kauner.ro";

// §5B.3 — meta optimizat pentru „debitare laser cu fibră".
export const metadata: Metadata = {
  title: { absolute: "Tehnologie debitare laser cu fibră | Kauner" },
  description:
    "Debitare laser cu fibră pe echipamente Han's Laser: sursă, cap de tăiere și CNC de la același producător. Precizie, fiabilitate și service în România.",
  // NB: EN este comutare client-side (LocaleProvider), nu rută separată —
  // deci fără hreflang en-US până nu există /en/* real (ar arăta spre 404).
  alternates: { canonical: "/tehnologie" },
};

// §5B.6 — structured data: Organization + WebPage + BreadcrumbList + FAQPage.
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kauner",
    url: SITE,
    logo: `${SITE}/brand/logo_K.svg`,
    areaServed: "RO",
    description:
      "Kauner integrează și susține în România sisteme de debitare laser cu fibră pe tehnologie Han's Laser — cu o echipă de ingineri cu peste 15 ani de experiență.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Tehnologie debitare laser cu fibră",
    url: `${SITE}/tehnologie`,
    inLanguage: "ro-RO",
    description:
      "Debitare laser cu fibră pe echipamente Han's Laser: sursă, cap de tăiere și CNC de la același producător. Precizie, fiabilitate și service în România.",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: SITE },
      { "@type": "ListItem", position: 2, name: "Tehnologie", item: `${SITE}/tehnologie` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: TECH_FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function TehnologiePage() {
  return (
    <div className="pt-[72px]">
      <script
        type="application/ld+json"
        // Escape "<" so future copy edits can never break out of the tag.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <TechnologyPage />
    </div>
  );
}
