<template>
  <div>
    <div class="center"><h2>Available Activities</h2></div>
    <div class="row row-cols-lg-3 row-cols-md-2">
      <div v-for="activity in activities.data">
        <ActivityCard :activity="activity" />
      </div>
    </div>
    
  </div>
</template>

<script setup>
const { data: activities, refresh } = await useFetch('https://strapi-nacci.onrender.com/api/activities?populate=*')
</script>

<style scoped>
.center {
  text-align: center;
}
article {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
</style>