// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Benedikt Dalferth',
      meta: [
        { name: 'description', content: 'Benedikts Dalferths Portfolio' }
      ],
      htmlAttrs: {
        lang: 'de'
      }
    },
    pageTransition: { name: 'page', mode: 'out-in', onAfterEnter: () => { window.scrollTo({ top: 0 }) } },
    layoutTransition: { name: 'layout', mode: 'out-in' }
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
    '@nuxt/content',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Nunito: {
            wght: [300, 600]
          }
        }
      }
    ]
  ]
})
