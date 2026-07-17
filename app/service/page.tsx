import type { Metadata } from "next";
import { Service } from "@/components/sections/Service";

export const metadata: Metadata = {
  title: "Service",
  description:
    "Service și mentenanță pentru echipamente de debitare laser: punere în funcțiune, instruire operatori, piese pe stoc și răspuns rapid, local în România.",
};

export default function ServicePage() {
  return (
    <div className="pt-[72px]">
      <Service />
    </div>
  );
}
