<script setup>
const props = defineProps({
  state: {
    type: Object,
    default: {},
  },
})
</script>

<template>
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
</template>