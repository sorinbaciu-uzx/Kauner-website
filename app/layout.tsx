import type { Metadata, Viewport } from "next";
import { Archivo, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

// Archivo: one variable superfamily for display (wdth 125) + body (wdth 100).
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});

const splineMono = Spline_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-spline-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kauner.ro"),
  title: {
    default: "KAUNER — Engineered for Precision",
    template: "%s — KAUNER",
  },
  description:
    "Kauner integrează și susține în România sisteme de debitare, îndoire și automatizare laser — cu o echipă de ingineri cu peste 15 ani de experiență.",
  applicationName: "KAUNER",
  keywords: [
    "debitare laser",
    "fiber laser cutting",
    "abkant",
    "press brakes",
    "debitare țeavă",
    "tube laser",
    "sudură laser",
    "automatizare",
    "FMS",
  ],
  openGraph: {
    title: "KAUNER — Engineered for Precision",
    description:
      "Tehnologie laser de nivel mondial. Ridicată la standardul nostru. · World-class laser technology. Raised to our standard.",
    type: "website",
    locale: "ro_RO",
    alternateLocale: "en_US",
    images: [
      {
        url: "/images/hero-laser.jpg",
        width: 1200,
        height: 675,
        alt: "Debitare laser cu fibră — front de tăiere în oțel",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

// Default RO; LocaleProvider keeps <html lang> in sync after hydration.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${archivo.variable} ${splineMono.variable}`}>
      <body className="antialiased">
        <LocaleProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
