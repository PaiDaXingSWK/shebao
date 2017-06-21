<template>
  <div>
    <div class="people-list">
        <div class="title">
          <span>
            人员列表
          </span>
        </div>
        <div class="list">
          <Tree :data="baseData" show-checkbox></Tree>
        </div>
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

  </div>
</template>
<script type="text/ecmascript-6">
import peopleMsg from './peopleMsg.vue'
    export default{
        data(){
            return {
              modalCom:false,
                baseData: [{
              expand: true,
              title: '陕西省',
              children: [{
                title: '西安市',
                expand: true,
                disabled: false,
                children: [{
                  title: '高新区',
                  disableCheckbox: true,
                  children: [{
                    title: '<span >一一社区居委会</span>',
                  }]
                }, {
                  title: '长安区',
                }]
              }, {
                title: '渭南市',
                expand: true,
                checked: false,
                children: [{
                  title: '<span style="color: red">临渭区</span>',
                }]
              }]
            }]}
        },
        components: {
          'v-peopleMsg': peopleMsg
        },
      methods:{
        comMsg(){
           this.modalCom=true
        }
      }
    }
</script>
<style scoped>
  .title{
    text-align: center;
    background: deepskyblue;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    color: #fff;
  }
    .people-list {
      width: 240px;
      position: absolute;
      top:70px;
      bottom:0;
      left:0;
       background: #1c2438;
      box-shadow:2px 10px 18px #333333;
      padding: 20px;
      margin-bottom: 10px;
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
</style>
