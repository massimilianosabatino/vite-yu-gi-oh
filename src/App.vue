<script>
  import HeaderAppComponent from './components/HeaderAppComponent.vue';
  import MainAppComponent from './components/MainAppComponent.vue';
  import FooterAppComponent from './components/FooterAppComponent.vue';
  import axios from 'axios';

  export default { 
    components: {
      HeaderAppComponent,
      MainAppComponent,
      FooterAppComponent
    },
    created() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      .then((response) => {
        console.log(response)
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
