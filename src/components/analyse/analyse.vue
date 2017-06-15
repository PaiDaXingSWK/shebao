<template>
    <div style="width: 100%;padding:0 20px;border-radius:5px;margin-right: 20px;min-height:600px;margin-bottom:10px;box-shadow: 1px 0 20px 0 rgba(70, 76, 91, .54);margin-top:10px;margin-left: 260px">
      <div class="list-content" style="box-shadow: 2px 10px 18px #333333;">


      <i-menu theme="dark" active-name="1">

        <Menu-item name="1">
          <Icon type="document-text"></Icon>
          查询人员信息
        </Menu-item>
        <Menu-item name="2">
          <Icon type="chatbubbles"></Icon>
          认证/非认证
        </Menu-item>

        <Menu-item name="3">
          <Icon type="heart"></Icon>
          历史认证记录
        </Menu-item>


      </i-menu>
      </div>
      <div>
      <div class="search-body" style=" ">
        <Row  >

          <Input v-model="value4" icon="ios-clock-outline" placeholder="请输入..." style="width: 200px"></Input>



            <Button type="ghost" shape="circle" icon="ios-search">搜索</Button>

        </Row>
      </div>
      <div >
        <i-col span="24">
        <Table border :columns="columns7" :data="data6"></Table></i-col>
      </div>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">

    export default{
        data(){
            return {  columns7: [
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
                key: 'age'
              },
              {
                title: '地址',
                key: 'address'
              },
              {
                title: '操作',
                key: 'action',
                width:  400,
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
                          this.remove(params.index);
                          localStorage.clear()
                        }
                      }
                    }, '删除')
                  ]);
                }
              }
            ],
              data6: [
                {
                  name: '王小明',
                  age: 18,
                  address: '北京市朝阳区芍药居'
                },
                {
                  name: '张小刚',
                  age: 25,
                  address: '北京市海淀区西二旗'
                },
                {
                  name: '李小红',
                  age: 30,
                  address: '上海市浦东新区世纪大道'
                },
                {
                  name: '周小伟',
                  age: 26,
                  address: '深圳市南山区深南大道'
                }
              ]
            }
        },
      methods: {
        show (index) {
          this.$Modal.info({
            title: '用户信息',
            content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
          });

            var _this = this;
            _this.$http.get("./static/data.json")
              .then(function (rsp) {
                console.log(rsp.data.goods)
                _this.names=rsp.data.goods
              })
              .catch(function (error) {
                console.log(error);
              })

        },
        remove (index) {
          this.data6.splice(index, 1);
        }
      },
        components: {}
    }
</script>
<style scoped>
   .list-content{
     position: absolute;
     top:70px;
     left: 0;
     bottom:0;
     background: #1c2438;
    margin-bottom: 10px;
   }
   .search-body{
     display: flex;
     text-align: center;
     overflow: hidden;
     flex-direction: column;


     margin-top: 28px;
     box-shadow: 0 2px 6px rgba(0, 0, 0, 0.117647), 1px 0 1px rgba(0, 0, 0, 0.117647), -1px 0 1px rgba(0, 0, 0, 0.117647);
     padding: 20px;

   }
</style>
