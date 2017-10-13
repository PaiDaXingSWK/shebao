<template>
  <div>

    <div class="list-content" style="box-shadow: 2px 10px 18px #333333;">

      <i-menu theme="dark" active-name="1">

        <Menu-item name="1">
          <Icon type="document-text"></Icon>
          第一个
        </Menu-item>


      </i-menu>


    </div>
    <div class="table-wrapper">
      <!--  <div class="address">
          <Cascader :data="data" size="large"></Cascader>
        </div>-->
      <div class="step">
        <Steps :current="stepCount">
          <Step title="第一步" content="第一步"></Step>
          <Step title="第二部" content="第二部"></Step>
          <Step title="第三部" content="第三部"></Step>
          <Step title="第四部" content="第四部"></Step>
          <Step title="第五步" content="第五步"></Step>


        </Steps>
      </div>



    </div>

  </div>
</template>
<script type="text/ecmascript-6">


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


    },


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
