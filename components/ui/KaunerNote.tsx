import type { ReactNode } from "react";

/**
 * "Pentru tine, prin Kauner" — the recurring per-pillar micro-conclusion
 * (§4.4–4.9) that lands each technical block back on the Kauner voice. A single
 * blue accent line (within the §2.1 budget) + the promise text.
 */
export function KaunerNote({ children }: { children: ReactNode }) {
  return (
    <div className="mt-12 max-w-[76ch] border-l-2 border-blue-600 pl-6">
      <p className="mono-label text-blue-600">Pentru tine, prin Kauner</p>
      <p className="mt-2 text-body-l text-ink-soft">{children}</p>
    </div>
  );
}
