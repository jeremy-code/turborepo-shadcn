import pluginJest from "eslint-plugin-jest";
import testingLibrary from "eslint-plugin-testing-library";
import { defaults } from "jest-config";
import tseslint from "typescript-eslint";

// [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ]
const TEST_FILE_GLOBS = defaults.testMatch;

export default tseslint.config(
  {
    name: "jest/recommended",
    files: TEST_FILE_GLOBS,
    ...pluginJest.configs["flat/recommended"],
  },
  {
    name: "testing-library/react",
    files: TEST_FILE_GLOBS,
    ...testingLibrary.configs["flat/react"],
  },
);
