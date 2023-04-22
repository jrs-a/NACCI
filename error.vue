<template>
    <div class="vcenter">
        <div class="container">
            <hgroup>
                <h1>error {{error.statusCode}}</h1>
                <h3>{{error.message}}</h3>
            </hgroup>
            <a role="button" href="/" @click="handleError">return to home page</a>
        </div>
    </div>
</template>

<script setup>
    defineProps(['error'])
    const handleError = () => clearError({ redirect: '/' })

</script>

<style lang="scss" scoped>
hgroup {
    text-align: center;
}
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.vcenter {
    height: 100vh;
    display: flex;
    align-items: center;
}
</style>