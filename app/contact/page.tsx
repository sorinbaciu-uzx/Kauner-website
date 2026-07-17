import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactează Kauner pentru o ofertă, o demonstrație sau o mostră de tăiere pe materialul tău — echipamente de debitare laser cu service în România.",
};

export default function ContactPage() {
  return (
    <div className="pt-[72px]">
      <Contact />
    </div>
  );
}
