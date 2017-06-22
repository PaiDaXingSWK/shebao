<template>
    <div>

        <div class="comunity-wrapper">
          <i-form ref="formDynamic" :model="formDynamic" :label-width="100">

            <Form-item label="选择所在地区：">
              <i-col span="6">
              <Cascader  :data="data" v-model="value2"></Cascader>
              </i-col>
            </Form-item>

          </i-form>
        </div>

    </div>
</template>
<script type="text/ecmascript-6">

    export default{
        data(){
            return { value2: ['jiangsu', 'suzhou', 'zhuozhengyuan'],
              data: [{
                value: 'beijing',
                label: '北京',
                children: [
                  {
                    value: 'gugong',
                    label: '故宫'
                  },
                  {
                    value: 'tiantan',
                    label: '天坛'
                  },
                  {
                    value: 'wangfujing',
                    label: '王府井'
                  }
                ]
              }, {
                value: 'jiangsu',
                label: '江苏',
                children: [
                  {
                    value: 'nanjing',
                    label: '南京',
                    children: [
                      {
                        value: 'fuzimiao',
                        label: '夫子庙',
                      }
                    ]
                  },
                  {
                    value: 'suzhou',
                    label: '苏州',
                    children: [
                      {
                        value: 'zhuozhengyuan',
                        label: '拙政园',
                      },
                      {
                        value: 'shizilin',
                        label: '狮子林',
                      }
                    ]
                  }
                ],
              }]
            }
        },
        components: {}
    }
</script>
<style scoped>
   .comunity-wrapper{}
</style>
