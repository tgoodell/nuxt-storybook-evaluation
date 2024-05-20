<script setup>
const props = defineProps({
  state: {
    type: Object,
    default: {},
  },
})
</script>

<template>
    value <HstText v-model="state.value" name="value" />
    modelValue <HstText v-model="state.modelValue" name="modelValue" />
    name <HstText v-model="state.name" name="name" />
    binary <HstCheckbox v-model="state.binary" name="binary" />
    invalid <HstCheckbox v-model="state.invalid" name="invalid" />
    disabled <HstCheckbox v-model="state.disabled" name="disabled" />
    variant <HstText v-model="state.variant" name="variant" />
    readonly <HstCheckbox v-model="state.readonly" name="readonly" />
    required <HstCheckbox v-model="state.required" name="required" />
    tabindex <HstText v-model="state.tabindex" name="tabindex" />
    trueValue <HstText v-model="state.trueValue" name="trueValue" />
    falseValue <HstText v-model="state.falseValue" name="falseValue" />
    inputId <HstText v-model="state.inputId" name="inputId" />
    inputStyle <HstText v-model="state.inputStyle" name="inputStyle" />
    inputClass <HstText v-model="state.inputClass" name="inputClass" />
    ariaLabelledby <HstText v-model="state.ariaLabelledby" name="ariaLabelledby" />
    ariaLabel <HstText v-model="state.ariaLabel" name="ariaLabel" />
    pt <HstText v-model="state.pt" name="pt" />
    ptOptions <HstText v-model="state.ptOptions" name="ptOptions" />
    unstyled <HstCheckbox v-model="state.unstyled" name="unstyled" />
</template>