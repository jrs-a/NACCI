<template>
    <section>
        <nav class="container-fluid">
            <ul>
                <li><strong>NACCI</strong></li>
            </ul>
            <ul>
                <li><nuxt-link to="/home">Home</nuxt-link></li>
                <li><nuxt-link to="/about">About</nuxt-link></li>
                <li><nuxt-link to="/activities">Activities</nuxt-link></li>
                <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                <li><nuxt-link to="/account" role="button" class="outline">My Account</nuxt-link></li>
            </ul>
        </nav>
    </section>

    <!-- page content starts here -->
    <div class="container">
        <slot />
    </div>
</template>