<script>
    import MainFilterComponent from './MainFilterComponent.vue';
    export default {
        components: {
            MainFilterComponent,
        }
    }
</script>

<template>
    <main class="py-4">
        <div class="container">
            <div class="row">
                <MainFilterComponent class="select-form"/>
            </div>
            <div class="row">
                
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    main {
        background-color: #D48F38;

        .select-form {
            max-width: 15.625rem;
        }
    }
</style>