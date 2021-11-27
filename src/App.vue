<template>
  <TheNavbar
    :navigation="[
      { name: 'Home', href: '/', current: true },
      { name: 'GitHub', href: 'https://gh.godi.se/shortify', current: false },
    ]"
  />
  <div></div>
  <TheFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";

export default defineComponent({
  name: "App",
  components: { TheNavbar, TheFooter },
});
</script>
