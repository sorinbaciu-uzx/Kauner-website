import type { Metadata } from "next";
import { EquipmentCatalog } from "@/components/sections/EquipmentCatalog";

export const metadata: Metadata = {
  title: "Echipamente",
};

export default function EchipamentePage() {
  return <EquipmentCatalog />;
}
