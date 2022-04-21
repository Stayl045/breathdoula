import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [],
  components: [
    "~/components/header",
    "~/components/footer",
    "~/components/cards",
    "~/components/carousel",
  ],
  buildModules: ["@nuxtjs/tailwindcss", "@formkit/nuxt"],
  modules: [],
});
