import "@testing-library/jest-dom";
import { cwd } from "node:process";

import nextEnv from "@next/env";

export default async () => {
  // @see {@link https://github.com/vercel/next.js/issues/68091}
  // eslint-disable-next-line import-x/no-named-as-default-member -- @next/env is a cjs package
  nextEnv.loadEnvConfig(cwd());
};
