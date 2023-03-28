import { reactive } from "vue";

export const store = reactive({
    cards: [],
    archetypes: [],
    count: 1,
    selected: '',
    cardFound: 0
})