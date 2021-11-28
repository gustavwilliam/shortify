<template>
  <div>
    <label
      for="input-field"
      class="block text-sm font-medium text-gray-700 ml-1"
    >
      {{ title }}
    </label>
    <div class="mt-1 flex rounded-md shadow-sm">
      <span
        v-if="prefixText"
        class="inline-flex items-center px-3 border border-r-0 rounded-l-md border-gray-300 bg-gray-50 text-gray-500 text-sm"
      >
        {{ prefixText }}
      </span>
      <input
        :type="inputType"
        name="input-field"
        id="input-field"
        @input="$emit('update:modelValue', $event.target.value)"
        :value="modelValue"
        class="focus:ring-blue-twitter focus:border-blue-twitter flex-1 block w-full sm:text-sm border-gray-300"
        :class="prefixText ? 'rounded-r-md' : 'rounded-md'"
        :placeholder="placeholder"
      />
    </div>
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
    modelValue: {},
  },

  emits: ["update:modelValue"],
});
</script>
