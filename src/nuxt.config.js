global.HTMLElement = typeof window === 'undefined' ? Object : window.HTMLElement;

export default {
  ssr: true,
  head: {
    title: 'TRCA',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Official Nuxt.js starter for CodeSandBox'
      }
    ],
    link: [
      {
        href: 'https://fonts.googleapis.com/css?family=Material+Icons+Round',
        rel: 'stylesheet'
      }
    ]
    // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: ['@/assets/css/styles.css'],

  plugins: ['plugins/chakra-ui'],

  modules: ['@chakra-ui/nuxt', '@nuxtjs/emotion', '@nuxt/http', '@nuxtjs/axios'],
  chakra: {},
  axios: {
    proxy: true,
    retry: { retries: 3 }
  },
  proxy: {
    '/api/': { target: 'http://localhost:3000', pathRewrite: { '^/api/': '' } }
  },
  http: {
    // See https://http.nuxtjs.org/api/#options
  },
  /*
   ** Build configuration
   ** Doc: https://nuxtjs.org/api/configuration-build
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
