<template>
  <Menu mode="horizontal" theme="dark" active-name="1">
    <Menu-item name="1">
      <Icon type="ios-paper"></Icon><router-link to="/acquisition">
      信息采集</router-link>
    </Menu-item>
    <Menu-item name="2">
      <Icon type="ios-people"></Icon><router-link to="/identify">
      人员认证</router-link>
    </Menu-item>
   <Menu-item name="3">
      <Icon type="ios-people"></Icon><router-link to="/check">
     人员查看</router-link>
    </Menu-item>
    <Menu-item name="4">
      <Icon type="ios-people"></Icon><router-link to="/analyse">
      报表分析 </router-link>
    </Menu-item>
    <Menu-item name="5">
      <Icon type="ios-people"></Icon><router-link to="/manage">
      系统管理</router-link>
    </Menu-item>


  </Menu>

</template>
<script type="text/ecmascript-6">

    export default{
        data(){
            return {}
        },
        components: {}
    }
</script>
<style scoped>
  .ivu-menu{
    display: flex;
  }
    .ivu-menu-item{
      flex: 1;
      text-align: center;
    }
  .ivu-menu-item:hover{
    font-size: 20px;

  }
  a:hover{
    color: #fff;
  }
  .ivu-menu-item-selected a{
    color: #fff !important;
  }
</style>
