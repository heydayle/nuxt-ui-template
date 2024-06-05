// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/': { redirect: '/template' }
  },
  components: [
    { path: '~/components', prefix: '' },
  ],
  css: [
    '~/assets/scss/main.scss',
  ],
  modules: [
    '@pinia/nuxt',
    '@nuxt/ui',
    'nuxt-headlessui',
    // '@hebilicious/vue-query-nuxt',
    'nuxt-local-iconify',
    '@nuxt/test-utils/module',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
  ],
  imports: {
    dirs: ['stores'],
  },
  headlessui: {
    prefix: 'Headless',
  },
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },
  localIconify: {
    iconPath: './assets/icons',
  },
  // runtimeConfig: {
  //   public: {
  //     apiBase: process.env.NUXT_PUBLIC_API_BASE,
  //     kratosPublicEndpoint: process.env.PUB_KRATOS_PUBLIC_ENDPOINT,
  //   },
  // },
  ssr: false,
})
