<template>
  <section class="row row-cols-lg-3 row-cols-md-2 ">
    <div v-for="activity in activities?.data">
      <ActivityCard :activity="activity"/>
    </div>
  </section>
  <Pagination :totalPages="pageCount" :currentPage="page" :prevPage="prevPage" :nextPage="nextPage"/>
</template>

<script setup>
const { pageIndex } = useRoute().params

const { find } = useStrapi()
const { data: activities, pending, refresh, error} = await useAsyncData(
  'activities',
  () => find('activities', {
    populate: 'CoverPhoto',
    sort: 'createdAt:desc',
    publicationState: 'live',
    pagination: {page: pageIndex, pageSize:10, withCount: true},
  })
)

const { page } = activities.value?.meta.pagination
const { pageCount } = activities.value?.meta.pagination

const prevPage = page - 1
const nextPage = page + 1

</script>

<style scoped>
</style>