<template>
  <div>
    <div class="people-list">
        <div class="title">
          <span>
            人员列表
          </span>
        </div>
        <div class="list">
          <Tree :data="baseData" show-checkbox></Tree>
        </div>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
import peopleMsg from './peopleMsg.vue'
    export default{
        data(){
            return {
              modalCom:false,

            }
        },
        components: {
          'v-peopleMsg': peopleMsg
        },
      methods:{
        comMsg(){
           this.modalCom=true
        }
      }
    }
</script>
<style scoped>
  .title{
    text-align: center;
    background: deepskyblue;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    color: #fff;
  }
    .people-list {
      width: 240px;
      position: absolute;
      top:70px;
      bottom:0;
      left:0;
       background: #1c2438;
      box-shadow:2px 10px 18px #333333;
      padding: 20px;
      margin-bottom: 10px;
    }
.company{
  position: absolute;
  bottom:25px;
  left: 40px;
  opacity: .3;
  cursor: pointer;
}
  .company-name{
    color: #fff;
    font-size:13px;

font-family: inherit;
  }
  .company img{
    vertical-align: top;

    margin-left: 45px;
  }
.company:hover{
  opacity: 1;
}
  .com-name{
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 25px;
    margin-bottom: 20px;
    color: #657180;
  }
  .com-list{
    height: 200px;
  }
  .com-list li{
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    color: #657180;
  }
</style>
