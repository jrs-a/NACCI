<template>
    <ActivityDetails :activity="activity"/>
</template>

<script setup>

const { id } = useRoute().params
const { findOne } = useStrapi()
const response = await findOne('activities', id, {populate: { CoverPhoto: true}})
const activity = ref(response.data)

</script>

<style scoped></style>