<template>
    <section>
        <hgroup>
            <h1>{{ activity.attributes.Title }}</h1>
            <p>{{ date }}</p>
        </hgroup>
    </section>
    <div v-html="activity.attributes.Body"></div>
</template>

<script setup>
const { activity } = defineProps(['activity'])
const date = formatDate(activity.attributes.updatedAt)
</script>

<style scoped></style>