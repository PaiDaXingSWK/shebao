<template>
    <div class="people-list">
        <div class="title">
          <span>
            人员列表
          </span>
        </div>
        <div class="list">
          <Tree :data="baseData" show-checkbox></Tree>
        </div>
      <div class="content">
        <router-view></router-view>

      </div>

    </div>
</template>
<script type="text/ecmascript-6">

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
        components: {}
    }
</script>
<style scoped>
    .people-list {
      width: 200px;
      position: absolute;
      top: 120px;
      background: #1c2438;
      bottom: 0;
      left: 0px;
    }
</style>
