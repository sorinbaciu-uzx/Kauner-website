import type { Metadata } from "next";
import { Team } from "@/components/sections/Team";

export const metadata: Metadata = {
  title: "Echipă",
  description:
    "Echipa Kauner: ingineri cu peste 15 ani de experiență în industrie — consultanță de proces, integrare și service pentru sisteme de debitare laser.",
};

export default function EchipaPage() {
  return (
    <div className="pt-[72px]">
      <Team />
    </div>
  );
}
