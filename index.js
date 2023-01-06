module.exports = {
    extends: [
      'next',
      'prettier',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'react',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
      sourceType: 'module', // Allows for the use of imports
      ecmaFeatures: {
        jsx: true, // Allows for the parsing of JSX
      },
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
      'react/jsx-key': 'off',
      'react/prop-types': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
      'prettier/prettier': [
        'error',
        {
          printWidth: 130,
          tabWidth: 2,
          useTabs: false,
          semi: true,
          singleQuote: true,
          trailingComma: 'es5',
          bracketSpacing: true,
          // jsxBracketSameLine: false,
        },
      ],
    },
  };
  