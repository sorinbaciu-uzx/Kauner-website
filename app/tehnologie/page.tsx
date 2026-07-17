import type { Metadata } from "next";
import { Technology } from "@/components/sections/Technology";

export const metadata: Metadata = {
  title: "Tehnologie",
  description:
    "Tehnologie laser cu fibră integrată vertical: sursă laser de mare putere, cap de tăiere auto-focus, sistem CNC și automatizare FMS — dezvoltate in-house și integrate de Kauner în România.",
};

export default function TehnologiePage() {
  return (
    <div className="pt-[72px]">
      <Technology variant="full" />
    </div>
  );
}
