<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
  style: null,
  class: null,
  label: 'Hello World',
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

</script>

<template>
  <Story title="Button">
    <Variant title="Blank Slate">
      <Button 
        :style="state.style"
        :class="state.class"
        :label="state.label"
        :icon="state.icon"
        :iconPos="state.iconPos"
        :iconClass="state.iconClass"
        :badge="state.badge"
        :badgeClass="state.badgeClass"
        :badgeSeverity="state.badgeSeverity"
        :loading="state.loading"
        :loadingIcon="state.loadingIcon"
        :link="state.link"
        :severity="state.severity"
        :raised="state.raised"
        :rounded="state.rounded"
        :text="state.text"
        :outlined="state.outlined"
        :size="state.size"
        :plain="state.plain"
        :pt="state.pt"
        :ptOptions="state.ptOptions"
        :unstyled="state.unstyled"
      />

      <template #controls>
        style: <HstText v-model="state.style" />
        class: <HstText v-model="state.class" />
        label: <HstText v-model="state.label" />
        icon: <HstText v-model="state.icon" />
        iconPos: <HstText v-model="state.iconPos" />
        iconClass: <HstText v-model="state.iconClass" />
        badge: <HstText v-model="state.badge" />
        badgeClass: <HstText v-model="state.badgeClass" />
        badgeSeverity: <HstText v-model="state.badgeSeverity" />
        loading: <HstCheckbox v-model="state.loading" />
        loadingIcon: <HstText v-model="state.loadingIcon" />
        link: <HstCheckbox v-model="state.link" />
        severity: <HstText v-model="state.severity" />
        raised: <HstCheckbox v-model="state.raised" />
        rounded: <HstCheckbox v-model="state.rounded" />
        text: <HstCheckbox v-model="state.text" />
        outlined: <HstCheckbox v-model="state.outlined" />
        size: <HstText v-model="state.size" />
        plain: <HstCheckbox v-model="state.plain" />
        pt: <HstText v-model="state.pt" />
        ptOptions: <HstText v-model="state.ptOptions" />
        unstyled: <HstCheckbox v-model="state.unstyled" />

      </template>
    </Variant>
  </Story>
</template>