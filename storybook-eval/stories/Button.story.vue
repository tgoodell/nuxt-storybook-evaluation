<script lang="ts" setup>
import { reactive, ref } from 'vue'
import Button from 'primevue/button';

const state = reactive({
  disabled: false,
  style: null,
  class: null,
  label: "Hello World",
  icon: null,
  iconPos: "left",
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

const message = ref('Meow!')
</script>

<template>
  <Story>
    <Variant>
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
        Disabled: <input type="checkbox" v-model="state.disabled" />
        <div>style: <input type="text" v-model="state.style" /></div>
        <div>class: <input type="text" v-model="state.class" /></div>
        <div>label: <input type="text" v-model="state.label" /></div>
        <div>icon: <input type="text" v-model="state.icon" /></div>
        <div>iconPos: <input type="text" v-model="state.iconPos" /></div>
        <div>iconClass: <input type="text" v-model="state.iconClass" /></div>
        <div>badge: <input type="text" v-model="state.badge" /></div>
        <div>badgeClass: <input type="text" v-model="state.badgeClass" /></div>
        <div>badgeSeverity: <input type="text" v-model="state.badgeSeverity" /></div>
        <div>loading: <input type="checkbox" v-model="state.loading" /></div>
        <div>loadingIcon: <input type="text" v-model="state.loadingIcon" /></div>
        <div>link: <input type="checkbox" v-model="state.link" /></div>
        <div>severity: <input type="text" v-model="state.severity" /></div>
        <div>raised: <input type="checkbox" v-model="state.raised" /></div>
        <div>rounded: <input type="checkbox" v-model="state.rounded" /></div>
        <div>text: <input type="checkbox" v-model="state.text" /></div>
        <div>outlined: <input type="checkbox" v-model="state.outlined" /></div>
        <div>size: <input type="text" v-model="state.size" /></div>
        <div>plain: <input type="checkbox" v-model="state.plain" /></div>
        <div>pt: <input type="text" v-model="state.pt" /></div>
        <div>ptOptions: <input type="text" v-model="state.ptOptions" /></div>
        <div>unstyled: <input type="checkbox" v-model="state.unstyled" /></div>
      </template>
    </Variant>
  </Story>
</template>