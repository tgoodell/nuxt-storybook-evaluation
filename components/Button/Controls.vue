<script setup>
const props = defineProps({
  state: {
    type: Object,
    default: {},
  },
})
</script>

<template>
  style: <HstText v-model="state.style" name="style" />
  class: <HstText v-model="state.class" name="class" />
  label: <HstText v-model="state.label" name="label" />
  icon: <HstText v-model="state.icon" name="icon" />
  iconPos: <HstText v-model="state.iconPos" name="iconPos" />
  iconClass: <HstText v-model="state.iconClass" name="iconClass" />
  badge: <HstText v-model="state.badge" name="badge" />
  badgeClass: <HstText v-model="state.badgeClass" name="badgeClass" />
  badgeSeverity: <HstText v-model="state.badgeSeverity" name="badgeSeverity" />
  loading: <HstCheckbox v-model="state.loading" name="loading" />
  loadingIcon: <HstText v-model="state.loadingIcon" name="loadingIcon" />
  link: <HstCheckbox v-model="state.link" name="link" />
  severity: <HstText v-model="state.severity" name="severity" />
  raised: <HstCheckbox v-model="state.raised" name="raised" />
  rounded: <HstCheckbox v-model="state.rounded" name="rounded" />
  text: <HstCheckbox v-model="state.text" name="text" />
  outlined: <HstCheckbox v-model="state.outlined" name="outlined" />
  size: <HstText v-model="state.size" name="size" />
  plain: <HstCheckbox v-model="state.plain" name="plain" />
  pt: <HstText v-model="state.pt" name="pt" />
  ptOptions: <HstText v-model="state.ptOptions" name="ptOptions" />
  unstyled: <HstCheckbox v-model="state.unstyled" name="unstyled" />
</template>