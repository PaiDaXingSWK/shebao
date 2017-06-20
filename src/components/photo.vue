<template>
    <div >
      <div class="booth">
        <div class="btn">
        <Button type="success" id="readyw">打开摄像头</Button>
        <Button type="success" id="off">关闭摄像头</Button>
        </div>
        <video id="video" width="400" height="300"></video>
        <Button id='tack' type="primary"> 拍照</Button>
        <Button id='repeat' type="primary"> 重新拍照</Button>
        <Button>确定</Button>
        <Button>取消</Button>
        <canvas id='canvas' width='400' height='300'></canvas>
        <img id='img' src=''>
      </div>

    </div>
</template>
<!--<script type="text/ecmascript-6">

    export default{
        data(){
            return {}
        },
        components: {}
    }
</script>-->

<script>
  window.onload=function(){
    var video = document.getElementById('video'),
      canvas = document.getElementById('canvas'),
      snap = document.getElementById('tack'),
      img = document.getElementById('img'),
      vendorUrl = window.URL || window.webkitURL;
    var aa=document.getElementById('readyw')
    var repeat=document.getElementById('repeat')
    var cc=false;
    aa.onclick=function () {
    cc=true;
    if(aa){
      tp();
    }

    }
    repeat.onclick=function () {
       canvas.getContext('2d').clearRect(0,0,400,300);
      img.src = canvas.toDataURL("");
       $emit('upup','false');
    }
    var bb=document.getElementById('off')
    bb.onclick=function () {

      cc=false;
    }
   function tp() {





  //媒体对象
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
  snap.addEventListener('click', function(){

    //绘制canvas图形
    canvas.getContext('2d').drawImage(video, 0, 0, 400, 300);

    //把canvas图像转为img图片
    img.src = canvas.toDataURL("image/png");

  })
   }

  }
</script>
<style scoped>
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
