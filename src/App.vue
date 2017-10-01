<template>
  <div id="app">
    <v-header ></v-header>
    <v-nav></v-nav>
    <div class="content">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
   import header from './components/header.vue'
   import nav from './components/nav.vue'
  export default {
    name: 'app',


    components: {
       'v-header': header,
       'v-nav': nav
    },
    watch:{
      '$route': function () {
        console.log('+++')
      }
    }
  }
</script>

<style>
.content {
  padding: 20px ;
  position: absolute;
  top: 120px;
  background: #1c2438;
  bottom: 0;
  left: 0px;
}
</style>
