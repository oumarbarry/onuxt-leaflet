export default defineNuxtConfig({
  ssr: false,

  future: { compatibilityVersion: 4 },
  compatibilityDate: "2024-08-05",

  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxt/eslint",
    "@nuxtjs/leaflet",
  ],

  eslint: { config: { standalone: false } },
})
