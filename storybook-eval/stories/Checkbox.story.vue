<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import generateSourceCode from '../../utils/generateSourceCode'

// Base object for all of the variants
const state = reactive({
    value: false,
    modelValue: null,
    name: null,
    binary: null,
    invalid: false,
    disabled: null,
    variant: 'outlined',
    readonly: null,
    required: null,
    tabindex: null,
    trueValue: null,
    falseValue: null,
    inputId: null,
    inputClass: null,
    inputStyle: null,
    ariaLabelledby: null,
    ariaLabel: null,
    pt: null,
    ptOptions: null,
    unstyled: false
})

const name = ref("Button")

const simpleBinary = reactive(JSON.parse(JSON.stringify(state)))
simpleBinary.binary = true

const invalidCheckbox = reactive(JSON.parse(JSON.stringify(state)))
invalidCheckbox.invalid = true

const blankSource = computed(() => { return generateSourceCode(name.value, simpleBinary) })
const dangerSource = computed(() => { return generateSourceCode(name.value, invalidCheckbox) })
</script>

<template>
  <Story title="Checkbox">
    <Variant title="Simple Binary" :source="blankSource">
      <CheckboxStory :state="simpleBinary" />
      <!-- Template for controls has to be outside of component -->
      <!-- Controls show up in right side panel -->
      <template #controls>
        <CheckboxControls :state="simpleBinary" />
      </template>
    </Variant>

    <Variant title="Invalid Checkbox" :source="dangerSource">
      <CheckboxStory :state="invalidCheckbox" />
      <!-- Template for controls has to be outside of component -->
      <!-- Controls show up in right side panel -->
      <template #controls>
        <CheckboxControls :state="invalidCheckbox" />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
  # Primevue Checkbox

  Please visit [the Primevue documentation](https://primevue.org/checkbox/) for specific documentation questions.
</docs>