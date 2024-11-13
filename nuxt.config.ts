// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/test-utils/module',
    '@pinia/nuxt',
  ],
  imports: {
    dirs: [
      'composables',
      'stores',
      'utils',
    ],
  },
  devtools: {
    enabled: false,
  },
  css: [
    'ress/ress.css',
    'assets/scss/main.scss',
  ],
  compatibilityDate: '2024-11-13',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./assets/scss/mixins.scss" as *;`,
          api: 'modern',
        },
      },
    },
  },
})
