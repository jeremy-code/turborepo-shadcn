import tseslint from "typescript-eslint";
import pluginJest from "eslint-plugin-jest";
import testingLibrary from "eslint-plugin-testing-library";

export default tseslint.config(
  {
    name: "jest/recommended",
    files: ["**/*.{spec,test}.{js,jsx,ts,tsx}"],
    ...pluginJest.configs["flat/recommended"],
  },
  {
    name: "testing-library/react",
    files: ["**/*.{spec,test}.{jsx,tsx}"],
    ...testingLibrary.configs["flat/react"],
  },
);
