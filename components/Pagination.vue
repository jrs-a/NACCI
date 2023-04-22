<template>
  <section class="navcont" v-if="totalPages > 1">
    <nuxt-link 
      role="button" 
      class="secondary material-symbols-rounded" 
      v-if="currentPage > 1" 
      :key="currentPage"
      :to="`/activities/page/${prevPage}`">
      arrow_back
    </nuxt-link>
    <nuxt-link 
      role="button" 
      class="secondary outline" 
      :class="{ 'contrast outline': indexPage == currentPage }"
      v-for="indexPage in totalPages" 
      :key="currentPage" 
      :to="`/activities/page/${indexPage}`">
      {{ indexPage }}
    </nuxt-link>
    <nuxt-link 
      role="button" 
      class="secondary material-symbols-rounded" 
      v-if="currentPage < totalPages" 
      :key="currentPage"
      :to="`/activities/page/${nextPage}`">
      arrow_forward
    </nuxt-link>
  </section>
</template>

<script setup>
defineProps({
  totalPages: Number,
  currentPage: Number,
  prevPage: Number,
  nextPage: Number
})

</script>

<style scoped>
.navcont {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
}

button {
  width: 50px;
}
</style>