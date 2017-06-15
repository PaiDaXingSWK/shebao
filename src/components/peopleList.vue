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
            return { baseData: [{
              expand: true,
              title: 'parent 1',
              children: [{
                title: 'parent 1-0',
                expand: true,
                disabled: true,
                children: [{
                  title: 'leaf',
                  disableCheckbox: true
                }, {
                  title: 'leaf',
                }]
              }, {
                title: 'parent 1-1',
                expand: true,
                checked: true,
                children: [{
                  title: '<span style="color: red">leaf</span>',
                }]
              }]
            }]}
        },
        components: {
          'v-peopleMsg': peopleMsg
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

</style>
