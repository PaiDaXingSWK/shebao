<template>
  <div style="width: 100%">
    <v-peopleList></v-peopleList>
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
            <i-col span="4">
              <i-select v-model="personMsg.personname"  filterable placeholder="姓名" clearable style="width: 100%">
                <i-option> </i-option>
              </i-select>
            </i-col>
            <i-col span="4">
              <i-select  :model.sync="personMsg.personid"  filterable placeholder="身份证号" clearable style="width: 100%">
                <i-option     > </i-option>
              </i-select>
            </i-col>
            <i-col span="4">
              <i-select  :model.sync="personMsg.personsex"  filterable placeholder="性别" clearable style="width: 100%">
                <i-option     > </i-option>
              </i-select>
            </i-col>
            <i-col span="4">
              <date-picker :model.sync="personMsg.time" type="datetime"   placeholder="时间" style="width: 100%"  ></date-picker>
            </i-col>

            <i-col span="4" >
              <i-button type="info" @click="search" >搜索</i-button>
            </i-col>
          </Row>
        </div>
        <Table border :columns="columns7" :data="data6"></Table>



      <!--   <div style="margin-left: 70%">
           <Button>迁移</Button>
           <Button type="primary">读取身份证</Button>
           <Button type="ghost">认证</Button>
           <Button type="error">删除用户</Button>
         </div>-->
      <!-- 拍照 -->
      <!-- <Modal id="takePhote"  width="450"
        v-model="modalPhoto"
        title="普通的Modal对话框标题"
              footer="000"
        @on-ok="ok"
        @on-cancel="cancel">
        <div style="width: 800px"></div>
       <div class="photo-wrapper">
        <v-photo @upup="change"></v-photo>
       </div>
         <div slot="footer" class="aa">

         </div>
      </Modal>-->
      <!--   最新拍照 -->
      <Modal id="takePhote"  width="450"
             v-model="modalPhoto"
             title="普通的Modal对话框标题"
             footer="000"
             @on-ok="ok"
             @on-cancel="cancel">
        <div style="width: 800px"></div>
        <div class="photo-wrapper">
          <div >
            <div class="booth">
              <div class="btn">
                <Button type="success" id="readyw" @click="on">打开摄像头</Button>
                <Button type="success" id="off">关闭摄像头</Button>
              </div>
              <video id="video" width="400" height="300"></video>
              <Button id='tack' type="primary" @click="go"> 拍照</Button>
              <Button id='repeat' type="primary" @click="re"> 重新拍照</Button>
              <canvas id='canvas' width='400' height='300'></canvas>
              <img id='img' src=''>
            </div>

          </div>
        </div>
        <div slot="footer">
          <i-button type="success" @click="submitPhoto('user')">确定</i-button>
          <i-button type="ghost" @click="cancelPhote('user')" style="margin-left: 8px">取消</i-button>
        </div>
      </Modal>
     <!-- <div style="width: 800px;height: 600px;border: 1px solid red;position: absolute;z-index: 9;left: 20%;background: #fff;">
        <div style="height: 50px"></div>
        <v-photo></v-photo>

      </div>-->

      <Modal
        v-model="massageGather"
        title="信息采集"
        @on-ok="photoOk"
        @on-cancel="cancel">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
      </Modal>
      <Modal
        v-model="modal1" width='750'
        title="指静脉采集"
        @on-ok="ok"
        @on-cancel="cancel">
        <div>
          <Steps :current="1">
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
            <i-select style='width:134px'>
              <i-option v-for="item in cityList" :value="item.value" :key="item"> {{ item.label }}</i-option>
            </i-select>
          </i-col>
          <i-col span="12">
            <Radio-group type="button">
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
//  import photo from '../photo.vue'
  export default{
    data(){
      return {
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
            key: 'age'
          },
          {
            title: '地址',
            key: 'address'
          },
          {
            title: '操作',
            key: 'action',
            width: 550,
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
                }, '认证'), h('Button', {
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
                }, '照片采集'), h('Button', {
                  props: {
                    type: 'warning',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.aa(params.index)
                    }
                  }
                }, '指静脉采集'),
                h('Button', {
                  props: {
                    type: 'info',
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
    methods: {
      on(){
          /* 拍照 */
        let   vendorUrl = window.URL || window.webkitURL;
        navigator.getMedia = navigator.getUserMedia ||
          navagator.webkitGetUserMedia ||
          navigator.mozGetUserMedia ||
          navigator.msGetUserMedia;
        navigator.getMedia({
          video: true, //使用摄像头对象
          audio: false  //不适用音频
        }, function(strem){
          console.log(strem);
          video.src = vendorUrl.createObjectURL(strem);
          video.play();
        }, function(error) {
          //error.code
          console.log(error);
        });
      },
      go(){
        /* 拍照 */
        let video = document.getElementById('video');
        let  canvas = document.getElementById('canvas');
        let  snap = document.getElementById('tack');
        let  img = document.getElementById('img');
        //绘制canvas图形
        canvas.getContext('2d').drawImage(video, 0, 0, 400, 300);

        //把canvas图像转为img图片
        img.src = canvas.toDataURL("image/png");

      },
      re(){
        /* 拍照 */
        let  canvas = document.getElementById('canvas');

        let  img = document.getElementById('img');
        canvas.getContext('2d').clearRect(0,0,400,300);
        img.src = canvas.toDataURL("");
      },
      cancelPhote(){
        let  canvas = document.getElementById('canvas');

        let  img = document.getElementById('img');
        canvas.getContext('2d').clearRect(0,0,400,300);
        img.src = canvas.toDataURL("");
        this.modalPhoto=false;
      },
      submitPhoto(){
        let  canvas = document.getElementById('canvas');

        let  img = document.getElementById('img');
        canvas.getContext('2d').clearRect(0,0,400,300);
        img.src = canvas.toDataURL("");
        this.modalPhoto=false;
        this.$Notice.open({
          title: '这是通知标题',
           desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
        });
      },
      photoOk(){
         $('.booth').css('display','none')
      },
      massageGathers() {
        this.massageGather = true
      },
      ok () {
        this.$Message.info('点击了确定');
      },
      cancel () {
        this.$Message.info('点击了取消');
      },
      camera () {
      this.modalPhoto=true;
            console.log('+++')
       /* this.$Modal.confirm({
          title: '确认对话框标题',
          content: '<div style="width: 800px"></div> <div class="photo-wrapper"> <v-photo></v-photo> </div>',
          okText: '',
          cancelText: 'Cancel'
        });*/
      },
      search(){
          console.log(this.personMsg)
      }

    },
    components: {
      'v-peopleList': peopleList,
      'v-peopleMsg': peopleMsg
      /*,
      'v-photo': photo*/
    }
  }
</script>
<style scoped>
  .content {
    display: flex;
    text-align: center;
    overflow: hidden;
    flex-direction: column;
    width: 85.5%;
    margin-left: 260px;
    background: #fff;
    /*box-shadow: rgba(70, 76, 91, 0.54) 1px 0px 20px 0px;*/
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
