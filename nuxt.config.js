/* eslint global-require: "off" */
import env from 'dotenv';

export default {
  mode: 'universal',
  env: env.config().parsed,
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'buefy/dist/buefy.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/buefy',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-i18n',
  ],
  i18n: {
    // baseUrl: productionDomain - make sure canonicals are set for alternate domains
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
      },
      {
        code: 'lv',
        iso: 'lv-LV',
      },
    ],
    seo: true,
    vueI18n: {
      messages: {
        en: require('./locales/en.json'),
        lv: require('./locales/lv.json'),
      },
    },
    strategy: 'prefix_except_default',
  },
  /*
  ** Static build configuration
  */
  generate: {
    fallback: true,
  },
  /*
  ** Build configuration
  */
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(ts|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
