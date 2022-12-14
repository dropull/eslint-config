module.exports = {
  ignorePatterns: ['**/node_modules'],
  reportUnusedDisableDirectives: true,
  plugins: ['import'],
  extends: [
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  rules: {
    'import/extensions': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'promise/always-return': 'off',
    'promise/catch-or-return': ['error', { allowFinally: true }],
    'unicorn/filename-case': [
      'error',
      { cases: { camelCase: true, pascalCase: true } },
    ],
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
};
