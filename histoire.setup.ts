import { defineSetupVue3 } from '@histoire/plugin-vue'
import PrimeVue from 'primevue/config';

export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {
    app.use(PrimeVue, { /* options */ });
})