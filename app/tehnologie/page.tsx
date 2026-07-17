import type { Metadata } from "next";
import { TechnologyPage } from "@/components/sections/TechnologyPage";

// §5B.3 — meta optimizat pentru „debitare laser cu fibră".
export const metadata: Metadata = {
  title: { absolute: "Tehnologie debitare laser cu fibră | Kauner" },
  description:
    "Debitare laser cu fibră pe echipamente Han's Laser: sursă, cap de tăiere și CNC de la același producător. Precizie, fiabilitate și service în România.",
  alternates: { canonical: "/tehnologie" },
};

export default function TehnologiePage() {
  return (
    <div className="pt-[72px]">
      <TechnologyPage />
    </div>
  );
}
