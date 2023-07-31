module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended", "plugin:storybook/recommended", "plugin:storybook/recommended", "plugin:storybook/recommended", "plugin:storybook/recommended", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "@typescript-eslint/no-empty-interface": "off",
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-empty": ["error"],
    "no-unused-vars": ["error"],
    "no-inline-comments": "off"
  }
};