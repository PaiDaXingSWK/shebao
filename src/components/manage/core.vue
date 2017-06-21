<template>
    <div>
      <div class="content-header">
        所有设备
        <span>
      <Button type="info" icon='plus' @click='showIncrease = true' size="small"></Button>
        </span>
      </div>
      <Table border :columns="columnsCore" :data="dataCore"></Table>
    </div>
</template>
<script type="text/ecmascript-6">

    export default{
        data(){
            return {
              columnsCore: [
                {
                  title: '名称',
                  key: 'name',
                  render: (h, params) => {
                    return h('div', [
                      h('Icon', {
                        props: {
                          type: 'person'
                        }
                      }),
                      h('strong', params.row.name)
                    ]);
                  }
                },
                {
                  title: '类型',
                  key: 'type'
                },
                {
                  title: '状态',
                  key: 'status'
                }, {
                  title: 'ip',
                  key: 'ip'
                }, {
                  title: '型号',
                  key: 'num'
                },
                {
                  title: '操作',
                  key: 'action',
                  width: 150,
                  align: 'center',
                  render: (h, params) => {
                    return h('div', [
                      h('Button', {
                        props: {
                          type: 'primary',
                          size: 'small'
                        },
                        style: {
                          marginRight: '5px'
                        },
                        on: {
                          click: () => {
                            this.show(params.index)
                          }
                        }
                      }, '查看'),
                      h('Button', {
                        props: {
                          type: 'error',
                          size: 'small'
                        },
                        on: {
                          click: () => {
                            this.remove(params.index)
                          }
                        }
                      }, '删除')
                    ]);
                  }
                }
              ],
              dataCore: [
                {
                  name: '王小明',
                  type: 18,
                  ip : '000111',
                  status:'正常',
                  num: 'tt520'
                }
              ]
            }
        },
        components: {}
    }
</script>
<style>
    body {
    }
</style>
