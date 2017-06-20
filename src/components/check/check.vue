<template>
    <div style="margin-left: 500px">
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
              <Button>确定</Button>
              <Button>取消</Button>
              <canvas id='canvas' width='400' height='300'></canvas>
              <img id='img' src=''>
            </div>

          </div>
        </div>

      </Modal>



      <v-peopleList></v-peopleList>
    </div>
</template>
<script type="text/ecmascript-6">
  import peopleList from '../peopleList.vue'
    export default{
        data(){
            return {
              modalPhoto:true
            }
        },
      methods:{
            on(){
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
          let  canvas = document.getElementById('canvas');

          let  img = document.getElementById('img');
          canvas.getContext('2d').clearRect(0,0,400,300);
          img.src = canvas.toDataURL("");
        }
      },
        components: {'v-peopleList':peopleList}
    }
</script>
<style>
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
</style>
