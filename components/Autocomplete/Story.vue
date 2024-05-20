<script setup>
import { logEvent } from 'histoire/client'
import AutoComplete from 'primevue/autocomplete';
const props = defineProps({
  state: {
    type: Object,
    default: {},
  },
})

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => item);
}
</script>

<template>
  <AutoComplete 
    @change="logEvent('Value Change', $event)"
    @complete="search"
    v-model="state.value"
    :dropdown="true"
    :suggestions="state.items"
    :forceSelection="state.forceSelection"
    :completeOnFocus="state.completeOnFocus"
    :inputId="state.inputId"
    :inputStyle="state.inputStyle"
    :inputClass="state.inputClass"
    :inputProps="state.inputProps"
    :panelStyle="state.panelStyle"
    :panelClass="state.panelClass"
    :panelProps="state.panelProps"
    :dropdownIcon="state.dropdownIcon"
    :dropdownClass="state.dropdownClass"
    :loadingIcon="state.loadingIcon"
    :removeTokenIcon="state.removeTokenIcon"
    :virtualScrollerOptions="state.virtualScrollerOptions"
    :autoOptionFocus="state.autoOptionFocus"
    :selectOnFocus="state.selectOnFocus"
    :focusOnHover="state.focusOnHover"
    :searchLocale="state.searchLocale"
    :searchMessage="state.searchMessage"
    :selectionMessage="state.selectionMessage"
    :emptySelectionMessage="state.emptySelectionMessage"
    :emptySearchMessage="state.emptySearchMessage"
    :tabindex="state.tabindex"
    :ariaLabel="state.ariaLabel"
    :ariaLabelledby="state.ariaLabelledby"
    :pt="state.pt"
    :ptOptions="state.ptOptions"
    :unstyled="state.unstyled"
  />
</template>