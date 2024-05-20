<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import generateSourceCode from '../../utils/generateSourceCode'

// Base object for all of the variants
const state = reactive({
  style: null,
  class: null,
  label: 'Click Me',
  icon: null,
  iconPos: 'left',
  iconClass: null,
  badge: null,
  badgeClass: null,
  badgeSeverity: null,
  loading: false,
  loadingIcon: null,
  link: false,
  severity: null,
  raised: false,
  rounded: false,
  text: false,
  outlined: false,
  size: null,
  plain: false,
  pt: null,
  ptOptions: null,
  unstyled: false
})

const ingredient = ref('');
</script>

<template>
  <Story title="Radiobutton">
    <Variant title="Ingredient Decisions">
        <div class="card flex justify-content-center">
        <div class="flex flex-wrap gap-3">
            <div class="flex align-items-center">
                <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Cheese" />
                <label for="ingredient1" class="ml-2">Cheese</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="Mushroom" />
                <label for="ingredient2" class="ml-2">Mushroom</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="ingredient" inputId="ingredient3" name="pizza" value="Pepper" />
                <label for="ingredient3" class="ml-2">Pepper</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="ingredient" inputId="ingredient4" name="pizza" value="Onion" />
                <label for="ingredient4" class="ml-2">Onion</label>
            </div>
        </div>
    </div>
      <!-- Template for controls has to be outside of component -->
      <!-- Controls show up in right side panel -->
      <template #controls>
        <RadiobuttonControls :state="state" />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
  # Primevue Button

  Please visit [the Primevue documentation](https://primevue.org/radiobutton/) for specific documentation questions.
</docs>