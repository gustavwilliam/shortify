<template>
  <TheNavbar
    :navigation="[
      { name: 'Home', href: '/', current: true },
      { name: 'GitHub', href: 'https://gh.godi.se/shortify', current: false },
    ]"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheNavbar from "@/components/TheNavbar.vue";

export default defineComponent({
  name: "App",
  components: { TheNavbar },
});
</script>
