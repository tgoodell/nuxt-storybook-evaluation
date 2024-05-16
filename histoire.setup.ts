import { defineSetupVue3 } from '@histoire/plugin-vue'
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css'

export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {
    app.use(PrimeVue, { /* options */ });
})