import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";
import radix from "tailwindcss-radix";
import { fontFamily } from "tailwindcss/defaultTheme";
import type { PresetsConfig } from "tailwindcss/types/config";

// Type annotation with `PresetsConfig` type is necessary, so that TypeScript
// doesn't complain about the Tailwind CSS plugins' external dependencies' types
// (e.g. tailwindcss-animate).
const uiConfig: PresetsConfig = {
  content: ["./components/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["selector", "[data-theme='dark']"],
  theme: {
    container: ({ theme }) => ({
      center: true,
      padding: theme("spacing.4") as string, // 1rem (16px)
    }),
    extend: {
      animation: {
        "accordion-down": "accordion-down 200ms ease-out",
        "accordion-up": "accordion-up 200ms ease-out",
      },
      borderColor: {
        DEFAULT: "hsl(var(--border))",
      },
      colors: ({ colors }) => ({
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
      }),
      fontFamily: {
        sans: ["var(--font-lexend)", ...fontFamily.sans],
      },
    },
  },
  plugins: [animate, radix({ variantPrefix: "radix" }), typography],
};

export default uiConfig;
