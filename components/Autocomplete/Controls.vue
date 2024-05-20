<script setup>
const props = defineProps({
  state: {
    type: Object,
    default: {}
  }
})
</script>

<template>
    value: <HstText v-model="state.value" name="value" />
    items: <HstText v-model="state.items" name="items" />
    forceSelection: <HstCheckbox v-model="state.forceSelection" name="forceSelection" />
    completeOnFocus: <HstCheckbox v-model="state.completeOnFocus" name="completeOnFocus" />
    inputId: <HstText v-model="state.inputId" name="inputId" />
    inputStyle: <HstText v-model="state.inputStyle" name="inputStyle" />
    inputClass: <HstText v-model="state.inputClass" name="inputClass" />
    inputProps: <HstText v-model="state.inputProps" name="inputProps" />
    panelStyle: <HstText v-model="state.panelStyle" name="panelStyle" />
    panelClass: <HstText v-model="state.panelClass" name="panelClass" />
    panelProps: <HstText v-model="state.panelProps" name="panelProps" />
    dropdownIcon: <HstText v-model="state.dropdownIcon" name="dropdownIcon" />
    dropdownClass: <HstText v-model="state.dropdownClass" name="dropdownClass" />
    loadingIcon: <HstText v-model="state.loadingIcon" name="loadingIcon" />
    removeTokenIcon: <HstText v-model="state.removeTokenIcon" name="removeTokenIcon" />
    virtualScrollerOptions: <HstText v-model="state.virtualScrollerOptions" name="virtualScrollerOptions" />
    autoOptionFocus: <HstCheckbox v-model="state.autoOptionFocus" name="autoOptionFocus" />
    selectOnFocus: <HstCheckbox v-model="state.selectOnFocus" name="selectOnFocus" />
    focusOnHover: <HstCheckbox v-model="state.focusOnHover" name="focusOnHover" />
    searchLocale: <HstText v-model="state.searchLocale" name="searchLocale" />
    searchMessage: <HstText v-model="state.searchMessage" name="searchMessage" />
    selectionMessage: <HstText v-model="state.selectionMessage" name="selectionMessage" />
    emptySelectionMessage: <HstText v-model="state.emptySelectionMessage" name="emptySelectionMessage" />
    emptySearchMessage: <HstText v-model="state.emptySearchMessage" name="emptySearchMessage" />
    tabindex: <HstText v-model="state.tabindex" name="tabindex" />
    ariaLabel: <HstText v-model="state.ariaLabel" name="ariaLabel" />
    ariaLabelledby: <HstText v-model="state.ariaLabelledby" name="ariaLabelledby" />
    pt: <HstText v-model="state.pt" name="pt" />
    ptOptions: <HstText v-model="state.ptOptions" name="ptOptions" /> 
    unstyled: <HstCheckbox v-model="state.unstyled" name="unstyled" />
</template>