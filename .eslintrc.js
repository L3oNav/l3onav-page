module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'airbnb',
    "plugin:prettier/recommended",
    "react-app"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    "eslint-plugin-prettier",
    "eslint-config-prettier"
  ],
  rules: {
    "react/jsx-filename-extension":[1,{
      "extensions":[".jsx",".jsx"]
    }],
    "react/no-this-in-sfc":0,
    "react/destructuring-assignment":0,
    "react/jsx-one-expression-per-line":0,
    "no-unused-expressions/no-unused-expressions": 2
  },
};
