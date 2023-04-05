<template>
    <div>
        <header>
            <nav>
                <nuxt-link to="/">NACCI</nuxt-link>
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/about">About</nuxt-link></li>
                    <li><nuxt-link to="/activities">Activities</nuxt-link></li>
                    <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                    <li><nuxt-link to="/account">My Account</nuxt-link></li>
                </ul>
            </nav>
        </header>
        
        <!-- page content starts here -->
        <div>
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
   /*
        [] styling for active nav link
        [] use external sass
   */

</style>