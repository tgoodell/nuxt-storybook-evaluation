<script setup>
import { logEvent } from 'histoire/client'
const props = defineProps({
  state: {
    type: Object,
    default: {},
  },
})
</script>

<template>
    <Checkbox
        v-model="state.value"
        :value="state.value"
        :modelValue="state.modelValue"
        :name="state.name"
        :binary="state.binary"
        :invalid="state.invalid"
        :disabled="state.disabled"
        :variant="state.variant"
        :readonly="state.readonly"
        :required="state.required"
        :tabindex="state.tabindex"
        :trueValue="state.trueValue"
        :falseValue="state.falseValue"
        :inputId="state.inputId"
        :inputClass="state.inputClass"
        :inputStyle="state.inputStyle"
        :ariaLabelledby="state.ariaLabelledby"
        :ariaLabel="state.ariaLabel"
        :pt="state.pt"
        :ptOptions="state.ptOptions"
        :unstyled="state.unstyled"
    />
</template>