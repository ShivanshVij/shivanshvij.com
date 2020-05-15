export default {
  mode: 'spa',
  head: {
    title: 'Shivansh Vij',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Shivansh Vij\'s Portfolio and Blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
    ]
  },
  loading: { color: '#fff' },
  css: [
    '@fortawesome/fontawesome-free/css/all.min.css',
    'prismjs/themes/prism-okaidia.css'
  ],
  plugins: [
    { src: '~/plugins/prismic.js', ssr: false }
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-analytics', {
      id: 'UA-102743987-1'
    }]
  ],
  modules: [
  ],
  axios: {
  },
  build: {
    babel: {
      configFile: "./babel.config.js"
    },
  },
  purgeCSS: {
    mode: 'postcss',
    whitelist: ["html", "body"],
    whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
  }
}
