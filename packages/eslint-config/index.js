import eslint from "@eslint/js";
import globals from "globals";
import importPlugin from "eslint-plugin-import";
import pluginPromise from "eslint-plugin-promise";
import turbo from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  pluginPromise.configs["flat/recommended"],
  turbo.configs["flat/recommended"],
  {
    name: "eslint-config/index.js",
    languageOptions: {
      parserOptions: {
        /**
         * Automatically load `tsconfig.json` files for typed linting rules
         *
         * @see {@link https://typescript-eslint.io/packages/parser/#projectservice}
         */
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { ...globals.node },
    },
    rules: {
      "import/order": [
        "error",
        {
          pathGroups: [{ pattern: "@repo/*", group: "internal" }],
          "newlines-between": "always",
        },
      ],
    },
    settings: {
      "import/resolver": {
        typescript:
          /** @type {import('eslint-import-resolver-typescript').TsResolverOptions} */ ({
            alwaysTryTypes: true,
          }),
      },
    },
  },
  {
    files: ["**/*.{js,cjs,jsx,mjs}"],
    extends: [tseslint.configs.disableTypeChecked],
  },
);
