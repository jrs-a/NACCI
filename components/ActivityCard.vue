<template>
  <article>
    <img :src="imgurl" alt="">
    <h5>{{ activity.attributes.Title }}</h5>
    <nuxt-link :to="`/activities/${activity.id}`" role="button">Explore this activity</nuxt-link>
  </article>
</template>

<script setup>
const { activity } = defineProps(['activity'])

const imgurl = getImgurl()

function getImgurl() {
  const url = activity.attributes
  return url === null ? 'non' : activity.attributes.CoverPhoto.data.attributes.url
}

</script> 

<style scoped>

</style>