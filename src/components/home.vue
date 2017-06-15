<template>
    <div  style="width: 100%">
      <!--<v-header></v-header>-->
      <v-nav></v-nav>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
  import header from '../components/header.vue'
  import nav from '../components/nav.vue'
    export default{
        data(){
            return {}
        },
        components: { 'v-header': header,
          'v-nav': nav}
    }
</script>
<style>
   .content{
   }
</style>
