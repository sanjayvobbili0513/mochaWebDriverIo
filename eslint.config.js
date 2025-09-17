import js from '@eslint/js';
import mochaPlugin from 'eslint-plugin-mocha';
import unicornPlugin from 'eslint-plugin-unicorn';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        browser: 'readonly',
        $: 'readonly',
        $$: 'readonly',
        module: 'readonly',
        require: 'readonly'
      }
    },
    plugins: {
      mocha: mochaPlugin,
      unicorn: unicornPlugin,
      prettier: prettierPlugin
    },
    rules: {
      'unicorn/filename-case': ['error', { case: 'kebabCase' }],
      'mocha/no-exclusive-tests': 'error',
      'mocha/no-identical-title': 'error',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      indent: ['error', 2],
      'max-len': ['error', { code: 100 }],
      'prettier/prettier': 'error'
    }
  }
];
