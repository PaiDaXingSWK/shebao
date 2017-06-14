<template>
  <div id="app">
   <!-- <v-header v-show="Token"></v-header>
    <v-nav v-show="Token"></v-nav>-->
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
    },
    mounted() {
      // 屏幕适应
     /* let $window = $(window).width();
      $window *= 100 / 1918;
      $('html').css('fontSize', $window);
     console.log($window)*/
    }
  }
</script>

<style>
  #app{
    overflow: hidden;
  }
.content {

}
</style>
