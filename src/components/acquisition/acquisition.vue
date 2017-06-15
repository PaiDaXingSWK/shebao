<template>
    <div style="width: 100%">
      <v-peopleList></v-peopleList>
      <div class="content">
        <Row>
          <div class="oparity">
            <ul>
              <li @click="massageGathers">信息采集</li>
              <li @click="peopleShowOnoff">照片采集</li>
              <li  @click="modal1 = true">指静脉采集</li>
            </ul>
            <div v-if="peopleShow">
            <img src="../../assets/logo.png" alt="">
            <img src="../../assets/logo.png" alt="">
            </div>
          </div>
        </Row>
        <router-view></router-view>
        <v-peopleMsg v-show="peopleShow"></v-peopleMsg>

        <!--显示的第二张方案-->


        <div v-show="!peopleShow">

          <Table border :columns="columns7" :data="data6"></Table>
        </div>


        <div style="margin-left: 70%">
          <Button>迁移</Button>
          <Button type="primary">读取身份证</Button>
          <Button type="ghost">认证</Button>
          <Button type="error">删除用户</Button>
        </div>

        <Modal
          v-model="massageGather"
          title="信息采集"
          @on-ok="ok"
          @on-cancel="cancel">
          <p>对话框内容</p>
          <p>对话框内容</p>
          <p>对话框内容</p>
        </Modal>
        <Modal
          v-model="modal1"  width='750'
          title="指静脉采集"
          @on-ok="ok"
          @on-cancel="cancel">
          <div>
            <Steps :current="stepCount">
              <Step title="采集准备" content="请选择要采集的手指和用于采集设备"></Step>
              <Step title="采集中" content="进行三次指静脉采集"></Step>
              <Step title="采集完成" content="采集完成"></Step>
            </Steps>
          </div>
          <Row :gutter="32">
            <i-col span="8" push='2'>
              <label>采集设备</label>
            </i-col>
            <i-col span="12">
              <label>采集手指</label>
            </i-col>
          </Row>
          <Row :gutter="32" justify='center'>
            <i-col span="8" push='2'>
              <i-select   style='width:134px'>
                <i-option  v-for="item in cityList" :value="item.value" :key="item"> {{ item.label }}</i-option>
              </i-select>
            </i-col>
            <i-col span="12">
              <Radio-group   type="button">
                <Radio value="l2">左手食指</Radio>
                <Radio value="l3">左手中指</Radio>
                <Radio value="r2">右手食指</Radio>
                <Radio value="r3">右手中指</Radio>
              </Radio-group>
            </i-col>
          </Row>
        </Modal>

      </div>


    </div>
</template>
<script type="text/ecmascript-6">
import peopleList from '../peopleList.vue'
import peopleMsg from '../peopleMsg.vue'
    export default{
        data(){
            return {massageGather:false,
              peopleShow:false
            ,
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
                  key: 'age'
                },
                {
                  title: '地址',
                  key: 'address'
                },
                {
                  title: '操作',
                  key: 'action',
                  width: 300,
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
                      }, '认证'),
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
                      }, '迁移'),
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
                      }, '读取身份证')
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
      methods:{
        peopleShowOnoff(){
            this.peopleShow= !this.peopleShow
        },
        massageGathers() {
          this.massageGather=true
        },
        ok () {
          this.$Message.info('点击了确定');
        },
        cancel () {
          this.$Message.info('点击了取消');
        }

      },
        components: {
            'v-peopleList':peopleList,
            'v-peopleMsg':peopleMsg
        }
    }
</script>
<style scoped>
  .content{
    display: flex;
    text-align: center;
    overflow: hidden;
    flex-direction: column;
    width: 85.5%;
    margin-left: 260px;

    box-shadow: rgba(70, 76, 91, 0.54) 1px 0px 20px 0px;
    padding: 20px;
    min-height: 600px;
    margin-bottom: 10px;
    position: absolute;
    bottom: 0;
    top: 90px;
    border-radius: 5px;
  }
  .oparity{

    text-align: center;

    flex-direction: column;
    width: 71%;
    margin-left: 332px;


    padding: 20px;
  }
  .oparity ul li{
    margin-bottom: 50px;
    list-style: none;
    cursor: pointer;
    display: inline-block;
    float: left;
    width: 150px;
    height:50px;
    background: dodgerblue;
    margin-left: 10px;
    text-align: center;
    line-height: 50px;
    color: #fff;
  }
  .oparity ul li:hover{
    background: #fff;
    border: 1px solid dodgerblue;
    color: dodgerblue;
  }
</style>
