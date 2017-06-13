<template>
  <div id="app">
    <v-header v-show="Token"></v-header>
    <v-nav v-show="Token"></v-nav>
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
    Token:'',

    components: {
       'v-header': header,
       'v-nav': nav
    },
    watch:{
      '$route': function () {
          this.Token=localStorage.getItem('token')
      }
    }
  }
</script>

<style>
.content {

}
</style>
