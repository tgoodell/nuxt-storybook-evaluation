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

const name = ref("Button")

const blankState = reactive(JSON.parse(JSON.stringify(state)))
blankState.label = 'Hello World!'

const dangerState = reactive(JSON.parse(JSON.stringify(state)))
dangerState.label = 'LAUNCH'
dangerState.severity = 'danger'
dangerState.raised = true

const iconState = reactive(JSON.parse(JSON.stringify(state)))
iconState.label = ''
iconState.rounded = true
iconState.icon = 'pi pi-check'
iconState.severity = 'info'

const blankSource = computed(() => { return generateSourceCode(name.value, blankState) })
const dangerSource = computed(() => { return generateSourceCode(name.value, dangerState) })
const iconSource = computed(() => { return generateSourceCode(name.value, iconState) })
</script>

<template>
  <Story title="Button">
    <Variant title="Blank Slate" :source="blankSource">
      <ButtonStory :state="blankState" />
      <!-- Template for controls has to be outside of component -->
      <!-- Controls show up in right side panel -->
      <template #controls>
        <ButtonControls :state="blankState" />
      </template>
    </Variant>

    <Variant title="Danger Button" :source="dangerSource">
      <ButtonStory :state="dangerState" />
      <!-- Template for controls has to be outside of component -->
      <!-- Controls show up in right side panel -->
      <template #controls>
        <ButtonControls :state="dangerState" />
      </template>
    </Variant>

    <Variant title="Icon Button" :source="iconSource">
      <ButtonStory :state="iconState" />
      <!-- Template for controls has to be outside of component -->
      <!-- Controls show up in right side panel -->
      <template #controls>
        <ButtonControls :state="iconState" />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
  # Primevue Button

  Please visit [the Primevue documentation](https://primevue.org/button/) for specific documentation questions.

  Here, there are three different Button variants to give you an idea of what this component can be used for.

  1. Blank State: Simple 'Hello World' blue button
  2. Danger Button: Button that says 'LAUNCH' with a drop shadow and danger background
  3. Icon Button: A button with an info background and a checkmark icon
</docs>