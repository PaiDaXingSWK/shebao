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
        <i-col span="6">
          <i-select    filterable placeholder="啦啦" clearable style="width: 100%">
            <i-option     > </i-option>
          </i-select>
        </i-col>
        <i-col span="3">
          <date-picker  type="datetime"   placeholder="起始时间" style="width: 100%"  ></date-picker>
        </i-col>
        <i-col span="3">
          <date-picker  type="datetime"   placeholder="截止时间" style="width: 100%"  ></date-picker>
        </i-col>

        <i-col span="4" >
          <i-button type="info"  >搜索</i-button>
        </i-col>
      </Row>
    </div>
    <Table :columns="columns8" :data="data7" size="small" ref="table"></Table>

  </div>
</template>
<script type="text/ecmascript-6">

  export default{
    data(){
      return {  columns8: [
        {
          "title": "姓名",
          "key": "name",
          "fixed": "left",
          "width": 200
        },
        {
          "title": "性别",
          "key": "show",
          "width": 150,
        },
        {
          "title": "民族",
          "key": "weak",
          "width": 150,

        },
        {
          "title": "出生年月",
          "key": "signin",
          "width": 150

        },
        {
          "title": "地址",
          "key": "click",
          "width": 150
        },
        {
          "title": "身份证编号",
          "key": "active",
          "width": 150
        },
        {
          "title": "签发机关",
          "key": "day7",
          "width": 150
        },
        {
          "title": "签发时间",
          "key": "day30",
          "width": 150
        },
        {
          "title": "有效截止时间",
          "key": "tomorrow",
          "width": 150
        },
        {
          "title": "创建时间",
          "key": "day",
          "width": 150
        },

        {
          "title": "手机号码",
          "key": "month",
          "width": 150
        } ,{
          "title": "电话海马",
          "key": "month",
          "width": 150
        },{
          "title": "是否去世",
          "key": "diestatus",
          "width": 150
        },{
          "title": "去世时间",
          "key": "die",
          "width": 150
        }
      ],
        data7: [ {
          "name": "派大星",
          "fav": 0,
          "show": 3651,
          "weak": 1819,
          "signin": 4595,
          "click": 7499,
          "active": 7405,
          "day7": 8710,
          "day30": 5518,
          "tomorrow": 428,
          "day": 9768,
          "week": 2864,
          "month": 5811
        }]}
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
