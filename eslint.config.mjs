import js from '@eslint/js';
import globals from 'globals';
import css from '@eslint/css';
import jest from 'eslint-plugin-jest';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      semi: ['error', 'always'], // require semicolons
      quotes: ['error', 'single'], // use single quotes
      eqeqeq: ['error', 'always'], // require ===
      curly: 'error', // enforce curly braces
      'no-console': 'off', // allow console.log
      'no-unused-vars': 'warn', // warn on unused vars
      'space-before-function-paren': ['error', 'never'], // no space before function parens
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
  },
  {
    files: ['**/__tests__/**/*.js', '**/*.test.js', '**/*.spec.js'],
    languageOptions: {
      globals: {
        ...jest.environments.globals.globals, // ✅ This adds Jest globals like 'test', 'expect', etc.
      },
    },
    plugins: {
      jest,
    },
    rules: {
      ...jest.configs.recommended.rules, // ✅ Enables recommended Jest rules
    },
  },
]);
