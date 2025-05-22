import js from '@eslint/js';
import react from 'eslint-plugin-react';
import typescript from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...typescript.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react
    },
    rules: {
      ...react.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Disable the rule
      'react/jsx-uses-react': 'off',     // Also disable this related rule
    },
    settings: {
      react: {
        version: 'detect',
        runtime: 'automatic' // Tell ESLint you're using the new JSX transform
      }
    }
  },
  {
    ignores: [
      'node_modules/',
      '.vscode/',
      'dist/',
      'build/',
      'src-tauri/'
    ]
  }
];