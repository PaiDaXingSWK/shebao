<template>
  <div style="width: 100%">
   <!-- <v-peopleList></v-peopleList>-->
    <div class="content">


      <Row>
        <div class="content-header">
          人员信息
          <span>
      <Button type="info" icon='plus' @click='showIncrease = true' size="small"></Button>
        </span>
        </div>
        <div class="oparity">
          <!-- <ul>
             <li @click="massageGathers">信息采集</li>
             <li @click="peopleShowOnoff">照片采集</li>
             <li  @click="modal1 = true">指静脉采集</li>
           </ul>-->
          <div v-if="peopleShow">
            <img src="../../assets/logo.png" alt="">
            <img src="../../assets/logo.png" alt="">
          </div>
        </div>
      </Row>
      <router-view></router-view>
      <v-peopleMsg v-show="peopleShow"></v-peopleMsg>

      <!--显示的第二张方案-->



         <div class="search-body" style="overflow: visible">
          <Row :gutter='32'>
            <i-col span="2">
              <i-select v-model="personMsg.personname"  filterable placeholder="姓名" clearable style="width: 100%">
                <i-option> </i-option>
              </i-select>
            </i-col>
            <i-col span="4">
              <i-select  :model.sync="personMsg.personid"  filterable placeholder="身份证号" clearable style="width: 100%">
                <i-option     > </i-option>
              </i-select>
            </i-col>
            <i-col span="6">
              <Cascader :data="data2" placeholder="请选择地区"></Cascader>
            </i-col>

            <i-col span="2">
              <i-select  :model.sync="personMsg.personsex"  filterable placeholder="性别" clearable style="width: 100%">
                <i-option     > </i-option>
              </i-select>
            </i-col>
            <i-col span="3">
              <date-picker :model.sync="personMsg.time" type="datetime"   placeholder="时间" style="width: 100%"  ></date-picker>
            </i-col>

            <i-col span="1" >
              <i-button type="info" @click="search" >搜索</i-button>
            </i-col>
          </Row>
        </div>
        <Table border :columns="columns7" :row-class-name="rowClassName"    :data="data6"></Table>









    </div>


  </div>
</template>
<script type="text/ecmascript-6">
  import peopleList from '../peopleList.vue'
  import peopleMsg from '../peopleMsg.vue'

//  import photo from '../photo.vue'
  export default{
    data(){
      return {
        data2: [{
          value: 'zhejiang',
          label: '陕西',
          children: [{
            value: 'hangzhou',
            label: '西安',
            children: [{
              value: 'xihu',
              label: '高新',
              children: [{
                value: 'xihu',
                label: 'diyige',
                children: [{
                  value: 'xihu',
                  label: 'diyige'
                }]
              }]
            }]
          }]
        }, {
          value: 'jiangsu',
          label: '江苏',
          disabled: true,
          children: [{
            value: 'nanjing',
            label: '南京',
            children: [{
              value: 'zhonghuamen',
              label: '中华门'
            }]
          }]
        }
        ],
        personMsg: {
          personname: '',
          personid: '',
          personsex: '',
          time: '',
          active: 1,
          len: 50
        },
        massageGather: false,
        modalPhoto:false,
        modal1: false,
        cityList: [
          {
            value: 'beijing',
            label: '北京市'
          },
          {
            value: 'shanghai',
            label: '上海市'
          },
          {
            value: 'shenzhen',
            label: '深圳市'
          },
          {
            value: 'hangzhou',
            label: '杭州市'
          },
          {
            value: 'nanjing',
            label: '南京市'
          },
          {
            value: 'chongqing',
            label: '重庆市'
          }
        ],
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
            title: '年龄',
            key: 'type'
          },
          {
            title: '地址',
            key: 'address'
          },

          {
            title: '人员操作',
            key: 'action',
            width: 400,
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
                    type: 'warning',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.camera(params.index)
                    }
                  }
                }, '照片采集') ,


              ]);
            }
          }
        ],
        data6: []


      }
    },
    methods: {
      getpage () {
        var _this = this;
        _this.$http.get("./static/data.json")
          .then(function (rsp) {
            console.log(rsp.data.goods.type)
            _this.data6=rsp.data.goods
            _this.data6.address=rsp.data.goods[0].foods
          })
          .catch(function (error) {
            console.log(error);
          })
      },
      rowClassName (row, index) {
        if (row.type===2 ) {
          return 'demo-table-error-row';
        } else if (row.type === -1) {
          return 'aaa ';
        }
        return '';
      },


    },
    components: {
      'v-peopleList': peopleList,
      'v-peopleMsg': peopleMsg,

      /*,
      'v-photo': photo*/
    },
    created(){
      this.getpage();
this. rowClassName();
    }
  }
</script>
<style scoped>

  .ivu-table .demo-table-error-row td{
    background-color: red !important;
    color: #fff;
  }
  .content {
    display: flex;
    text-align: center;
    overflow: hidden;
    flex-direction: column;
    width: 98.5%;
    /*width: 85.5%;*/
    /*margin-left: 260px;*/
    margin: 0 15px 0 15px;
    background: #fff;

    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.117647), 1px 0 1px rgba(0, 0, 0, 0.117647), -1px 0 1px rgba(0, 0, 0, 0.117647);
    padding: 20px;
    min-height: 600px;
    margin-bottom: 10px;
    position: absolute;
    bottom: 0;
    top: 90px;
    border-radius: 5px;
  }

  .content-header {
    float: left;
  }

  .oparity {

    text-align: center;

    flex-direction: column;
    width: 71%;
    margin-left: 332px;

    padding: 20px;
  }

  .oparity ul li {
    margin-bottom: 50px;
    list-style: none;
    cursor: pointer;
    display: inline-block;
    float: left;
    width: 150px;
    height: 50px;
    background: dodgerblue;
    margin-left: 10px;
    text-align: center;
    line-height: 50px;
    color: #fff;
  }

  .oparity ul li:hover {
    background: #fff;
    border: 1px solid dodgerblue;
    color: dodgerblue;
  }
  .photo-wrapper{
     width: 200px;height: 400px;
    margin-bottom: 20px;
  }
  .btn{
    margin-bottom: 5px;
  }
  .booth {
    width:420px;

    background:#ccc;
    border: 10px solid #ddd;
    margin: 0 auto;
  }
  #video{
    position: relative;
  }
  img,canvas{
    position: absolute;
    top: 114px;
    left: 26px;
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
