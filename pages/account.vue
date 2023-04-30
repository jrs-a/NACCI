<template>
    <div>
        <p>account</p>
        <button @click="logout">Logout</button>
    </div>
</template>

<script setup>
const client = useSupabaseClient()

const logout = async () => {
    client.auth.signOut(); 
    navigateTo('/')
}
</script>

<style scoped>

</style>