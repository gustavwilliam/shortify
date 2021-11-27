<template>
  <div class="shadow rounded-lg overflow-hidden">
    <div class="bg-white px-6 py-5">
      <h1
        class="mb-5 leading-8 font-bold tracking-tight text-gray-900 text-2xl"
      >
        Shorten a URL
      </h1>
      <div class="grid md:grid-cols-2 gap-5">
        <Field
          title="Full URL"
          placeholder="https://google.com/page"
          inputType="url"
        />
        <Field
          title="Shortened URL"
          placeholder="short-link"
          prefixText="s.godi.se/"
        />
      </div>
    </div>
    <div class="px-6 py-5 bg-gray-50 text-left">
      <button
        type="submit"
        class="inline-flex justify-center py-2 px-4 w-full sm:w-auto border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-twitter hover:bg-blue-twitter-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-twitter"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Field from "./Field.vue";

export default defineComponent({
  components: { Field },
});
</script>
