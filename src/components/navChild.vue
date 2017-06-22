<template>
    <div>

      <div class="list-content" style="box-shadow: 2px 10px 18px #333333;" >

        <Menu width='200px ' :active-key="nowPath" theme='dark'>
          <Menu-item :key="menu.link" @click='menuRoute(menu.link)' v-for='menu in sideMenus'>

            {{menu.value}}
          </Menu-item>
        </Menu>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">

    export default{
        data(){
            return {
              sideMenus: {
                type: Array,
                default: function() {
                  return []
                },
                required: true
              },
            }
        },
        components: {}
    }
</script>
<style>
  .list-content{
    position: absolute;
    top:70px;
    left: 0;
    bottom:0;
    background: #1c2438;
    margin-bottom: 10px;
  }
</style>
