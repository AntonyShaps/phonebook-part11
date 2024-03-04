module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
    browser: true,
    'cypress/globals': true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    'react', 'cypress',
  ],
  rules: {
    indent: [
      'error',
      2,
    ],
    eqeqeq: 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
      'error', 'always',
    ],
    'arrow-spacing': [
      'error', { before: true, after: true },
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    quotes: [
      'error',
      'single',
    ],
    semi: [
      'error',
      'never',
    ],
    'no-underscore-dangle': ['error', { allow: ['_id', '__v'] }],
    'no-console': 0,
  },
}
