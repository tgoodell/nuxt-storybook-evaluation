<script setup>
const props = defineProps({
  state: {
    type: Object,
    default: {},
  },
})
</script>

<template>
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