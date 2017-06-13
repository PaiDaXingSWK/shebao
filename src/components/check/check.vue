<template>
    <div>

      <v-peopleList></v-peopleList>
    </div>
</template>
<script type="text/ecmascript-6">
  import peopleList from '../peopleList.vue'
    export default{
        data(){
            return {}
        },
        components: {'v-peopleList':peopleList}
    }
</script>
<style>
    body {
    }
</style>
