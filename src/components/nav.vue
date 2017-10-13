<template>
  <div class="navWrapper"  >
    <div class="logo">

      <span class="shengdian">
        管理系统
      </span>
    </div>
    <div style="margin: 0 auto ;width: 70%">
  <Menu mode="horizontal" class="navMainWrapper" theme="dark" :active-name="setActive"  :default-active="onRoutes" @on-select="routeTo">

   <!-- <Menu-item name="identify">
      <Icon type="ios-people"></Icon>
      人员认证
    </Menu-item>-->
   <Menu-item name="pickUp">
      <Icon type="ios-people"></Icon>
     第一个
    </Menu-item>
    <Menu-item name="acquisition">
      <Icon type="ios-paper"></Icon>
      第二个
    </Menu-item>
    <Menu-item name="analyse">
      <Icon type="ios-people"></Icon>
      地上那个
    </Menu-item>
    <Menu-item name="manage" >
      <Icon type="ios-people"></Icon>
      地下哪个
    </Menu-item>


  </Menu>
    </div>
    <div style="line-height:60px;float: right">

      <Dropdown trigger="click"   style="margin-right: 20px">
        <a href="javascript:void(0)" style="color: #fff">
          账户管理
          <Icon type="arrow-down-b"></Icon>
        </a>
        <Dropdown-menu slot="list">
          <Dropdown-item><p @click="showOut=true">退出</p></Dropdown-item>

        </Dropdown-menu>
      </Dropdown>

    </div>
    <Modal
      v-model="showOut"
      title="派大星系统"
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
        routeTo(e) {
          //console.log(e);
          this.$router.push(e);
        },
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
        },
        setActive() {
          return this.$route.path.replace('/','');
        }
      }
    }
</script>
<style scoped>
  .navMainWrapper{
     box-shadow: 0 0px 0px 0 rgba(70, 76, 91,.04) !important;
  }
  .navWrapper{
    box-shadow: 0 4px 10px 0 rgba(70, 76, 91, .52), 0 0 6px 0 rgba(70, 76, 91,.04);
    height: 70px;background: #1c2438;width: 100%; display: flex
  }
  .logo{
    float: left;
    line-height: 60px;
    margin-left: 20px;
    margin-top: 10px;
    display: table;
  }
  .logo img{

  }
  .shengdian {
    color: #fff;
    font-size: 30px;
    position: relative;
    top: -10px;
  }
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
