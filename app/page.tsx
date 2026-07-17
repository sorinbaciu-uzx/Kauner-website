import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { BrandInBrief } from "@/components/sections/BrandInBrief";
import { WhatWeSolve } from "@/components/sections/WhatWeSolve";
import { Equipment } from "@/components/sections/Equipment";
import { Technology } from "@/components/sections/Technology";
import { Services } from "@/components/sections/Services";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";

// Home-page SEO (overrides the layout default; absolute title already carries
// the brand, so we skip the "%s — KAUNER" template).
export const metadata: Metadata = {
  title: {
    absolute: "Kauner — Debitare, îndoire și automatizare laser în România",
  },
  description:
    "Kauner integrează, instalează și susține în România sisteme laser de debitare tablă și țeavă, îndoire, sudură și automatizare — tehnologie Han's Laser, suport de ingineri cu 15+ ani experiență.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <BrandInBrief />
      <WhatWeSolve />
      <Equipment />
      <Technology />
      <Services />
      <Team />
      <Contact />
    </>
  );
}
