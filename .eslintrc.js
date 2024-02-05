module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    'vue/no-unused-components': ['error', {
      ignoreWhenBindingPresent: false,
    }],

  },
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'jsx-a11y/img-has-alt': 'off'
  },
};