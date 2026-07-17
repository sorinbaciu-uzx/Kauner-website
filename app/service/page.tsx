import type { Metadata } from "next";
import { Service } from "@/components/sections/Service";

export const metadata: Metadata = {
  title: "Service",
};

export default function ServicePage() {
  return (
    <div className="pt-[72px]">
      <Service />
    </div>
  );
}
