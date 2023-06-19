module.exports = {
  ignorePatterns: ['**/node_modules'],
  reportUnusedDisableDirectives: true,
  extends: [
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  rules: {
    'import/extensions': ['error', 'never'],
    'import/newline-after-import': 'error',
    'import/no-deprecated': 'warning',
    'import/no-self-import': 'error',
    'import/no-unused-modules': [
      'error',
      { missingExports: true, unusedExports: true },
    ],
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
