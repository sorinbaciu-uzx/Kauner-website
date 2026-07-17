import { Hero } from "@/components/sections/Hero";
import { BrandInBrief } from "@/components/sections/BrandInBrief";
import { WhatWeSolve } from "@/components/sections/WhatWeSolve";
import { Equipment } from "@/components/sections/Equipment";
import { Technology } from "@/components/sections/Technology";
import { Services } from "@/components/sections/Services";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";

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
