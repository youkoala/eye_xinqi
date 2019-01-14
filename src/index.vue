<template>
  <div class="wrapper">
    <image ref="logo" :src="logo" class="logo" />
    <text class="greeting">体检筛查系统</text>
    <text class="descript">专业眼科体检筛查一体化系统</text>
    <text class="version">V1.0.2</text>
  <div @click="buttonClicked" class="box"><text>动画</text></div>
  <div @click="go1" class="box"><text>去websocket</text></div>
  <div @click="go2" class="box"><text>去home</text></div>
    <!-- <wxc-button text="弹出" type="blue" 
                @wxcButtonClicked="btnClick">
    </wxc-button>
    <wxc-popup width="500"
               pos="left"
               :show="isShow"
               @wxcPopupOverlayClicked="overlayClicked">
    </wxc-popup> -->
    <router-view/>
  </div>
</template>

<script>
const modal =weex.requireModule('modal');
const navigator = weex.requireModule('navigator');
const animation =weex.requireModule('animation');
import { WxcButton, WxcPopup } from 'weex-ui';
export default {
  data () {
    return {
      logo: '/static/eye-logo.png',
      btnDisabled:true,
      isShow: false
    }
  },
  methods:{
    btnClick(e){
      modal.toast({
        'message':e.type,
        'duration':1,
      })
      this.isShow = true;
    },
    go1(){
      navigator.push({
            url: 'http://192.168.22.206:8081/websocket',
            animated: "true"
          }, event => {
            modal.toast({ message: 'callback: ' + event })
          })

    },
    go2(){
      navigator.push({
            url: 'http://192.168.22.206:8081/home',
            animated: "true"
          }, event => {
            modal.toast({ message: 'callback: ' + event })
          })

    },
     buttonClicked () {
       console.log('buttonClicked',animation)
        var ref1 = this.$refs.logo;

        animation.transition(ref1, {
          styles: {
            height:0,
            transformOrigin:{'y-axis':'center'}
          },
          duration: 800, //ms
          timingFunction: 'ease',
          needLayout:false,
          delay: 0 //ms
        }, function () {
          
          
        })
      },
      overlayClicked () {
        this.isShow = false;
        
      }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 150px;
    height: 150px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 40px;
    letter-spacing: 5px;
    font-weight: bolder;
    color: #000000;
  }
  .descript,.version{
    margin-top: 10px;
    font-size: 24px;
    color: gray;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #e6c8c8;
  }
  .wrapper>>>.wxc-btn{border-radius: 40px;}
  
</style>
