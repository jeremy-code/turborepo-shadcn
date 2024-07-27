const next = require("@next/eslint-plugin-next");
const eslintImport = require("eslint-plugin-import");
const tseslint = require("typescript-eslint");

const react = require("./react");

module.exports = tseslint.config(
  {
    ignores: [".next"],
  },
  ...react,
  {
    plugins: {
      "@next/next": next,
      import: eslintImport,
    },
    rules: {
      ...next.configs.recommended.rules,
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".mts", ".cts", ".tsx", ".d.ts"],
      },
      "import/resolver": {
        "eslint-import-resolver-node": {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        "eslint-import-resolver-typescript": {
          alwaysTryTypes: true,
        },
      },
      react: {
        // See https://github.com/jsx-eslint/eslint-plugin-react/blob/master/lib/util/linkComponents.js#L33
        linkComponents: [{ name: "Link", linkAttribute: "href" }],
      },
    },
  },
);
