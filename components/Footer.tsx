"use client";

import Link from "next/link";
import { LockupLight } from "@/components/ui/Logo";
import { LanguageSwitch } from "@/components/ui/LanguageSwitch";
import { useT } from "@/lib/i18n/LocaleProvider";

/** Footer — light (mist.100), top hairline. Bilingual. ISO·CE monochrome marks. */
export function Footer() {
  const t = useT();

  return (
    <footer className="border-t border-mist-200 bg-mist-100">
      <div className="container-kauner py-section-sm">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          {/* Brand */}
          <div className="max-w-xs">
            <LockupLight height={56} />
            <p className="mono-label mt-6 text-steel-500">{t.footer.tagline}</p>
          </div>

          {/* Equipment */}
          <nav aria-label={t.footer.colEquipment}>
            <h3 className="mono-label mb-5 text-steel-500">
              {t.footer.colEquipment}
            </h3>
            <ul className="space-y-3">
              {t.equipment.items.map((it) => (
                <li key={it.name}>
                  <Link
                    href="/echipamente"
                    className="text-sm text-steel-700 transition-colors hover:text-ink"
                  >
                    {it.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label={t.footer.colCompany}>
            <h3 className="mono-label mb-5 text-steel-500">
              {t.footer.colCompany}
            </h3>
            <ul className="space-y-3">
              {t.footer.company.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-steel-700 transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="mono-label mb-5 text-steel-500">
              {t.footer.colContact}
            </h3>
            <ul className="space-y-3 text-sm text-steel-700">
              <li>{t.footer.address}</li>
              <li>
                <a
                  href={`mailto:${t.contact.email}`}
                  className="transition-colors hover:text-ink"
                >
                  {t.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
                  className="font-mono transition-colors hover:text-ink"
                >
                  {t.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Cert marks — monochrome */}
        <div className="mt-16 flex flex-wrap items-center gap-3 border-t border-mist-200 pt-8">
          {t.footer.certs.split("·").map((c) => (
            <span
              key={c}
              className="rounded-sharp border border-mist-200 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-steel-500"
            >
              {c.trim()}
            </span>
          ))}
        </div>

        {/* Legal row */}
        <div className="mt-10 flex flex-col gap-4 border-t border-mist-200 pt-8 text-sm text-steel-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Kauner. {t.footer.rights}</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="#" className="transition-colors hover:text-ink">
              {t.footer.legal}
            </Link>
            <LanguageSwitch tone="ink" />
          </div>
        </div>
      </div>
    </footer>
  );
}
