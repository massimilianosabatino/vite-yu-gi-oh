<script>
import CardSingleComponent from './CardSingleComponent.vue';
import { store } from '../store';
export default {
    props: {
        newArray: Array,
    },
    components: {
        CardSingleComponent,
    },
    data(){
        return {
            store,
        }
    },
}
</script>
<template>
    <div class="col mb-3" v-for="card in newArray">
        <CardSingleComponent :title="card.name" :archetype="card.archetype" :url="card.card_images[0].image_url"/>
    </div>
</template>
<style lang="scss" scoped></style>