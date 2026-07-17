import type { Metadata } from "next";
import { Team } from "@/components/sections/Team";

export const metadata: Metadata = {
  title: "Echipă",
};

export default function EchipaPage() {
  return (
    <div className="pt-[72px]">
      <Team />
    </div>
  );
}
