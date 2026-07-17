import type { Metadata } from "next";
import { Equipment } from "@/components/sections/Equipment";

export const metadata: Metadata = {
  title: "Echipamente",
};

export default function EchipamentePage() {
  return (
    <div className="pt-[72px]">
      <Equipment />
    </div>
  );
}
