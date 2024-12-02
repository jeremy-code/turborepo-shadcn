import tseslint from "typescript-eslint";
import next from "@next/eslint-plugin-next";

import react from "./react.js";

export default tseslint.config(
  /**
   * @see {@link https://eslint.org/docs/latest/use/configure/configuration-files#globally-ignoring-files-with-ignores}
   */
  { ignores: [".next/"] },
  ...react,
  {
    plugins: { "@next/next": next },
    rules: {
      ...next.configs.recommended.rules,
    },
    settings: {
      /**
       * @see {@link https://nextjs.org/docs/app/api-reference/components/form}
       */
      formComponents: [{ name: "Form", formAttribute: "action" }],
      /**
       * @see {@link https://nextjs.org/docs/app/api-reference/components/link}
       */
      linkComponents: [{ name: "Link", linkAttribute: "href" }],
    },
  },
);
