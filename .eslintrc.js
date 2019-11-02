module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/essential',
    'plugin:nuxt/recommended',
    'airbnb-base'
  ],
  settings: {
    'import/resolver': {
      typescript: {}
    }
  },
  plugins: [
    'vue',
    '@typescript-eslint',
    'import',
  ],
  // add your custom rules here
  rules: {
    'class-methods-use-this': 'off',
  }
}
