module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['react'],
  globals: {
    graphql: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
};
