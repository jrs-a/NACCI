<template>
    <div>
        <p>error breh {{error.statusCode}} {{error.message}}</p>
        <button>return to home page</button>
    </div>
</template>

<script setup>
    defineProps(['error'])
    const handleClearError = () => clearError({redirect: '/'})
</script>

<style lang="scss" scoped>

</style>