import tseslint from "typescript-eslint";

import react from "./react.js";

export default tseslint.config(
  {
    ignores: [".next"],
  },
  ...react,
  {
    settings: {
      react: {
        formComponents: [{ name: "Form", formAttribute: "action" }],
        linkComponents: [{ name: "Link", linkAttribute: "href" }],
      },
    },
  },
  {
    files: ["**/*.{js,cjs,jsx,mjs}"],
    ...tseslint.configs.disableTypeChecked,
  },
);
