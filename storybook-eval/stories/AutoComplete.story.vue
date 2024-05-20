<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import generateSourceCode from '../../utils/generateSourceCode'

// Base object for all of the variants
const state = reactive({
    value: '', // Not in spec
    items: [], // Not in spec
    forceSelection: false,
    completeOnFocus: false,
    inputId: null,
    inputStyle: null,
    inputClass: null,
    inputProps: null,
    panelStyle: null,
    panelClass: null,
    panelProps: null,
    dropdownIcon: null,
    dropdownClass: null,
    loadingIcon: null,
    removeTokenIcon: null,
    virtualScrollerOptions: null,
    autoOptionFocus: false,
    selectOnFocus: false,
    focusOnHover: true,
    searchLocale: null,
    searchMessage: '{0} results are available',
    selectionMessage: '{0} items selected',
    emptySelectionMessage: 'No selected item',
    emptySearchMessage: 'No results found',
    tabindex: null,
    ariaLabel: null,
    ariaLabelledby: null,
    pt: null,
    ptOptions: null,
    unstyled: false
})

const name = ref("AutoComplete")

const blankState = reactive(JSON.parse(JSON.stringify(state)))
blankState.items = ['DE', 'FR', 'US']

const blankSource = computed(() => { return generateSourceCode(name.value, blankState) })
</script>

<template>
  <Story title="AutoComplete">
    <Variant title="Blank Slate" :source="blankSource">
      <AutocompleteStory :state="blankState" />
      <!-- Template for controls has to be outside of component -->
      <!-- Controls show up in right side panel -->
      <template #controls>
        <AutocompleteControls :state="blankState" />
      </template>
    </Variant>

  </Story>
</template>

<docs lang="md">
  # Primevue AutoComplete

  Please visit [the Primevue documentation](https://primevue.org/autocomplete/) for specific documentation questions.

  Here, there is just one AutoComplete variants to give you an idea of what this component can be used for.

  1. Blank State: Simple 'Hello World' blue button
  2. Danger Button: Button that says 'LAUNCH' with a drop shadow and danger background
  3. Icon Button: A button with an info background and a checkmark icon
</docs>