// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue'
  ],
  primevue: {
      options: {
        usePrimeVue: true,
        unstyled: true
      },
      components: {
        include: ['Button', 'inputnumber']
      }
  },
  css: [
    'primevue/resources/themes/bootstrap4-light-blue/theme.css',
    'primevue/resources/primevue.css',
  ],
  build: {
    transpile: ['primevue'],
  },
})