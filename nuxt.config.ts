import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: true, //default behavior but okay para sure
  modules: [
    '@nuxtjs/strapi',
  ],
  plugins: [
    
  ],
  strapi: {
    url: process.env.STRAPI_URL || 'https://strapi-nacci.onrender.com'
  },
  css: [
    'assets/pico/custom_pico.css',
    'assets/bootstrap-grid/css/pico-bootstrap-grid.min.css'
  ],
  app: {
    head: {
      title: 'Nature Awareness & Conservation Club, Inc.',
      meta: [
        { name: 'description', content: ' '} //TODO: insert desc
      ],
      link: [
        {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0"}
      ]
    }
  },
});