<script>
import MainFilterComponent from './MainFilterComponent.vue';
import CardListComponent from './CardListComponent.vue';
import LoaderAppComponent from './LoaderAppComponent.vue';
import axios from 'axios';
import { store } from '../store';
export default {
    components: {
        MainFilterComponent,
        CardListComponent,
        LoaderAppComponent,
    },
    data(){
        return {
            store,
            byArchetype: []
        }
    },
    methods: {
        addPagination(){
            this.store.count += 1;
            this.moreContent();
        },
        moreContent(){
            const offsetCalc = (25 * this.store.count) + 1;

            axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=25&offset=${offsetCalc}`)
            .then((response) => {
                const newItems = response.data.data;
                this.store.cards.push(...newItems);
            })
        }
    },
    computed: {
        filterArchetype(){
            if (this.store.selected !== ''){
                console.log('click')
                this.store.cardFound
                return this.store.cards.filter((el) => el.archetype === this.store.selected)
            } else {
                return this.store.cards
            }
        }
    }
}
</script>

<template>
    <main class="py-4">
        <div class="container">
            <div class="row">
                <MainFilterComponent class="select-form" @filter="filterArchetype" />
            </div>
            <div class="row my-4 p-5 card-list">
                <div class="row">
                    <div class="col">
                            <div class="founded">Found {{filterArchetype.length}} cards</div>
                    </div>
                </div>    
                <div class="row row-cols-5">
                    <div class="text-center w-100" v-if="store.cards.length === 0">
                        <LoaderAppComponent />
                    </div>
                    <CardListComponent v-else v-cloak :newArray="filterArchetype"/>
                </div>
                <button type="button" class="btn btn-dark" @click="addPagination">show more</button>

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