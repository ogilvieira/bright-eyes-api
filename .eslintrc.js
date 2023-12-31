module.exports = {
    ignorePatterns: [".eslintrc.js"],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "no-console": [2, {
        allow: ["warn", "error", "info"]
      }]
    }
  };