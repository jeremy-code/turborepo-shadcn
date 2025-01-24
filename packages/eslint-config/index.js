import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import eslint from "@eslint/js";
import globals from "globals";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import importX from "eslint-plugin-import-x";
import pluginPromise from "eslint-plugin-promise";
import turbo from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";

import disables from "./disables.js";
import test from "./test.js";

export const baseConfig = tseslint.config(
  /**
   * Add name to recommended ESLint config, which doesn't exist for compatibility
   *
   * @see {@link https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js#L11}
   */
  { name: "@eslint/js/recommended", ...eslint.configs.recommended },
  tseslint.configs.recommendedTypeChecked,
  comments.recommended,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  pluginPromise.configs["flat/recommended"],
  turbo.configs["flat/recommended"],
  {
    name: "@repo/eslint-config/index.js",
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
      "import-x/newline-after-import": ["error", { considerComments: true }],
      /**
       * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/order.md}
       */
      "import-x/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
          ],
          pathGroups: [
            { pattern: "#*", group: "internal" },
            { pattern: "react?(-dom)", group: "builtin" },
          ],
          distinctGroup: false,
          pathGroupsExcludedImportTypes: ["object"],
          "newlines-between": "always",
          alphabetize: { order: "asc" },
        },
      ],
    },
    settings: {
      /**
       * @see {@link https://github.com/un-ts/eslint-plugin-import-x#import-xinternal-regex}
       */
      "import-x/internal-regex": "^@repo/",
      /**
       * @see {@link https://github.com/un-ts/eslint-plugin-import-x/pull/192}
       * @see {@link https://github.com/un-ts/eslint-plugin-import-x/issues/40#issuecomment-2381444266}
       */
      "import-x/resolver-next": [
        createTypeScriptImportResolver({ alwaysTryTypes: true }),
      ],
    },
  },
  test,
);

export default baseConfig.concat(disables);
