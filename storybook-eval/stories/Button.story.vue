<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'

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

// TODO: Make a computed property that transforms the source of the component into the source of the Button
// Can also just create it from scratch since we know state
// Make a source code renderer - if we know the name of the component and the state with its keys, we know the source code

function generateSourceCode(currName: string, currState: object) {
  return `<${currName}
${Object.keys(currState).map(key => {
    if (currState[key] !== false && currState[key] !== null && currState[key] !== '') {
      return `   :${key}='${currState[key]}'\n`
    }
    return ''
  }).join('')}/>`
}

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