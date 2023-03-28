<script>
import { store } from '../store';
    export default {
      data(){
        return {
            store,
        }
    },
    }
</script>

<template>
    <select class="form-select" aria-label="Default select example" v-model="store.selected" @change="$emit('filter')">
      <option selected value="">Open this select menu</option>
      <option v-for="archetype in store.archetypes">{{ archetype.archetype_name }}</option>
    </select>
</template>