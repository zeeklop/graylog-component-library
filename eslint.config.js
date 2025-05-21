import js from '@eslint/js';

import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-config-prettier/flat';
import prettierPlugin from 'eslint-plugin-prettier';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...storybook.configs['flat/recommended'],
  {
    ignores: ['node_modules/*', 'dist/*', '!.storybook'],
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
        projectService: true,
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      prettier: prettierPlugin,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'prettier/prettier': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  prettier,
  {
    files: ['.storybook/**/*', '**/*.stories.*'],
    plugins: { storybook },
    rules: {
      'react-hooks/rules-of-hooks': 'off',
    },
  },
];
