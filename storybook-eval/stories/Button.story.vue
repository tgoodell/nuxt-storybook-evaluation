<script lang="ts" setup>
import { reactive, ref } from 'vue'
import Button from 'primevue/button';

const state = reactive({
  style: null,
  disabled: false,
  content: 'Hello world',
})

const message = ref('Meow!')
</script>

<template>
  <Story>
    <Variant>
      <Button 
        :style="state.style" 
        :label="state.content" 
        :disabled="state.disabled" 
      />

      <template #controls>
        Style: <input type="text" v-model="state.style" />
        Content: <input type="text" v-model="state.content" />
        Disabled: <input type="checkbox" v-model="state.disabled" />
      </template>
    </Variant>
  </Story>
</template>