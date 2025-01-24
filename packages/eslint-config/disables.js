import tseslint from "typescript-eslint";

export default tseslint.config({
  files: ["**/*.{js,cjs,jsx,mjs}"],
  ...tseslint.configs.disableTypeChecked,
});
