<template>
  <div>
    <div class="list-content" style="box-shadow: 2px 10px 18px #333333;" >

      <i-menu theme="dark" active-name="2"  :active-name="setActive"  :default-active="onRoutes" @on-select="routeTo">

        <Menu-item name="searchPeople">
          <Icon type="document-text"></Icon>
          查询人员信息
        </Menu-item>
        <Menu-item name="identify">
          <Icon type="chatbubbles"></Icon>
          认真/非认证
        </Menu-item>
        <Menu-item name="hisIdentify">
          <Icon type="chatbubbles"></Icon>
          历史认真记录
        </Menu-item>
      </i-menu>
    </div>
    <div class="table-wrapper">
      <router-view></router-view>
    <!--  <div class="search-body" style="overflow: visible">
        <Row :gutter='32'>
          <i-col span="4">
            <i-select    filterable placeholder="城市" clearable style="width: 100%">
              <i-option> </i-option>
            </i-select>
          </i-col>
          <i-col span="4">
            <i-select    filterable placeholder="地区" clearable style="width: 100%">
              <i-option     > </i-option>
            </i-select>
          </i-col>
          <i-col span="8">
            <i-select    filterable placeholder="居委会" clearable style="width: 100%">
              <i-option     > </i-option>
            </i-select>
          </i-col>
          &lt;!&ndash;<i-col span="4">
            <date-picker  type="datetime"   placeholder="时间" style="width: 100%"  ></date-picker>
          </i-col>&ndash;&gt;

          <i-col span="4" >
            <i-button type="info"  >搜索</i-button>
          </i-col>
        </Row>
      </div>
      <Table border :columns="columns7" :data="data6"></Table>-->
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
       /* {
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
        }*/
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
      },
      routeTo(e) {
        //console.log(e);
        this.$router.push(e);
      },
    },
    computed:{
      onRoutes(){
        return this.$route.path.replace('/','');
      },
      setActive() {
        return this.$route.path.replace('/','');
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
    top:70px;
    left: 0;
    bottom:0;
    background: #1c2438;
    margin-bottom: 10px;
  }
  .table-wrapper{
    position: absolute;
    bottom: 0;
    top: 66px;
    left: -25px;
    min-height: 600px;
    right: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    background: #fff;
    margin-left: 280px;
    margin-top: 20px;
    /*box-shadow: 0 2px 6px  rgba(0, 0, 0, 0.117647), 1px 0 1px rgba(0, 0, 0, 0.117647), -1px 0 1px rgba(0, 0, 0, 0.117647);*/
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.117647), 1px 0 1px rgba(0, 0, 0, 0.117647), -1px 0 1px rgba(0, 0, 0, 0.117647);
    padding: 10px;

  }
  .search-body{
    padding-bottom: 0.07rem;
    font-size: 24px;

    height: 50px;
    margin-bottom: 0.16rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.87);
    position: relative;
    margin-left: 6px;
  }
</style>
