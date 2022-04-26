module.exports = {
  env: {
    browser: true,
  },
  ignorePatterns: ['**/*.d.*'],
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    './index.js',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: false },
    ],
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
  },
  overrides: [
    {
      files: ['**/*.+tsx'],
      rules: {
        '@typescript-eslint/no-floating-promises': 'off',
      },
    },
  ],
};
