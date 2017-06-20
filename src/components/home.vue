<template>
    <div  style="width: 100%">
      <!--<v-header></v-header>-->
      <div class="nav">
      <v-nav></v-nav>
      </div>
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
<style scoped>
  .nav{
    box-shadow: 0 2px 4px 0 rgba(70, 76, 91, .52), 0 0 6px 0 rgba(70, 76, 91, .04);
    height: 80px;
    background: #ebebeb;
  }
   .content{
   }
</style>
