<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import generateSourceCode from '../../utils/generateSourceCode'

const value = ref(null);
const inValue = ref(50);
</script>

<template>
  <Story title="Slider">
    <Variant title="Simple Slider">
        <div class="card flex justify-content-center">
            <Slider v-model="value" class="w-14rem" />
        </div>
      <!-- Template for controls has to be outside of component -->
      <!-- Controls show up in right side panel -->
      <!-- <template #controls>
        <ButtonControls :state="blankState" />
      </template> -->
    </Variant>

    <Variant title="Slider plus Input">
        <div class="card flex justify-content-center">
            <div class="w-14rem">
                <InputText v-model.number="inValue" class="w-full mb-3" />
                <Slider v-model="inValue" class="w-full" />
            </div>
        </div>
      <!-- Template for controls has to be outside of component -->
      <!-- Controls show up in right side panel -->
      <!-- <template #controls>
        <ButtonControls :state="dangerState" />
      </template> -->
    </Variant>
  </Story>
</template>

<docs lang="md">
  # Primevue Slider

  Please visit [the Primevue documentation](https://primevue.org/slider/) for specific documentation questions.
</docs>