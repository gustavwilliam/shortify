<template>
  <TheNavbar
    :navigation="[
      {
        name: 'Add new',
        href: '/#',
        current: isPathActive('/'),
      },
      {
        name: 'List',
        href: '/#list',
        current: isPathActive('/list'),
      },
      { name: 'GitHub', href: 'https://gh.godi.se/shortify', current: false },
    ]"
    @navigate="path = $event"
  />
  <div>
    <div
      class="max-w-2xl mx-auto py-12 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <LinkCreator v-show="isPathActive('/')" />
      <ListItems v-show="isPathActive('/list')" :items="items" />
    </div>
  </div>
  <TheFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import LinkCreator from "@/components/LinkCreator/LinkCreator.vue";
import ListItems from "@/components/ListItems/ListItems.vue";

import { collection, getDocs } from "firebase/firestore";
import { database } from "@/scripts/firebase";

const paths: Record<string, Array<string>> = {
  "/": ["", "/", "/#"],
  "/list": ["/#list", "#list"],
};

export default defineComponent({
  name: "App",
  components: { TheNavbar, TheFooter, LinkCreator, ListItems },
  data() {
    return {
      path: window.location.hash,
      items: [{ short: "", long: "" }],
    };
  },

  setup() {
    return {
      paths,
    };
  },

  methods: {
    async getItems() {
      const querySnapshot = await getDocs(collection(database, "urls"));
      return querySnapshot.docs.map((doc) => {
        return {
          short: doc.get("short"),
          long: doc.get("long"),
        };
      });
    },
    isPathActive(testPath: string): boolean {
      console.log("Testint");
      return paths[testPath].indexOf(this.path) != -1;
    },
  },

  async created() {
    // console.log(await this.getItems());
    this.items = await this.getItems();
  },
});
</script>
