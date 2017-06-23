<template>
    <div>
      <div class="search-body" style="overflow: visible">
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
          <i-col span="4">
            <i-select    filterable placeholder="居委会" clearable style="width: 100%">
              <i-option     > </i-option>
            </i-select>
          </i-col>
          <i-col span="4">
          <date-picker  type="datetime"   placeholder="时间" style="width: 100%"  ></date-picker>
        </i-col>

          <i-col span="2" >
            <i-button   >过滤信息</i-button>
            <div style="position: absolute;z-index: 9;width: 300px;left:-50px;padding: 10px;border: 1px solid #ccc;background: #fff;top:45px;">
              <Checkbox-group v-model="checkAllGroup" @on-change="checkAllGroupChange">
                <Checkbox label="认证时间"></Checkbox>
                <Checkbox label="是否去世"></Checkbox>
                <Checkbox label="去世时间"></Checkbox>
                <Checkbox label="婚否"></Checkbox>
                <Checkbox label="身份证号"></Checkbox>
                <Checkbox label="年龄"></Checkbox>
                <Checkbox label="性别"></Checkbox>
                <Checkbox label="电话"></Checkbox>
                <Checkbox label="家庭住址"></Checkbox>
                <Checkbox label="固定电话"></Checkbox>
              </Checkbox-group>
              <i-button   >取消</i-button>
              <i-button   type="success">确定</i-button>
            </div>
          </i-col>
          <i-col span="2" >
            <i-button type="info"  >搜索</i-button>
          </i-col>
        </Row>
      </div>
      <Table border :columns="columns7" :data="data6"></Table>

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
              data6: []}
        },
      methods:{
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
      },
        components: {},
      created(){
        this.getpage();
      }
    }
</script>
<style>
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
