import { dirname, join } from "node:path";

import type { Config } from "tailwindcss";
import ui from "@repo/ui/tailwind.config";

export default {
  presets: [ui],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Ensures Tailwind CSS classes are scanned from `@repo/ui` package
    join(
      dirname(require.resolve("@repo/ui/tailwind.config")),
      "./components/**/*.{js,jsx,ts,tsx}",
    ),
  ],
} satisfies Config;
