module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'instaface',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'mobile-web-app-capable',
        content: 'yes'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Watch others watch you watch others.'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#2e2e2e'
  },
  /*
   ** CSS
   */
  css: [
    // CSS file in the project
    '@/assets/css/main.css',
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
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
  // Include tracking.js node module
  build: {
    vendor: ['tracking']
  },
}
