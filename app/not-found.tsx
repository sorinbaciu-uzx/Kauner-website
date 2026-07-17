import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Pagină negăsită",
};

/** Branded 404 — light-first, same grid/typography as the rest of the site. */
export default function NotFound() {
  return (
    <div className="pt-[72px]">
      <section className="section bg-white">
        <div className="container-kauner">
          <p className="mono-label text-steel-500">— 404</p>
          <h1 className="mt-6 max-w-[20ch] font-display text-h1 text-ink">
            Pagina nu există.
          </h1>
          <p className="mt-5 max-w-[56ch] text-body-l text-steel-700">
            Linkul e greșit sau pagina a fost mutată. Încearcă din echipamente
            sau întoarce-te acasă.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/" variant="primary" withChevron>
              Înapoi acasă
            </Button>
            <Button href="/echipamente" variant="ghost-dark">
              Vezi echipamentele
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
