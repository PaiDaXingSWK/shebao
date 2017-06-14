<template>
    <div>
      <div class="list-content">

      <i-menu theme="dark" active-name="1">

        <Menu-item name="1">
          <Icon type="document-text"></Icon>
          人员管理
        </Menu-item>
        <Menu-item name="2">
          <Icon type="chatbubbles"></Icon>
          数据同步
        </Menu-item>

        <Menu-item name="3">
          <Icon type="heart"></Icon>
          系统恢复
        </Menu-item>
        <Menu-item name="4">
          <Icon type="heart-broken"></Icon>
          系统备份
        </Menu-item>
        <Menu-item name="5">
          <Icon type="heart-broken"></Icon>
          参数配置
        </Menu-item>

      </i-menu>
      </div>
      <div class="table-wrapper">
        <i-button type="info" @click='ExportOrigin'  style="margin-bottom: 10px">数据恢复</i-button>
        <i-button type="info" @click='ExportOrigin'  style="margin-bottom: 10px">数据同步</i-button>
        <i-button type="info" @click='ExportOrigin'  style="margin-bottom: 10px">系统备份</i-button>
        <i-button type="info" @click='ExportOrigin'  style="margin-bottom: 10px">参数配置</i-button>
        <Table border :columns="columns7" :data="data6"></Table>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">

    export default{
        data(){
            return { columns7: [
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
                title: '年龄',
                key: 'type'
              },
              {
                title: '地址',
                key: 'address'
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
              data6: []
            }
        },
      methods: {
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
        components: {},
      created(){
        this.getpage();
      }
    }
</script>
<style scoped>
  .list-content{
    position: absolute;
    top:120px;
    left: 0;
    bottom:0;
    background: #1c2438;
  }
  .table-wrapper{
    width: 80%;
    margin-left: 280px;
    margin-top: 20px;
     box-shadow: 0 2px 6px  rgba(0, 0, 0, 0.117647), 1px 0 1px rgba(0, 0, 0, 0.117647), -1px 0 1px rgba(0, 0, 0, 0.117647);
    padding: 10px;

  }
</style>
