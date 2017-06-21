<template>
    <div>
      <div class="content-header">
        所有人员
        <span>
      <Button type="info" icon='plus' @click='showIncrease = true' size="small"></Button>
        </span>
      </div>
      <Table border :columns="columns7" :data="data6"></Table>

    </div>
</template>
<script type="text/ecmascript-6">

    export default{
        data(){
            return {
              columns7: [
                {
                  title: '姓名',
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
                  title: '权限',
                  key: 'type'
                },
                {
                  title: '指静脉信息',
                  key: 'address'
                },
                {
                  title: '操作',
                  key: 'action',
                  width: 250,
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
                      }, '录入指静脉'),
                      h('Button', {
                        props: {
                          type: 'error',

                          size: 'small'
                        },
                        style: {
                          marginRight: '5px'
                        },
                        on: {
                          click: () => {
                            this.remove(params.index)
                          }
                        }
                      }, '删除'),
                      h('Button', {
                        props: {
                          type: 'success',
                          size: 'small'
                        },
                        on: {
                          click: () => {
                            this.remove(params.index)
                          }
                        }
                      }, '修改')
                    ]);
                  }
                }
              ],
              data6: [  {
                name: '王小明',
                type: '用户',
                address: '无'
              },
                {
                  name: '张小刚',
                  type: '管理员',
                  address: '右手中指'
                },]
            }
        },
      methods: {
        routeTo(e) {
          //console.log(e);
          this.$router.push(e);
        },
        show (index) {
          this.$Modal.info({
            title: '用户信息',
            content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
          })
        },
        remove (index) {
          this.data6.splice(index, 1);
        },
        getpage () {
          var _this = this;
          _this.$http.get("./static/data.json")
            .then(function (rsp) {
              console.log(rsp.data.goods)
              _this.data6=rsp.data.goods
              _this.data6.address=rsp.data.goods[0].foods
            })
            .catch(function (error) {
              console.log(error);
            })
        }
      },
        components: {}
    }
</script>
<style>
   .content-header{
     margin-bottom: 20px;
     margin-top: 20px;
   }
</style>
