<script>
  import HeaderAppComponent from './components/HeaderAppComponent.vue';
  import MainAppComponent from './components/MainAppComponent.vue';
  import FooterAppComponent from './components/FooterAppComponent.vue';
  import { store } from './store'
  import axios from 'axios';

  export default { 
    components: {
      HeaderAppComponent,
      MainAppComponent,
      FooterAppComponent
    },
    data(){
      return {
        store,
      }
    },
    created() {
      //Chiamate limitate per evitare ban durante le prove, prima di build rimuovere limite e sostituire metodo di paginazione
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=25&offset=0')
      .then((response) => {
        // console.log('card da axios', response.data.data);
        this.store.cards = response.data.data;
      }),
      axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
        .then((response) => {
          // console.log('archetype da axios', response.data)
          this.store.archetypes = response.data;
        })
    },
   }
</script>

<template>
  <HeaderAppComponent />
  <MainAppComponent />
  <FooterAppComponent />
</template>

<style lang="scss" scoped>

</style>
