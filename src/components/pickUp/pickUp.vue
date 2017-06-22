<template>
  <div>

    <div class="list-content" style="box-shadow: 2px 10px 18px #333333;">

      <i-menu theme="dark" active-name="1">

        <Menu-item name="1">
          <Icon type="document-text"></Icon>
          用户信息采集
        </Menu-item>
        <!--  <Menu-item name="2">
            <Icon type="chatbubbles"></Icon>
            管理设置
          </Menu-item>-->

        <!-- <Menu-item name="3">
           <Icon type="heart"></Icon>
           系统恢复
         </Menu-item>
         <Menu-item name="4">
           <Icon type="heart-broken"></Icon>
           系统备份
         </Menu-item>
         <Menu-item name="5">
           <Icon type="heart-broken"></Icon>
           参数配置
         </Menu-item>-->

      </i-menu>
    </div>
    <div class="table-wrapper">
      <!--  <div class="address">
          <Cascader :data="data" size="large"></Cascader>
        </div>-->
      <div class="step">
        <Steps :current="stepCount">
          <Step title="创建社区" content="选择你的社区或者新建你的社区"></Step>
          <Step title="个人信息" content="录入身份证信息"></Step>
          <Step title="采集照片" content="采集个人照片"></Step>
          <Step title="采集指静脉" content="进行三次指静脉采集"></Step>


        </Steps>
      </div>
      <!-- 创建社区 -->
      <div class="creat-comunity" v-show="stepCount==0">
        <v-comunity></v-comunity>
      </div>
      <!-- 身份证信息 -->
      <div class="person-msg" v-show="stepCount==1">
        <i-form ref="formValidate" :label-width="80">
          <Row>
            <img src="../../assets/logo.png" alt="">
          </Row>
          <Row>
            <i-col span="12">
              <Form-item label="地址">
                <Cascader :data="data" size="large"></Cascader>
              </Form-item>
            </i-col>
          </Row>
          <Row>
            <i-col span="6">
              <Form-item label="姓名" prop="name">
                <Input placeholder="请输入姓名"></Input>
              </Form-item>
            </i-col>
            <i-col span="6">
              <Form-item label="民族" prop="name">
                <Input placeholder="请输入民族"></Input>
              </Form-item>
            </i-col>
            <i-col span="6">
              <Form-item label="出生日期" prop="name">

                <Date-picker type="date" :options="options4" placeholder="选择日期" style="width: 200px"></Date-picker>

              </Form-item>
            </i-col>
            <i-col>

            </i-col>
          </Row>
          <Row>
            <i-col span="6">
              <Form-item label="性别" prop="mail">
                <Input placeholder="请输入性别"></Input>
              </Form-item>
            </i-col>
            <i-col span="6">
              <Form-item label="地址" prop="mail">
                <Input placeholder="请输入地址"></Input>
              </Form-item>
            </i-col>

            <i-col span="6">
              <Form-item label="有效期限" prop="mail">

                <Date-picker type="date" :options="options4" placeholder="选择日期" style="width: 200px"></Date-picker>

              </Form-item>
            </i-col>
          </Row>
          <Row>
            <i-col span="6">
              <Form-item label="签发机关" prop="mail">
                <Input placeholder="请输入签发机关"></Input>
              </Form-item>
            </i-col>
            <i-col span="6">
              <Form-item label="身份证号码" prop="mail">
                <Input placeholder="请输入身份证号码"></Input>
              </Form-item>
            </i-col>
            <i-col span="6">
              <Form-item label="去世时间" prop="mail">

                <Date-picker type="date" :options="options4" placeholder="选择日期" style="width: 200px"></Date-picker>

              </Form-item>
            </i-col>
          </Row>
          <Row>
            <i-col span="6">
              <Form-item label="手机号" prop="mail">
                <Input placeholder="请输入签发机关"></Input>
              </Form-item>
            </i-col>
            <i-col span="6">
              <Form-item label="固定电话" prop="mail">
                <Input placeholder="请输入地址"></Input>
              </Form-item>
            </i-col>

          </Row>


          <i-col span="24">


            <Form-item>
              <Button type="success" @click="handleSubmit('formValidate')">刷去身份证</Button>
              <Button type="success" @click="handleSubmit('formValidate')">手工录入身份证</Button>


              <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
              <Button type="primary" @click="stepNext1('formValidate')">下一步</Button>
            </Form-item>
          </i-col>

        </i-form>
      </div>
      <!-- 采集照片 -->
      <div class="take-photo" v-show="stepCount==2">
        <div class="photo-wrapper">
          <div>
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
        <div class="photo-next">
          <i-button type="success" size="large" @click="stepNext2('user')">下一步</i-button>

        </div>
      </div>
      <!-- 采集指静脉 -->
      <div class="sd-msg" v-show="stepCount==3">
        <i-form ref="formCustom" :label-width="90">
          <Row>
            <i-col span="7">

              <Form-item label="选择采集设备">
                <Select style="width:200px">
                  <Option></Option>
                </Select>
              </Form-item>
            </i-col>
            <i-col span="12">
              <Form-item label="选择采集手指">
                <Radio-group v-model="button4" type="button" size="large">
                  <Radio label="左手中指"></Radio>
                  <Radio label="左手食指"></Radio>
                  <Radio label="右手中指"></Radio>
                  <Radio label="右手食指"></Radio>
                </Radio-group>
              </Form-item>
            </i-col>
          </Row>
          <Form-item>
            <Button class="start" type="primary" size="large" @click="handleSubmit('formCustom')">开始采集</Button>

          </Form-item>
        </i-form>
      </div>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import module from '../module.vue'
  import comunity from'./comunity.vue'
  export default{
    data(){
      return {
        stepCount: 0,
        button4: '北京',
        options4: {
          disabledDate (date) {
            const disabledDay = date.getDate();
            return disabledDay === 15;
          }
        },
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
      on(){
        /* 拍照 */
        let vendorUrl = window.URL || window.webkitURL;
        navigator.getMedia = navigator.getUserMedia ||
          navagator.webkitGetUserMedia ||
          navigator.mozGetUserMedia ||
          navigator.msGetUserMedia;
        navigator.getMedia({
          video: true, //使用摄像头对象
          audio: false  //不适用音频
        }, function (strem) {
          console.log(strem);
          video.src = vendorUrl.createObjectURL(strem);
          video.play();
        }, function (error) {
          //error.code
          console.log(error);
        });
      },
      go(){
        /* 拍照 */
        let video = document.getElementById('video');
        let canvas = document.getElementById('canvas');
        let snap = document.getElementById('tack');
        let img = document.getElementById('img');
        //绘制canvas图形
        canvas.getContext('2d').drawImage(video, 0, 0, 400, 300);

        //把canvas图像转为img图片
        img.src = canvas.toDataURL("image/png");

      },
      re(){
        /* 拍照 */
        let canvas = document.getElementById('canvas');

        let img = document.getElementById('img');
        canvas.getContext('2d').clearRect(0, 0, 400, 300);
        img.src = canvas.toDataURL("");
      },
      cancelPhote(){
        let canvas = document.getElementById('canvas');

        let img = document.getElementById('img');
        canvas.getContext('2d').clearRect(0, 0, 400, 300);
        img.src = canvas.toDataURL("");
        this.modalPhoto = false;
      },
      submitPhoto(){
        let canvas = document.getElementById('canvas');

        let img = document.getElementById('img');
        canvas.getContext('2d').clearRect(0, 0, 400, 300);
        img.src = canvas.toDataURL("");
        this.modalPhoto = false;
        this.$Notice.open({
          title: '这是通知标题',
          desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
        });
      },
      stepNext1(){
        this.stepCount++
      },
      stepNext2(){
        this.stepCount++
      },
      getpage () {
        var _this = this;
        _this.$http.get("./static/data.json")
          .then(function (rsp) {
            console.log(rsp.data.goods)
            _this.data6 = rsp.data.goods
            _this.data6.address = rsp.data.goods[0].foods
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    },
    components: {
        'v-module': module,
      'v-comunity': comunity
    },
    created(){
      this.getpage();
    }
  }
</script>
<style scoped>
  .list-content {
    position: absolute;
    top: 70px;
    left: 0;
    bottom: 0;
    background: #1c2438;
    margin-bottom: 10px;
  }

  .table-wrapper {
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

  .take-photo, .person-msg {
    margin-left: 10%;
  }

  .take-photo {
    width: 420px;
    margin-left: 30%;
    margin-top: 7%;
  }

  .step {
    margin-left: 10%;
    margin-top: 15px;
  }

  .booth {
    width: 420px;

    background: #ccc;
    border: 10px solid #ddd;
    margin: 0 auto;
    position: relative;
  }

  .booth img, canvas {
    position: absolute;
    top: 32px;
    left: 0px;
  }

  .photo-next {
    margin-top: 20px;
    margin-left: 35%;
  }

  .sd-msg {
    margin-top: 200px;
    margin-left: 15%;
  }

  .start {
    margin-top: 50px;
    margin-left: 20%;
  }

</style>
