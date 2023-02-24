// https://nuxt.com/docs/api/configuration/nuxt-config
import meta from './utils/meta'

export default defineNuxtConfig({
  ssr: true,
  telemetry: false,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: meta.siteTitle,
      meta: [
        { name: 'description', content: meta.siteDescription },
        { name: 'theme-color', content: '#FFFFFA' },
        { name: 'msapplication-TileColor', content: '#FFFFFA' },
        { name: 'msapplication-TileImage', content: '/icons/ms-icon-144x144.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/icons/apple-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/icons/apple-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/icons/apple-icon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/icons/apple-icon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/icons/apple-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/icons/apple-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/icons/apple-icon-144x144.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/apple-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-icon-180x180.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icons/android-icon-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icons/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' },
        { rel: 'manifest', href: '/manifest.webmanifest' }
      ],
      htmlAttrs: {
        lang: 'de'
      }
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  typescript: {
    strict: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
              '@import "@/assets/scss/_variables.scss";' +
              '@import "@/assets/scss/main.scss";'
        }
      }
    }
  },
  modules: [
    '@nuxt/content',
    '@vite-pwa/nuxt',
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
  ],
  pwa: {
    manifest: {
      name: meta.siteTitle,
      short_name: 'BD',
      description: meta.siteDescription,
      lang: 'de',
      theme_color: '#FFFFFA',
      background_color: '#FFFFFA',
      icons: [
        {
          src: '/icons/android-icon-36x36.png',
          sizes: '36x36',
          type: 'image/png',
          density: '0.75'
        },
        {
          src: '/icons/android-icon-48x48.png',
          sizes: '48x48',
          type: 'image/png',
          density: '1.0'
        },
        {
          src: '/icons/android-icon-72x72.png',
          sizes: '72x72',
          type: 'image/png',
          density: '1.5'
        },
        {
          src: '/icons/android-icon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
          density: '2.0'
        },
        {
          src: '/icons/android-icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
          density: '3.0'
        },
        {
          src: '/icons/android-icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          density: '4.0'
        }
      ]
    }
  }
})
