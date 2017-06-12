<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>
//  import header from './components/header/header.vue'
  export default {
    name: 'app',


    components: {
     /* 'v-header': header*/
    },
    watch:{
      '$route': function () {
        console.log('+++')
      }
    }
  }
</script>

<style>
#app {

}
</style>
