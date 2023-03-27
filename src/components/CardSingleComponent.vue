<script>
    export default {
        props: {
            title: String,
            url: String,
            archetype: String,
        }
    }
</script>
<template>
    <div class="single">
        <img :src="url" class="img-fluid" :alt="title">
        <h2>{{ title }}</h2>
        <h3>{{ archetype }}</h3>
    </div>
    <!-- <div class="single">
        <img src="https://via.placeholder.com/300x500" class="img-fluid" alt="title" >
        <h2>Titolo carta</h2>
        <h3>archetype</h3>
    </div> -->
</template>
<style lang="scss" scoped>
    .single {
        background-color: #D48F38;
        text-align: center;
        height: 500px;
    }

    h2 {
        font-size: 1.125rem;
        font-weight: 800;
        text-transform: uppercase;
        padding-top: 1.875rem;
        color: #fff;
    }

    h3 {
        font-size: 1.5rem;
        padding: 2.1875rem 0 4.6875rem 0;
    }
</style>