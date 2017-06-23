<template>
  <div>

    <div class="comunity-wrapper" @click="aa">
      <i-form ref="formDynamic" :model="formDynamic" :label-width="100">

        <Form-item label="选择所在地区：">
          <i-col span="11">
            <Cascader :data="data" v-model="value2"></Cascader>
          </i-col>
        </Form-item>
        <Form-item label="选择办事处：">
          <i-col span="11">
            <Select v-model="model1">
              <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>

          </i-col>
          <div class="add-office" @click="aa=true">
            <Icon type="plus-round"></Icon>
            添加其他办事处
          </div>
        </Form-item>
        <Form-item label="选择居委会：">
          <i-col span="11">
            <Select v-model="model1">
              <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>

          </i-col>
          <div class="add-office" @click="modal1 = true">
            <Icon type="plus-round"></Icon>
            添加其他居委会
          </div>
          <Modal

            v-model="modal1"
            title="添加居委会"
            @on-ok="ok"
            @on-cancel="cancel">
            <div style="margin: 20px">
              <i-form :label-width="150">
                <Form-item label="所在地区：">
                  <Row>
                    <i-col span="15">
                      <Cascader :data="data" v-model="value2"></Cascader>
                    </i-col>
                  </Row>
                </Form-item>
                <Form-item label="居委会名称 ：">
                  <i-col span="15">
                    <input type="text" placeholder="添加其他居委会" class="addOther">
                  </i-col>
                </Form-item>

              </i-form>
            </div>
          </Modal>
        </Form-item>
        <!-- <Form-item label="选择办事处：">
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
         </Form-item>-->
        <!--  <Form-item label="选择居委会：">
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
          </Form-item>-->
        <Form-item label="填写其他地区：" v-show="aa">
          <i-col span="11">
            <input type="text" class="other" placeholder="请填写其他详细地址">
          </i-col>
        </Form-item>
        <Form-item>
          <div class="add-address" @click="aa=true">
            <Icon type="plus-round"></Icon>
            填写其他地址
          </div>
        </Form-item>
        <Form-item>
          <Button type="primary" size="large" @click="communityNext('formInline')"> 下一步 </Button>
        </Form-item>
      </i-form>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">

  export default{
    data(){
      return {
        modal1: false,
        stepC: 0,
        aa: false,
        streetName: [
          {name: '一个接到办事处'},
          {name: '俩个接到办事处'},
          {name: '俩个接到办事处'},
          {name: '俩个接到办事处'},
          {name: '俩个接到办事处'},
          {name: '俩个接到办事处'},
          {name: '俩个接到办事处'},
          {name: '俩个接到办事处'},
          {name: '俩个接到办事处'},
          {name: '俩个接到办事处'},
          {name: '俩个接到办事处'},
          {name: '俩个接到办事处'},
          {name: '三个接到办事处'}
        ]

        ,
        strStatus: false,
        strtipstatus: false,
        committeeStatus: false,
        strStatusCount: 0,
        committeeStatusCount: 0,
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
    methods: {
      communityNext(){
        this.stepC++
      },
      strstatus(){
        this.strtipstatus = true;
        this.strStatusCount++;
        if (this.strStatusCount % 2 == 1) {
          this.strStatus = true
        } else {
          this.strStatus = false
        }

      },
      committeestatus(){
        this.committeeStatusCount++;
        if (this.committeeStatusCount % 2 == 1) {
          this.committeeStatus = true
        } else {
          this.committeeStatus = false
        }
      },
      selfnone(){
        this.strStatus = false
      }
    },
    mounted(){
      this.$emit('message', this.stepC);
    },
    components: {}
  }
</script>
<style scoped>
  .str-content {

    padding-top: 8px;
  }

  .str-content li {
    line-height: 1;
    padding-left: 8px;
    font-size: 12px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .str-content li:hover {
    background: #f3f3f3;
  }

  .comunity-wrapper {
    margin: 200px 450px;

  }

  .addOther, .other, .street {
    border: 1px solid #dddee1;
    border-radius: 5px;
    width: 100%;
    height: 32px;
  }

  .str-ico {
    position: absolute;
    top: 10px;
    right: 5px;
    font-size: 15px;
    opacity: .7;
  }

  .str-tip {
    position: absolute;
    color: red;
    top: 0;
    right: -170px;
  }

  .str-list {
    width: 60%;
    overflow: auto;
    height: 180px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
    margin-top: 2px;
    border: 1px solid #dddee1;
  }

  .committee-list {
    width: 60%;
    overflow: auto;
    height: 180px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
    margin-top: 2px;
    border: 1px solid #dddee1;
  }

  .add-address {
    border: 1px dashed #dddee1;
    width: 40%;
    font-size: 16px;
    padding: 5px;
    cursor: pointer;
  }

  .add-address:hover {
    background: gainsboro;
  }

  .add-office {
    position: absolute;
    left: 300px;
    height: 30px;
    border: 1px dashed #dddee1;
    padding: 5px;
    line-height: 20px;
    text-align: center;
  }

</style>
