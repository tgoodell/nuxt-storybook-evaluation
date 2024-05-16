<script setup>
import PrimeVue from 'primevue/config';
import Aura from 'primevue/themes/aura';

const app = createApp(App);

app.use(PrimeVue, {
  // Default theme configuration
  theme: {
      preset: Aura,
      options: {
          prefix: 'p',
          darkModeSelector: 'system',
          cssLayer: false
      }
  }
});
</script>

<template>
  <div>
    Hello!
  </div>
</template>
