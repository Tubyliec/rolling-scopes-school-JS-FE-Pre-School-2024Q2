import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  eslint.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        node: {
          paths: [resolve(__dirname, 'app')],
        },
      },
    },
    rules: {
      // Enforce import/export syntax
      // 'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/default': 'error',
      'import/export': 'error',

      // Prevent usage of variables before they are defined
      'no-use-before-define': 'error',

      // Enforce consistent quote style (single quotes)
      quotes: ['error', 'single', { avoidEscape: true }],

      // Require semicolons
      semi: ['error', 'always'],

      // Disallow unused variables
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  prettierConfig,
];
