<template>
  <div>

    <div class="module"  >

      <div class="module-wrapper">

        <div class="module-header">
          <img src="../images/company-logo.png" alt="" class="module-img"><span class="company-name">西安圣点科技</span>
          <span class="word">社保参保人员指静脉识别一体化系统</span> <span class="cover"></span></div>
        <ul class="module-list">
          <li class="border-right " @click="packUp">
            <span class="ico"><Icon type="person" /></span>

            信息采集</li>
          <li class="  no-left" @click="acquisition">
            <span class="ico-search"><Icon type="search" /></span>

            人员信息</li>
          <li class="border-right border-top" @click="analyse">
            <span class="ico-text"><Icon type="document-text" /></span>
            报表分析</li>
          <li class="no-left border-top" @click="manage">
            <span class="ico-gear"><Icon type="ios-gear" /></span>
            核心管理</li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">

  export default{
    data(){
      return {

      }
    },
    methods: {
      packUp(){
        this.$router.push({path: 'pickUp'})
      },
      acquisition(){
        this.$router.push({path: 'acquisition'})
      },
      analyse(){
        this.$router.push({path: 'analyse'})
      },
      manage(){
        this.$router.push({path: 'manage'})
      }
    },
    components: {}
  }
</script>
<style scoped>
  .ico{
    font-size: 140px;
    position: absolute;
    top: 80px;
    left: 45px;
  }
  .module {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #ebebeb;
    z-index: 9;
  }
.cover{
  position: absolute;
   top:0;
  left: 0;
  opacity: .7;
  width: 100%;
  height: 100%;
  background: gray;
}
  .module-wrapper {
    width: 800px;
    height: 500px;

    border-radius: 10px;
    margin: 200px auto;
    position: relative;
    box-shadow: 0 9px 30px -6px rgba(0, 0, 0, 0.2), 0 18px 20px -10px rgba(0, 0, 0, 0.4), 0 18px 20px -10px rgba(0, 0, 0, 0.4), 0 10px 20px -10px rgba(0, 0, 0, 0.4)
  }
  .word{
    position: relative;
    z-index: 999;
  }
  .company-name{
    color: #fff;
    z-index: 999;
    position: absolute;
    font-size: 20px;
    top: -70px;
    left: 50px;
    font-family: cursive;
  }
  .module-img{
    position: absolute;
    left: 10px;
    top: 5px;
    z-index: 999;
    width: 40px;
    height: 40px;
  }
  .ico-gear,.ico-text,.ico-search{
    position: absolute;
    top: 80px;
    font-size: 140px;
  }
  .module-header{
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    width: 800px;
    height: 200px;
    position: relative;
    color: #fff;
    font-size: 40px;
    line-height: 200px;
    text-align: center;
    background:url("../images/banner.png") no-repeat;
    background-size:cover ;
    z-index: 99;
  }
  .module-list li {
    display: inline-block;
    list-style: none;
    float: left;
    width: 25%;
    cursor: pointer;
    height: 300px;
line-height: 480px;
    font-size: 25px;
    text-align: center;
    background: #fff;
    font-weight: 600;
    transition: .4s linear all;
  }

  .module-list li:hover{

    background: rgba(0,0,0,.05);
  }

   .module-list li:nth-child(4){
    border-radius: 0 0 5px 0;
  }  .module-list li:nth-child(1){
    border-radius: 0 0 0 5px;
  }

</style>
