<template>
    <div>
      <div class="list-content">


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

      <div class="search-body" style=" ">
        <Row  >

          <Input v-model="value4" icon="ios-clock-outline" placeholder="请输入..." style="width: 200px"></Input>



            <Button type="ghost" shape="circle" icon="ios-search">搜索</Button>

        </Row>
      </div>
      <div style="margin-left: 330px">
        <i-col span="18">
        <Table border :columns="columns7" :data="data6"></Table></i-col>
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
                          this.remove(params.index)
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
     top:120px;
     left: 0;
     bottom:0;
     background: #1c2438;
   }
   .search-body{
     display: flex;
     text-align: center;
     overflow: hidden;
     flex-direction: column;
     width: 82.5%;
     margin-left: 332px;
     margin-top: 28px;
     box-shadow: 0 2px 6px rgba(0, 0, 0, 0.117647), 1px 0 1px rgba(0, 0, 0, 0.117647), -1px 0 1px rgba(0, 0, 0, 0.117647);
     padding: 20px;

   }
</style>
