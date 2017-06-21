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
        <i-col span="8">
          <i-select    filterable placeholder="居委会" clearable style="width: 100%">
            <i-option     > </i-option>
          </i-select>
        </i-col>
        <i-col span="4">
          <i-select    filterable placeholder="认证状态" clearable style="width: 100%">
            <i-option     > </i-option>
          </i-select>
        </i-col>


        <i-col span="4" >
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
