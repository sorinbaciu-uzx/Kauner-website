import type { Metadata } from "next";
import { Technology } from "@/components/sections/Technology";

export const metadata: Metadata = {
  title: "Tehnologie",
};

export default function TehnologiePage() {
  return (
    <div className="pt-[72px]">
      <Technology />
    </div>
  );
}
