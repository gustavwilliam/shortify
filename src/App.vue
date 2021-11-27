<template>
  <TheNavbar
    :navigation="[
      { name: 'Home', href: '/', current: true },
      { name: 'GitHub', href: 'https://gh.godi.se/shortify', current: false },
    ]"
  />
  <div>
    <div
      class="max-w-2xl mx-auto py-12 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <LinkCreator />
    </div>
  </div>
  <TheFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import LinkCreator from "@/components/LinkCreator/LinkCreator.vue";

export default defineComponent({
  name: "App",
  components: { TheNavbar, TheFooter, LinkCreator },
});
</script>
