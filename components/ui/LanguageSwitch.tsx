"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { Locale } from "@/lib/i18n/dictionaries";

const ORDER: Locale[] = ["ro", "en"];

type Props = {
  /** Tone adapts to the surface: ink links on white, white links over photos. */
  tone?: "ink" | "white";
  className?: string;
};

/**
 * RO / EN toggle. The active locale is solid; the inactive is muted and acts as
 * the switch target. Mono, uppercase — reads as a spec label, not a button.
 */
export function LanguageSwitch({ tone = "ink", className = "" }: Props) {
  const { locale, setLocale } = useLocale();

  const active = tone === "white" ? "text-white" : "text-ink";
  const idle =
    tone === "white"
      ? "text-white/55 hover:text-white"
      : "text-steel-400 hover:text-ink";
  const divider = tone === "white" ? "bg-white/30" : "bg-mist-200";

  return (
    <div
      className={`mono-label flex items-center gap-2 ${className}`}
      role="group"
      aria-label="Language"
    >
      {ORDER.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 && <span className={`h-3 w-px ${divider}`} aria-hidden />}
          <button
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={locale === l}
            className={`transition-colors duration-300 ${
              locale === l ? active : idle
            }`}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
