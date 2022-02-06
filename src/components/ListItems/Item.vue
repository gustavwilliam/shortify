<template>
  <div
    class="even:bg-white break-all dark:even:bg-gray-800 odd:bg-gray-50 dark:odd:bg-gray-750 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
  >
    <dt class="text-sm font-medium text-gray-500 dark:text-gray-300">
      {{ short }}
    </dt>
    <dd
      class="mt-1 text-sm text-gray-900 dark:text-gray-50 sm:mt-0 sm:col-span-2"
    >
      <a :href="long" target="_blank" class="hover:underline">{{ long }}</a>
    </dd>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    short: {
      type: String,
      required: true,
    },
    long: {
      type: String,
      required: true,
    },
  },
});
</script>
