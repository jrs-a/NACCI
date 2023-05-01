<template>
    <article>
      <h5>{{ reservation.attributes.Name }}</h5>
      <ul>
        <li>Location: {{ reservation.attributes.Location }}</li>
        <li>Date: {{ reservation.attributes.Date }}</li>
        <li>No. of Participants: {{ reservation.attributes.Participants }}</li>
        <li>Name of Point Person: {{ reservation.attributes.PointPerson }}</li>
        <li>Contact Info: {{ reservation.attributes.Contact }}</li>
      </ul>
    </article>
  </template>
  
  <script setup>
  const { reservation } = defineProps(['reservation'])
  </script> 
  
  <style scoped>
  
  </style>