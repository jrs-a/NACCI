<template>
    <div class="container">
        <section><h1>Hello! Welcome to NACCI</h1></section>
        <div class="content">
            <article>
                <p>Login or sign up to access reservation features</p>
                <nuxt-link role="button" to="/login">Login</nuxt-link>
            </article>
            <article>
                <p>Or access available activities without signing in</p>
                <nuxt-link role="button" to="/activities">Activities</nuxt-link>
            </article>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
section {
    text-align: center;
}
.content {
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    column-gap: 1em;
    justify-content: space-around;
}
article {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

</style> 