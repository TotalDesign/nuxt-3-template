// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: [
    'assets/scss/main.scss',
    'ress/ress.css',
  ],
  devtools: {
    enabled: false,
  },
  imports: {
    dirs: [
      'composables',
      'stores',
      'utils',
    ],
  },
  modules: [
    '@nuxt/test-utils/module',
    '@pinia/nuxt',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./assets/scss/mixins";`,
        },
      },
    },
  },
})
