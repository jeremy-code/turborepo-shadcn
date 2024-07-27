const base = require("@repo/eslint-config");

/** @type {import('eslint').Linter.Config[]} */
module.exports = [{ ignores: ["apps/*", "packages/*"], ...base }];
