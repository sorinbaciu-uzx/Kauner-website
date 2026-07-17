import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ModelDetail } from "@/components/sections/ModelDetail";
import { ALL_MODEL_SLUGS, ro } from "@/lib/i18n/dictionaries";

type Params = { model: string };

/** Pre-render a page for every model at build time. */
export function generateStaticParams(): Params[] {
  return ALL_MODEL_SLUGS.map((model) => ({ model }));
}

// Resolve the RO display name for a slug (metadata renders server-side, so it
// uses the default locale).
function findModel(slug: string) {
  for (const cat of ro.equipment.items) {
    const model = cat.models.find((m) => m.slug === slug);
    if (model) return { cat, model };
  }
  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { model } = await params;
  const found = findModel(model);
  if (!found) return { title: "Echipamente" };
  return {
    title: found.model.name,
    description: `${found.model.name} — ${found.cat.name}. ${found.cat.desc}`,
  };
}

export default async function ModelPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { model } = await params;
  if (!ALL_MODEL_SLUGS.includes(model)) notFound();
  return <ModelDetail slug={model} />;
}
