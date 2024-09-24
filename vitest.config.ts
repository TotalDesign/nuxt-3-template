// https://nuxt.com/docs/getting-started/testing
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        domEnvironment: 'jsdom',
        overrides: {
          //
        },
      },
    },
  },
})
