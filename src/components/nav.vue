<template>
  <div style="height: 60px">
  <Menu mode="horizontal" theme="dark" active-name="1" :default-active="onRoutes">
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
    <Menu-item name="5" >
      <Icon type="ios-people"></Icon><router-link to="/manage">
      系统管理</router-link>
    </Menu-item>

    <Dropdown trigger="click" :visible="visible" style="margin-left: 20px">
      <a href="javascript:void(0)" @click="handleOpen">
        custom 触发
        <Icon type="arrow-down-b"></Icon>
      </a>
      <Dropdown-menu slot="list">

        <div style="text-align: right; margin-right: 15px;">
          <Button type="primary" @click="showOut=true">退出</Button>
        </div>
      </Dropdown-menu>
    </Dropdown>
  </Menu>
    <Modal
      v-model="showOut"
      title="社保参保人员指静身份识别一体化系统"
      @on-ok="ok"
      @on-cancel="cancel">
      <p>确定退出?</p>

    </Modal>
  </div>
</template>
<script type="text/ecmascript-6">

    export default{
        data(){
            return {
              showOut:false,
              visible: false
            }
        },
      methods:{
        handleOpen () {
          this.visible = true;
        },
        handleClose () {
          this.visible = false;
        },
        ok(){

          this.$router.push({ path: '/login' })
        }
      },
        components: {},
      computed:{
        onRoutes(){
          return this.$route.path.replace('/','');
        }
      }
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
  .ivu-menu-item a{
    color: #fff;
  }
  .ivu-menu-item-selected a{
    font-size: 20px;
  }
  a:hover{
    color: #fff !important;
  }

  .ivu-menu-light {
    background: #00d1b2;
  }
</style>
