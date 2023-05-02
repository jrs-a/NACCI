<template>
    <div class="container">
        <h3>Login to access the reservation features</h3>
        <form @submit.prevent="() => (isSignUp ? signUp() : login())">
            <input type="email" placeholder="E-mail" v-model="email"/>
            <input type="password" placeholder="Password" v-model="password"/>
            <button type="submit">
                <span v-if="isSignUp">Sign Up</span>
                <span v-else>Log In</span>
            </button>
        </form>
        <button @click="isSignUp = !isSignUp">
            <span v-if="isSignUp">Have an account? Log In instead</span>
            <span v-else> Create a new account</span>
        </button>
    </div>
</template>

<script setup>
const email = ref('')
const password = ref('')
const isSignUp = ref(false)
const client = useSupabaseClient()

const signUp = async () => {
    const {user, error} = await client.auth.signUp({
        email: email.value,
        password: password.value,
    })
    console.log('user', user)
    console.log('error', error)
}

const login = async () => {
    const {user, error} = await client.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    })
    console.log('user', user)
    console.log('error', error)
}

const user = useSupabaseUser()
onMounted(() => {
    watchEffect(() => {
        if (user.value) {
            navigateTo('/home')
        }
    })
})

</script>

<style scoped>
.container {
    max-width: 400px;
}
</style>