import { fontFamily } from "tailwindcss/defaultTheme";
import type {
  PresetsConfig,
  ResolvableTo,
  ThemeConfig,
} from "tailwindcss/types/config";
import animate from "tailwindcss-animate";
import radix from "tailwindcss-radix";

type ResolvedType<T> = T extends ResolvableTo<infer R> ? R : never;

// Without `PresetsConfig` type annotation, TypeScript errors for plugins'
// types: "The inferred type of 'default' cannot be named without a reference to
// '*'. This is likely not portable. A type annotation is necessary"
const uiConfig: PresetsConfig = {
  content: ["./components/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["selector", "[data-theme='dark']"],
  theme: {
    // eslint-disable-next-line @typescript-eslint/unbound-method -- theme() is an external Tailwind CSS type
    container: ({ theme }) => ({
      center: true,
      padding: theme("spacing.4", "1rem") as ResolvedType<
        ThemeConfig["spacing"]
      >[string], // 1rem (16px)
    }),
    extend: {
      animation: {
        "accordion-down": "accordion-down 200ms ease-out",
        "accordion-up": "accordion-up 200ms ease-out",
      },
      borderColor: { DEFAULT: "hsl(var(--border))" },
      colors: ({ colors }) => ({
        gray: colors.zinc,
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        ...[
          "primary",
          "secondary",
          "destructive",
          "muted",
          "accent",
          "popover",
          "card",
        ].reduce(
          (acc, key) => ({
            ...acc,
            [key]: {
              DEFAULT: `hsl(var(--${key}))`,
              foreground: `hsl(var(--${key}-foreground))`,
            },
          }),
          {},
        ),
      }),
      fontFamily: {
        sans: ["var(--font-lexend)", ...fontFamily.sans],
      },
      ringColor: { DEFAULT: "hsl(var(--ring))" },
      ringOffsetColor: { DEFAULT: "hsl(var(--background))" },
      ringOpacity: { DEFAULT: "1" },
      transitionProperty: {
        size: "width, height",
      },
    },
  },
  plugins: [animate, radix({ variantPrefix: "radix" })],
};

export default uiConfig;
