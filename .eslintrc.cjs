module.exports = {
  env: { browser: true, es2023: true, node: true },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: { ecmaVersion: 2023, sourceType: 'module' },
  ignorePatterns: ['dist/**', 'node_modules/**'],
  rules: {
    'no-unused-vars': 'warn',
    'no-undef': 'off'
  }
};