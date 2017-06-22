<template>
    <div>

        <div class="comunity-wrapper"  @click="aa">
          <i-form ref="formDynamic" :model="formDynamic" :label-width="100">

            <Form-item label="选择所在地区：">
              <i-col span="6">
              <Cascader  :data="data" v-model="value2"></Cascader>
              </i-col>
            </Form-item>
            <Form-item label="选择办事处：">
              <i-col span="6">

                <input type="text" class="street" @click="strstatus" placeholder="点击选择街道办事处"  >
                <span class="str-tip" v-show="strtipstatus" >  *如果没有您的选项，请你手写</span>

                <Icon type="arrow-down-b" class="str-ico"></Icon>
                <div class="str-list" v-show="strStatus">
                   <ul class="str-content" v-for="str in streetName">
                     <li @click="selfnone">
                       {{str.name}}
                     </li>
                   </ul>
                </div>
              </i-col>
            </Form-item>
            <Form-item label="选择居委会：">
              <i-col span="6">
                <input type="text" class="street" @click="committeestatus" placeholder="点击选择居委会">

                <Icon type="arrow-down-b" class="str-ico"></Icon>
                <div class="committee-list" v-show="committeeStatus">
                  <ul class="str-content" v-for="str in streetName">
                    <li @click="selfnone">
                      {{str.name}}
                    </li>
                  </ul>
                </div>
              </i-col>
            </Form-item>
            <Form-item label="填写其他地区：" v-show="aa">
              <i-col span="6">
                <input type="text" class="street" @click="committeestatus" placeholder="请填写具体地址">

                <Icon type="arrow-down-b" class="str-ico"></Icon>
                <div class="committee-list" v-show="committeeStatus">
                  <ul class="str-content" v-for="str in streetName">
                    <li @click="selfnone">
                      {{str.name}}
                    </li>
                  </ul>
                </div>
              </i-col>
            </Form-item>
            <Form-item  >
               <div class="add-address" @click="aa=true">
                 <Icon type="plus-round"></Icon>
                 填写其他地址
               </div>
            </Form-item>
          </i-form>
        </div>

    </div>
</template>
<script type="text/ecmascript-6">

    export default{
        data(){
            return {
                aa:false,
              streetName:[
                {name:'一个接到办事处'},
                {name:'俩个接到办事处'},
                {name:'俩个接到办事处'},
                {name:'俩个接到办事处'},
                {name:'俩个接到办事处'},
                {name:'俩个接到办事处'},
                {name:'俩个接到办事处'},
                {name:'俩个接到办事处'},
                {name:'俩个接到办事处'},
                {name:'俩个接到办事处'},
                {name:'俩个接到办事处'},
                {name:'俩个接到办事处'},
                {name:'三个接到办事处'}
              ]

              ,
              strStatus:false,
              strtipstatus:false,
              committeeStatus:false,
              strStatusCount:0,
              committeeStatusCount:0,
                value2: ['jiangsu', 'suzhou', 'zhuozhengyuan'],
              data: [{
                value: 'beijing',
                label: '北京',
                children: [
                  {
                    value: 'gugong',
                    label: '故宫'
                  },
                  {
                    value: 'tiantan',
                    label: '天坛'
                  },
                  {
                    value: 'wangfujing',
                    label: '王府井'
                  }
                ]
              }, {
                value: 'jiangsu',
                label: '江苏',
                children: [
                  {
                    value: 'nanjing',
                    label: '南京',
                    children: [
                      {
                        value: 'fuzimiao',
                        label: '夫子庙',
                      }
                    ]
                  },
                  {
                    value: 'suzhou',
                    label: '苏州',
                    children: [
                      {
                        value: 'zhuozhengyuan',
                        label: '拙政园',
                      },
                      {
                        value: 'shizilin',
                        label: '狮子林',
                      }
                    ]
                  }
                ],
              }]
            }
        },
      methods:{
        strstatus(){
         this. strtipstatus=true;
          this.strStatusCount++;
          if(this.strStatusCount%2==1){
            this.strStatus=true
          }else{
            this.strStatus=false
          }

        },
        committeestatus(){
          this.committeeStatusCount++;
          if(this.committeeStatusCount%2==1){
            this.committeeStatus=true
          }else{
            this.committeeStatus=false
          }
        },
        selfnone(){
          this.strStatus=false
        }
      },
        components: {}
    }
</script>
<style scoped>
  .str-content{

    padding-top: 8px;
  }
  .str-content li{
    line-height: 1 ;
    padding-left: 8px;
    font-size: 12px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .str-content li:hover{
    background: #f3f3f3;
  }
   .comunity-wrapper{
     margin: 100px 200px;
   }
  .street{
    border: 1px solid #dddee1;
    border-radius: 5px;
    width: 100%;
    height: 32px;
  }
  .str-ico{
    position: absolute;
    top:10px;
    right: 5px;
    font-size: 15px;
    opacity: .7;
  }
  .str-tip{
    position: absolute;
    color: red;
    top: 0;
    right: -170px;
  }
  .str-list{
    width: 60%;
    overflow: auto;
    height: 180px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    margin-top: 2px;
    border: 1px solid #dddee1;
  }
  .committee-list{
    width: 60%;
    overflow: auto;
    height: 180px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    margin-top: 2px;
    border: 1px solid #dddee1;
  }
  .add-address{
    border: 1px dashed #dddee1;
    width: 20%;
    font-size: 16px;
    padding:5px;
    cursor: pointer;
  }
  .add-address:hover{
    background: gainsboro;
  }
</style>
