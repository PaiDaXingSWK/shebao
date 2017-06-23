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
      <div class="company" @click="comMsg">
        <img width="30px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzRFQTI4M0Y3RkFBMTFFNjgwN0Y4RTkwNDZCOUJEQ0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzRFQTI4NDA3RkFBMTFFNjgwN0Y4RTkwNDZCOUJEQ0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNEVBMjgzRDdGQUExMUU2ODA3RjhFOTA0NkI5QkRDRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozNEVBMjgzRTdGQUExMUU2ODA3RjhFOTA0NkI5QkRDRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrnUQqkAAAMAUExURd7l+eXp/s7V5vH1+ODm+uDh5eTn8d7h6uHj7vn6/ejp8d7i8vHx8t3d5enx/vLy9ufp7uHp+dTg8+zs7+fn6+zz9+3u9/z8/OHp/d/i9uDi7eLo7u3t8N7f89/k6PDx9vDx9Nri9dLX7erw9/j4+PX0+N7d6eXm79Te6uDt/urq79/r9ejv/t7i7N/k9d7i9Onr/tre69vp/t7g7NHa7t7l8tLU2O3u8+Hj7t/i8N7g5/D1/u7z+M/X7tLU2uTm+/v8//T09eTs/t/m/97g8Pf4+vT2+enp7d/k9+Hj89Xb8tLd68/W9fDz9ubu/uns/ebs/ufp8uLo9uDl/uTk7+Xm6OXk6OLi8ePl6N3j9dzj8t7g8+Dj593j797h7t7e4fv8/e/v8+Xu/u3u8eHm9eXn6+Hk6dvh+eDj697i587V8M/T6/7+/vr6+/////f3+fz7+/f2+Pv7+/X19vn5+/f3+Pb2+Pb29/j4+vPz9vX19/v6+/z8/tzo/vb2+fj5+87T7/r5+fr5+vr6+t3j7PLy887V7eHh6t7k8ePt9s7U6ufo6trk5t7f7/n5+unt/vHx9uDl/PLy9Pj3+Nvl/eXm9ODh9M/W7fv//9/o/d/l/fX09uLm8+Hn8uLm8fPz9OLk987V7ubq8PPz/szv/+jw/uvs7+P7/t7h8Oju9eDf6uzr9fb1993h4OXk5vDv9u7t79Ll/Pr7/Nnb4Nrf4LfQ4f39/fz7/Mfa7dTf49jl9djn3dvj697j9tvk6d/h9qTC2uLh4fb2++Hl5u/w8eHh7eDg79/j89Xd5uLi7szR5Onn+Ofs89XX2vL09evt/uru/eLj6evq7PDw8eLi56anxd3j++Hn/uPo/s3d0N/k79zr/t7q/93l/N/k/+jp9PT19uTo+vT1+Obm6OXl7H2oxeDk8eHo8eDm8djj8ePk8d3i5d7g5OTo99zk8dzk8+bu9fLy9dLd7/Py9ODm9uvs88/R1OLn9eLn+Ozp+tLZ5+vz+OHm6+7t/v38/P///2br04gAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAGE0lEQVR42uyaeVwUVRzAkUM/AiKEcgiBGAkpCJblBkJEgFpGolBWlkZ5zx7tAgsrckgKqcBqQYfdpd1lVlh2n2S32WG32X1fWpb0xmV3Z957O/Nm5g3x+qP9feAPfvPe+/KbefN7v2MC+P9IAvxgP9gP9oP/B+CI4LAyB+iX6Hee9epMpkEGc0mL9wCPpD2VzYn6wQVfcnIdEKjfMLvV3L17VnuplqwMZs943F2CrWDfk+w2V09ruM2Ljd2Zy2xXcz+J1q4MYfg6JYhYYJnD8D3uhVwDx86BcBdD7rkMPVcRxJ4KGLrMEZCb/AY7X81FQm4aw0OCs0HudSxPJ4gFkSyPRWQ7J3MMwX2I22AZCCxDbnQnQ3Awwu1jGPrUI9zLWMZcDsi9kWWwNx4x+E2G4EKEO59leGuB3DEs4+oLEIM5lmCE+wTLTKIbcscyTWEQgytZgpdC7iKmSRticC5L8B2Q+wXTNLUagk9hCf4acicwTcznszMYByNbi2kp4qxBSxtUwEdDcCFTcDkERz32/vCXJ09+6PWX0tPTN2x4NOnB/Pz8k9zyx2twRtIP8yrWrx91dkXFKBV5+/P7FhDB90Dw5UBBTvdsiFhQAqiklADmAB14R3EHHbiNAIZ1DrD/F6UFznBzv1wJKGUpAQyTw5EPAFVw4JlWWnAiAdwqjhhqSlBa4Kh+g5++E1ALJw+OhmD+NqX5v7kGb+8opgcvlAfDARfy/DEK8//uHzx6Pz34RzXwIZ6//ZEpeYGB4wTNVcub1q1ralq7Ni/v5hXuwaPh8PtD62ocDebaWqPR9eMRi+u3ttZsNpoR8J9q4F2C6iOi6wbTGoVz7FYVHwXP2l418HcawEAA/8NrBrepge8WVBsRMF4aduXNaNCvVDa2a7c4RgN4mhc8Q/U4sGkHdwmquV7FpZLSjLi5ulXBMPmcpPkZawC3q4JTxXUPqIENgmqVV2GTbq7DXgdyDqY2mTIKcktLZ88urCwdUmCSvqZyYJgmZmoAG6s8l17Ei0Xbwq8QKvnWzdFv4YdelDx4qzhgpqA6nnSrXWZ4z4gTefkYxi3hLt1nqr56njjgU51gDsiAD8lHkAj4e+mIVQrgKunrNNUX3F8jyxL/uogAThgoOBPIgQ3yBQb50Ocrr+o09Vsdj78Wzc0YGdvUvaRgT+xngWG6wEW9KSnt7efHv4qCEXMySOBh4pAWDeAqqTfyyuGgYgiGi1YTw1skSc0eCBgElUDwdKlbkoCRUmKYR3Mt2YEIYIP00vYg5FYTols8aav2rRUvUQBbSTWpWDARgsMguJ4Mhs8DXO+56v3LQbYYgL0FKHvLlcno62QhFZEw8Bw4JdqteE8LGIC6uk12+5o1TqfdbsfepshJxDowsRThdujvCisr3GolcZqJZUIcvBPg/m0JETzc2kgX2h5ULL6gXr7/yidkix+mjKv3Kte5bsDd3VwieGGJhYprpCgpunZDCnFzuQZSmfyMGtiA5VgRQsdaJpSy7qPJy1WLqNhZzkekyiSYYnzVN1YJNRIoVqAVC+WRfGBg3qxZy1dMkQ0fr/7w2zZnnaOm5lizucYlZpc0mB3mWqdzZNk1H6P/hJbWQAsy4Tz9VZ041OC/tICj0BmZernZ6Cph2to/reicjSqJEUFi0DVsWhteRnTWCXrsbdiGLlGoFYxHqR/oqNoB9ccl29Rsw48YWi4ebaZp7y1irQk5P6soGQexuc/zNGC+CydTPOiZCiUmDWDO1ykd0IbdEuozr4enA0vToEUxGrg5vrOCeVow/0qq7yKhccrUzm7fGc3P8fRgvlOSggFbDrnNuXu6ZPiOibweMBZ0wrpMb3C9ZOCQonLpyI6tdN1UVLLkD7zokAUhib9aQY91U+LunJwJ8qPG8PrBPFcN9Ira8aLyIRmXpg/boNpNUf10btdqHdzH6fvHMkYbaLFTj+P/DTDPN0bSYDcbdHXM5SVqqFZscry+xjX5ho/4XUPXZfEtejvmSnLTCy2K1NCfaT7foPzMeVlFuPx+Gl8+oI65FqkMyOpCcm9zWduMOB1fqvi/ofeD/WA/2A/WLEcEGACyiT5VLFIw3AAAAABJRU5ErkJggg==" alt="">
        <br>
        <span class="company-name">
         圣点科技提供技术支持
        </span>
      </div>
      <Modal
        v-model="modalCom"
        title="公司简介"
        @on-ok="ok"
        @on-cancel="cancel">
        <h4 class="com-name">
          西安圣点世纪科技有限公司
        </h4>
        <ul class="com-list">
          <li>
            全国统一客服电话：4006823334
          </li><li>
          技术支持电话：029-88746641
        </li><li>
          公司网站：www.sdkj.com
        </li><li>
          公司地址：西安市高新区高新四路郎臣大厦2103室
        </li><li>
          版本号：0.0.1
        </li>
        </ul>
      </Modal>
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
          <Step title="认证" content="人员指静脉信息认证"></Step>


        </Steps>
      </div>
      <!-- 创建社区 -->
      <div class="creat-comunity" v-show="stepCount==0">
        <v-comunity v-on:message="recieveMessage"></v-comunity>
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
      <!-- 人员认证 -->
      <div class="qualification" v-show="stepCount==4">
        <v-qualification></v-qualification>
      </div>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import module from '../module.vue'
  import comunity from'./comunity.vue'
  import  qualification from'./ qualification.vue'
  export default{
    data(){
      return {
        modalCom:false,
        stepCount: 4,
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
      },
      recieveMessage: function (text) {
        console.log(text)
      },
      comMsg(){
        this.modalCom=true
      }
    },
    components: {
        'v-module': module,
      'v-comunity': comunity,
      'v-qualification': qualification
    },
    created(){
      this.getpage();
   this.recieveMessage();
    }
  }
</script>
<style scoped>
  .com-name{
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 25px;
  margin-bottom: 20px;
  color: #657180;
}
.com-list{
  height: 200px;
}
.com-list li{
  line-height: 40px;
  font-size: 14px;
  text-align: center;
  color: #657180;
}

  .company{
    position: absolute;
    bottom:25px;
    left: 40px;
    opacity: .3;
    cursor: pointer;
  }
  .company-name{
    color: #fff;
    font-size:13px;

    font-family: inherit;
  }
  .company img{
    vertical-align: top;

    margin-left: 45px;
  }
  .company:hover{
    opacity: 1;
  }
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
