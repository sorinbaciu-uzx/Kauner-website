import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kauner: { blue: "#0D009F" },
        // §2.1 technology-page tokens (aligned to the existing brand kit).
        ink: { DEFAULT: "#0B0B0C", soft: "#26262B", 950: "#0B0B0C" },
        paper: { DEFAULT: "#FFFFFF", 2: "#F5F5F4" },
        line: { DEFAULT: "#E4E4E2", dark: "rgba(255,255,255,0.14)" },
        "blue-tint": "rgba(13,0,159,0.06)",
        black: "#000000",
        white: "#FFFFFF",
        blue: {
          900: "#06004A",
          700: "#0A0078",
          600: "#0D009F",
          500: "#1B0FD1",
          300: "#6B5CFF",
          100: "#ECEAFF",
        },
        graphite: { 900: "#121216" },
        steel: {
          800: "#1E1E24",
          700: "#2C2C34",
          500: "#5C5C66",
          400: "#8A8A94",
          300: "#B7B7C0",
        },
        mist: { 200: "#E7E7EC", 100: "#F3F3F6" },
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-archivo)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-spline-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: [
          "clamp(2.75rem, 6vw, 5.5rem)",
          { lineHeight: "1.0", letterSpacing: "-0.015em" },
        ],
        h1: [
          "clamp(2.125rem, 4vw, 3.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.015em" },
        ],
        h2: [
          "clamp(1.75rem, 3vw, 2.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.01em" },
        ],
        h3: ["clamp(1.375rem, 2vw, 1.75rem)", { lineHeight: "1.2" }],
        h4: ["1.25rem", { lineHeight: "1.3" }],
        "body-l": ["clamp(1.0625rem, 1.4vw, 1.1875rem)", { lineHeight: "1.6" }],
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.14em" }],
      },
      maxWidth: { content: "1320px" },
      spacing: {
        section: "140px",
        "section-sm": "80px",
        gutter: "7vw",
      },
      borderRadius: { sharp: "2px" },
      transitionTimingFunction: {
        "out-engineered": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "scroll-cue": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateY(10px)", opacity: "0" },
        },
      },
      animation: {
        "scroll-cue": "scroll-cue 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
