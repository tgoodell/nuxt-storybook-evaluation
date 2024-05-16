<script lang="ts" setup>
import { reactive } from 'vue'
import ButtonStory from '../../components/ButtonStory.vue';

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

const blankState = reactive(JSON.parse(JSON.stringify(state)));
blankState.label = 'Hello World!';

const dangerState = reactive(JSON.parse(JSON.stringify(state)));
dangerState.label = 'LAUNCH';
dangerState.severity = 'danger';
dangerState.raised = true;

const iconState = reactive(JSON.parse(JSON.stringify(state)));
iconState.label = '';
iconState.rounded = true;
iconState.icon = 'pi pi-check';
iconState.severity = 'info';
</script>

<template>
  <Story title="Button">
    <Variant title="Blank Slate">
      <ButtonStory :state="blankState" />
      <!-- Template for controls has to be outside of component -->
      <!-- Controls show up in right side panel -->
      <template #controls>
        <ButtonControls :state="blankState" />
      </template>
    </Variant>

    <Variant title="Danger Button">
      <ButtonStory :state="dangerState" />
      <!-- Template for controls has to be outside of component -->
      <!-- Controls show up in right side panel -->
      <template #controls>
        <ButtonControls :state="dangerState" />
      </template>
    </Variant>

    <Variant title="Icon Button">
      <ButtonStory :state="iconState" />
      <!-- Template for controls has to be outside of component -->
      <!-- Controls show up in right side panel -->
      <template #controls>
        <ButtonControls :state="iconState" />
      </template>
    </Variant>
  </Story>
</template>