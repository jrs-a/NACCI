<template>
    <h1 style="text-align: center;">Hello! Welcome to NACCI</h1>
</template>

<script setup>
definePageMeta({
    middleware: ['auth']
})
const user = useSupabaseUser()
onMounted(() => {
    watchEffect(() => {
        if (!user.value) {
            navigateTo('/')
        }
    })
})
</script>

<style scoped>

</style> 