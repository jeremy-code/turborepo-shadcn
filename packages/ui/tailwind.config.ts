import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";
import colors from "tailwindcss/colors";
import { fontFamily } from "tailwindcss/defaultTheme";
import type { PresetsConfig } from "tailwindcss/types/config";

// Type annotation with `PresetsConfig` type is necessary, so that TypeScript
// doesn't complain about the Tailwind plugins external dependencies' types
// (e.g. tailwindcss-animate).
const uiConfig: PresetsConfig = {
  content: ["./**/*.{js,jsx,ts,tsx}"],
  darkMode: ["selector", "[data-theme='dark']"],
  theme: {
    container: {
      center: true,
      padding: "1rem", // sizes.4 (16px)
    },
    extend: {
      borderColor: {
        DEFAULT: "hsl(var(--border))",
      },
      colors: {
        gray: colors.zinc,
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-lexend)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate, typography],
};

export default uiConfig;