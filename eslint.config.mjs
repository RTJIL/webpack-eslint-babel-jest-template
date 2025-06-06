import js from '@eslint/js';
import globals from 'globals';
import css from '@eslint/css';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      semi: ['error', 'always'], // require semicolons
      quotes: ['error', 'single'], // use single quotes
      indent: ['error', 2], // 2-space indentation
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
]);
