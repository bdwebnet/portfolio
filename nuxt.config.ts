// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'BD',
      meta: [
        { name: 'description', content: 'BDs Portfolio' }
      ],
      htmlAttrs: {
        lang: 'de'
      }
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  typescript: {
    strict: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/main.scss";'
        }
      }
    }
  },
  modules: [
    '@nuxt/content'
  ]
})
