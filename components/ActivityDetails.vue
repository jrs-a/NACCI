<template>
    <section>
        <hgroup>
            <h1>{{ activity.attributes.Title }}</h1>
            <p>{{ date }}</p>
        </hgroup>
    </section>
    <section>
        <div v-html="activity.attributes.Body"></div>
    </section>
</template>

<script setup>
const { activity } = defineProps(['activity'])
const date = formatDate(activity.attributes.updatedAt)
</script>

<style scoped></style>