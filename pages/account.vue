<template>
    <div>
        <h2>Account</h2>
        <button @click="logout">Logout</button>
    </div>
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

const client = useSupabaseClient()

const logout = async () => {
    client.auth.signOut(); 
    navigateTo('/')
}
</script>

<style scoped>

</style>