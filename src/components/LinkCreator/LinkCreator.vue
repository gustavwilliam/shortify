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
          :errorMessage="errorMsgFullUrl"
          v-model="fullURL"
        />
        <Field
          title="Shortened URL"
          placeholder="short-link"
          prefixText="s.godi.se/"
          :errorMessage="errorMsgShortUrl"
          v-model="shortURL"
        />
      </div>
    </div>
    <div class="px-6 py-5 bg-gray-50 text-left">
      <button
        type="submit"
        class="inline-flex justify-center py-2 px-4 w-full sm:w-auto border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-twitter hover:bg-blue-twitter-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-twitter"
        @click="addData"
      >
        Save
      </button>
      <p class="text-sm text-green-600 mt-2" v-show="showSuccessMsg">
        Successfully saved.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { doc, setDoc } from "firebase/firestore";
import Field from "./Field.vue";
// eslint-disable-next-line
import { database } from "@/scripts/firebase";

export default defineComponent({
  components: { Field },
  data() {
    return {
      fullURL: "",
      shortURL: "",
      errorMsgFullUrl: "",
      errorMsgShortUrl: "",
      showSuccessMsg: false,
    };
  },

  methods: {
    isValidURL(link: string): boolean {
      try {
        let url = new URL(link);
        return url.protocol === "http:" || url.protocol === "https:";
      } catch (_) {
        return false;
      }
    },
    async addData(): Promise<void> {
      if (!this.isValidURL(this.fullURL)) {
        this.errorMsgFullUrl =
          "Please enter a valid URL. Include the 'https://'-part";
      } else if (!/^[A-Za-z0-9_-]+$/.test(this.shortURL)) {
        console.log("ShortURL fail");
        this.errorMsgShortUrl = "Please use only a-z, A-Z, - and _.";
      } else {
        try {
          await setDoc(doc(database, "urls", this.shortURL), {
            short: this.shortURL,
            long: this.fullURL,
          });
          this.fullURL = "";
          this.shortURL = "";
          this.showSuccessMsg = true;
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    },
  },

  watch: {
    fullURL: function () {
      this.errorMsgFullUrl = "";
      if (this.fullURL !== "") {
        this.showSuccessMsg = false;
      }
    },
    shortURL: function () {
      this.errorMsgShortUrl = "";
      if (this.shortURL !== "") {
        this.showSuccessMsg = false;
      }
    },
  },
});
</script>
