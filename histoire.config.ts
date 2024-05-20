import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'
import { HstNuxt } from '@histoire/plugin-nuxt'

export default defineConfig({
  plugins: [
    HstVue(),
    HstNuxt(),
  ],
  setupFile: 'histoire.setup.ts',
  tree: {
    groups: [
      {
        id: 'top',
        title: '',
      },
      {
        title: 'Components',
        include: file => !file.title.includes('Serialize'),
      },
    ],
  },
})