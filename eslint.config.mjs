import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

// Flat config (ESLint 9) — `next lint` a fost eliminat în Next 16;
// scriptul `npm run lint` rulează ESLint direct cu configul oficial Next.
export default defineConfig([
  ...nextVitals,
  globalIgnores([".next/**", "node_modules/**", "out/**"]),
  {
    rules: {
      // Site-ul folosește deliberat setState-în-effect pentru sincronizarea
      // SSR-safe la mount (localStorage/locale, matchMedia, scroll state) —
      // randare inițială identică cu serverul, apoi un singur re-render pe
      // client. Tiparul e corect pentru hidratare; păstrăm regula ca warning
      // ca să prindă cazurile NOI, fără să pice lint-ul pe cele intenționate.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
]);
