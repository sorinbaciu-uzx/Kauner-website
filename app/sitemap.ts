import type { MetadataRoute } from "next";
import { ALL_MODEL_SLUGS } from "@/lib/i18n/dictionaries";

const SITE = "https://kauner.ro";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, priority: 1 },
    { url: `${SITE}/echipamente`, priority: 0.9 },
    { url: `${SITE}/tehnologie`, priority: 0.9 },
    { url: `${SITE}/service`, priority: 0.6 },
    { url: `${SITE}/echipa`, priority: 0.6 },
    { url: `${SITE}/contact`, priority: 0.8 },
  ];

  const modelRoutes: MetadataRoute.Sitemap = ALL_MODEL_SLUGS.map((slug) => ({
    url: `${SITE}/echipamente/${slug}`,
    priority: 0.7,
  }));

  return [...staticRoutes, ...modelRoutes];
}
