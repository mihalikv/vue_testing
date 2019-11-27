<template>
    <div>
        <h1>{{ message }}</h1>
        <huge-component/>
    </div>
</template>

<script>
    import HugeComponent from "./HugeComponent.vue";

    export default {
        name: "App",
        data() {
            return {
                message: 'Hello Vue!'
            }
        },
        components: {
            HugeComponent
        }
    }
</script>

<style scoped>

</style>