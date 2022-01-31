<template>
  <div>
    <label
      for="input-field"
      class="block text-sm font-medium text-gray-700 ml-1 dark:text-gray-300"
    >
      {{ title }}
    </label>
    <div class="mt-1 flex rounded-md shadow-sm">
      <span
        v-if="prefixText"
        class="inline-flex items-center px-3 border border-r-0 rounded-l-md border-gray-300 bg-gray-50 text-gray-500 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-700 text-sm"
      >
        {{ prefixText }}
      </span>
      <input
        :type="inputType"
        name="input-field"
        autocomplete="off"
        id="input-field"
        @input="$emit('update:modelValue', $event.target.value)"
        :value="modelValue"
        class="focus:ring-blue-twitter focus:border-blue-twitter flex-1 block w-full sm:text-sm dark:text-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 invalid:border-red-400"
        :class="prefixText ? 'rounded-r-md' : 'rounded-md'"
        :pattern="validationPattern"
        :placeholder="placeholder"
      />
    </div>
    <p class="text-red-500 text-sm ml-1 mt-1">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Field",
  props: {
    title: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    prefixText: {
      type: String,
      required: false,
    },
    inputType: {
      type: String,
      required: false,
      default: "text",
    },
    validationPattern: {
      type: RegExp,
      required: false,
    },
    errorMessage: {
      type: String,
      required: true,
    },
    modelValue: {},
  },

  emits: ["update:modelValue"],
});
</script>
