const pkg = require('./package')
require('dotenv').config()
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  router: {

  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'coc',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'keywords', name: 'keywords', content: pkg.keywords }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' }
    ],
    script: [
      // 腾讯统计
      { src: 'https://tajs.qq.com/stats?sId=65859583' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    // 'element-ui/lib/theme-chalk/index.css'
    'element-theme-ink',
    { src: '~assets/css/coc.scss', lang: 'scss' },
    'prismjs/themes/prism.css',
    '~assets/css/github-markdown.css',
  ],
  plugins: [
    '~plugins/axios',
    { src: '~plugins/element-ui', ssr: true },
    { src: '~plugins/utils.js', ssr: false }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'black' },
  /*
  ** Build configuration
  */
  build: {
    publicPath: '/nuxt/',
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.module.rules.push({
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader'
          },
          {
            loader: 'vue-markdown-loader/lib/markdown-compiler',
            options: {
              raw: true
            }
          }
        ]
      })
      config.module.rules.push(new VueLoaderPlugin())
    }
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],
  axios: {
    proxy: true
  },
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    browserBaseURL: 'https://api.clashofclans.com/v1/'
    // proxy: true
  }
}
