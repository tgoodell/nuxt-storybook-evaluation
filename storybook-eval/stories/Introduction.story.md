---
group: 'top'
icon: 'carbon:bookmark'
---

# Welcome!

This site is a test bed to evaluate the [React Storybook](https://storybook.js.org) alternative [Histoire](https://histoire.dev), written in Vue. 

---

Here, you can find stories of [Primevue](https://primevue.org) components with relevant variants. Below are some relevant features of Histoire. 

- Create stories showcasing components
    - Each story has a nonzero number of variants
    - The fields of each variant can be modified, saved & loaded, and are rendered in real time
    - Source code is also rendered, so it can be copy and pasted into the main application
    - Each variant can have its own documentation and event monitoring

Other takeaways and observations:

- States are neat
    - They are saved and maintained between server restarts
    - The thing about restoring states is that it only works at the moment with fields that are not saved as null
        - If they are 'saved' as null, then they are not restored and the previous value of the field is maintained
- Markdown rendering
    - Standalone md pages are only refreshed when the server restarts
    - md sections in *.story.vue pages dynamically refresh