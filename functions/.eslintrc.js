module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files
    "/generated/**/*", // Ignore generated files
  ],
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  rules: {
    "quotes": ["error", "double"], // Enforce double quotes
    "import/no-unresolved": 0, // Disable unresolved import rule
    "indent": ["error", 2], // Use 2 spaces for indentation
    "no-tabs": "error", // Disallow tabs
    "no-trailing-spaces": "error", // Disallow trailing spaces
  },
};
