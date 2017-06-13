<template>
  <div style="height: 60px">
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

    <Dropdown style="margin-left: 20px"   >
      <a href="javascript:void(0)" class="logout-button">
        下拉菜单
      </a>

      <Dropdown-menu slot="list">
        <Dropdown-item  @click='lala'>退出</Dropdown-item>

      </Dropdown-menu>
    </Dropdown>
  </Menu>
  </div>
</template>
<script type="text/ecmascript-6">

    export default{
        data(){
            return {}
        },
      methods:{
            lala(){
                alert('++++++')
            }
      },
        components: {}
    }
</script>
<style scoped>
  .ivu-menu{
    display: flex;
    box-shadow: 0 2px 4px 0 rgba(70, 76, 91, .52), 0 0 6px 0 rgba(70, 76, 91,.04)
  }
    .ivu-menu-item{
      flex: 1;
      text-align: center;
    }
  .ivu-menu-item:hover{
    font-size: 20px;

  }
  a:hover{
    color: #fff !important;
  }
  .ivu-menu-item-selected a{
    color: #fff !important;
  }
  .ivu-menu-light {
    background: #00d1b2;
  }
</style>
