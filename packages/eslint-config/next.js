import tseslint from "typescript-eslint";
import next from "@next/eslint-plugin-next";

import { reactConfig } from "./react.js";
import disables from "./disables.js";

export const nextConfig = tseslint.config(
  /**
   * @see {@link https://eslint.org/docs/latest/use/configure/configuration-files#globally-ignoring-files-with-ignores}
   */
  { name: "@repo/eslint-config/next/ignore", ignores: [".next/"] },
  ...reactConfig,
  {
    name: "next/core-web-vitals",
    plugins: { "@next/next": next },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs["core-web-vitals"].rules,
    },
  },
);

export default nextConfig.concat(disables);
