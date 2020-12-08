module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import',
  ],
  rules: {
    'arrow-body-style': 'off',
    'max-classes-per-file': ['off'],
    'react/no-unescaped-entities': ['off'],
    'react/jsx-curly-newline': ['off'],
    radix: 'off',
    'global-require': 'off',
    'max-len': ['off'],
    'prefer-promise-reject-errors': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/prop-types': ['off'],
    'no-return-assign': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'import/prefer-default-export': ['off'],
    'import/no-unresolved': ['off'],
    'import/extensions': ['off'],
    'no-unused-vars': 'off',
    'react/jsx-props-no-spreading': ['off'],
    'react/no-children-prop': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-no-duplicate-props': 'off',
    'react/jsx-indent': 'off',
    'no-useless-escape': 'off',
    'consistent-return': 'off',
    'no-restricted-globals': 'off',
    'no-nested-ternary': 'off',
    'import/no-cycle': 'off',
    'array-callback-return': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': [
      2,
      { allowForLoopAfterthoughts: true },
    ],
    'import/export': 'off',
    'react/jsx-fragments': ['off', 'element'],
    'react/jsx-one-expression-per-line': ['off'],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'next',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'next'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'prefer-destructuring': [
      'warn',
      {
        array: false,
        object: true,
      },
      { enforceForRenamedProperties: false },
    ],
    'react/jsx-max-props-per-line': ['error'],
    'no-multi-spaces': 'error',
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
    }],
    'sort-imports': [
      'error',
      { ignoreDeclarationSort: true },
    ],
  },
};
