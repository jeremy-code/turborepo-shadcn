import "@testing-library/jest-dom";
import { cwd } from "node:process";

import { loadEnvConfig } from "@next/env";

export default async () => {
  loadEnvConfig(cwd());
};
