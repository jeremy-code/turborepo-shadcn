import { createJsWithBabelEsmPreset, type JestConfigWithTsJest } from "ts-jest";

const presetConfig = createJsWithBabelEsmPreset({
  babelConfig: {
    presets: [
      "@babel/preset-env",
      ["@babel/preset-react", { runtime: "automatic" }],
    ],
    plugins: [["babel-plugin-react-compiler", { target: "19" }]],
  },
});

const jestConfig: JestConfigWithTsJest = {
  ...presetConfig,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default jestConfig;
