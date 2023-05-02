<template>
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
  const { data: reservations, refresh } = await useFetch('https://strapi-nacci.onrender.com/api/reservations')

  const {create} = useStrapi()

  const createreservation = async () => {
    console.log('hello')
    await create('reservation', { Name: groupname.value, Location: location.value, Date: date.value, Participants: participants.value, PointPerson: pointperson.value, Contact: contact.value })

}
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
  article {
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  </style>