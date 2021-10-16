module.exports = {
  root: true,

  env: {
    browser: true,
    node: true
  },

  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 2020
  },

  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],

  plugins: [
  ],

  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },

  'extends': [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/essential',
    '@vue/standard'
  ]
}
