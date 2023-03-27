<script>
import MainFilterComponent from './MainFilterComponent.vue';
import CardListComponent from './CardListComponent.vue';
export default {
    components: {
        MainFilterComponent,
        CardListComponent,
    }
}
</script>

<template>
    <main class="py-4">
        <div class="container">
            <div class="row">
                <MainFilterComponent class="select-form" />
            </div>
            <div class="row my-4 p-5 card-list">
                <div class="row">
                    <div class="col">
                            <div class="founded">Found XX cards</div>
                    </div>
                </div>    
                <div class="row row-cols-5">
                    <CardListComponent />
                </div>

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

    .founded {
        background-color: #000;
        color: #fff;
        padding: 1.25rem;
        font-weight: 600;
    }

    .card-list {
        background-color: #fff;
    }
}
</style>