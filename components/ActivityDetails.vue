<template>
    <div class="row row-cols-lg-2 row-cols-md-1">
        <section class="col col-lg-7">
            <section>
                <hgroup>
                    <h1>{{ activity.attributes.Title }}</h1>
                    <p>{{ date }}</p>
                </hgroup>
            </section>
            <div v-html="activity.attributes.Body"></div>
        </section>
        <section class="col-lg-auto">
            <article>
                <h3>Request this reservation</h3>
                <form>
                    <label for="name">Group Name:</label>
                    <input type="text" id="name" v-model="name">
                    
                    <label for="location">Location:</label>
                    <input type="text" id="location" v-model="location">
                    
                    <label for="date">Date:</label>
                    <input type="date" id="date" v-model="date">
                    
                    <label for="participants">Participants:</label>
                    <input type="text" id="participants" v-model="participants">
                    
                    <label for="pointPerson">Point Person:</label>
                    <input type="text" id="pointPerson" v-model="pointPerson">
                    
                    <label for="contact">Contact:</label>
                    <input type="text" id="contact" v-model="contact">
                    
                    <button type="submit" v-on:click="onSubmit">Confirm request this reservation</button>
                </form>
            </article>
        </section>
    </div>
    
</template>

<script setup lang="ts">
const { activity } = defineProps(['activity'])
const date = formatDate(activity.attributes.updatedAt)

import { ref } from 'vue';

activity.attributes.location

const name = ref('');
const location = ref('');
const inputdate = ref('');
const participants = ref('');
const pointPerson = ref('');
const contact = ref('');

const { create } = useStrapi()

const onSubmit =async () => {
    await create('reservations', {
        'Name': name,
        'Location': location,
        'Date': inputdate,
        'Participants': participants,
        'PointPerson': pointPerson,
        'Contact': contact
    })
    await useFetch("https://strapi-nacci.onrender.com/api/reservations",  {
        method: 'POST',
        body: {
            'Name': name,
            'Location': location,
            'Date': inputdate,
            'Participants': participants,
            'PointPerson': pointPerson,
            'Contact': contact
        }
    })


}


</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    justify-content: center;
    gap: 1em;
}
</style>