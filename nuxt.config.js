const pkg = require('./package')

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
      { src: 'http://tajs.qq.com/stats?sId=65859583' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    // 'element-ui/lib/theme-chalk/index.css'
    'element-theme-ink',
    { src: '~assets/css/coc.scss', lang: 'scss' },
    'prismjs/themes/prism.css'
  ],
  plugins: [
    '~/plugins/axios',
    { src: '~/plugins/element-ui', ssr: true }
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
    }
  },
  generate: {
    routes: ['/', '/en']
  },
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api/': { target: 'https://api.clashofclans.com/v1/', pathRewrite: {'^/api/': ''} }
  }
}
