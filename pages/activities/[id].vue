<template>
    <ActivityDetails :activity="activity"/>
</template>

<script setup>
const { id } = useRoute().params
const { findOne } = useStrapi()
const response = await findOne('activities', id, {populate: { CoverPhoto: true}})
const activity = ref(response.data)

if(!activity.value) {
    console.log('helo')
    throw createError({ statusCode: 404, statusMessage: 'Activity not found', fatal: true })
}

</script>

<style scoped></style>