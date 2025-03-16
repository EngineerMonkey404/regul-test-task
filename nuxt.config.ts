// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['nuxt-quasar-ui', '@nuxt/fonts', '@pinia/nuxt', 'nuxt-viewport'],
  css: ['~/assets/scss/main.scss'],

  viewport: {
    breakpoints: {
      mobile: 959,
      desktop: 960,
    },
  },

  quasar: {
    config: {
      brand: {
        primary: '#337566',
        secondary: '#E8E8E8',
        'separator-color': '#CCCCCC',
      },
    },
    sassVariables: './assets/scss/variables.scss',
    components: {
      defaults: {
        QBtn: {
          unelevated: true,
        },
      },
    },
  },

  fonts: {
    families: [
      {
        name: 'Noto Serif',
        weight: 600,
      },
      {
        name: 'Inter',
        weight: 400,
      },
      {
        name: 'Inter',
        weight: 500,
      },
    ],
  },
})
