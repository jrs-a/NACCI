<template>
    <div class="account">
        <h2>Account</h2>
        <button @click="logout">Logout</button>
    </div>
    <div>
      <h1>reservation</h1>
        <article>
        <form>
            <input type="name" placeholder="Group Name" v-model="groupname"/>
            <input type="location" placeholder="Location" v-model="location"/>
            <input type="date" placeholder="Date" v-model="date"/>
            <input type="participants" placeholder="No. of Participants" v-model="participants"/>
            <input type="pointperson" placeholder="Name of Point Person" v-model="pointperson"/>
            <input type="contact" placeholder="Contact Info" v-model="contact"/>
            <button @click="createreservation">Create Reservation</button>
        </form>
    </article>
      <div v-for="reservation in reservations.data">
        <ReservationCard :reservation="reservation" />
      </div>
    </div>
</template>

<script setup>
// definePageMeta({
//     middleware: ['auth']
// })
// const user = useSupabaseUser()
// onMounted(() => {
//     watchEffect(() => {
//         if (!user.value) {
//             navigateTo('/')
//         }
//     })
// })

const client = useSupabaseClient()

const logout = async () => {
    client.auth.signOut(); 
    navigateTo('/')
}
</script>

<style scoped>

</style>