<template>
  <div class="btn {{full==true?'btn-full':'btn-normal'}}" style="background-color:{{disabled?'#9bcdfa':btnColor}}">
    <text style="font-size:{{textsize}};color:{{textcolor}};"> {{text}}</text>
  </div>
</template>
<script>
  require('weex-components');
  var apis = require('./api.js');//引一个公众的js，个人项目用到，跟button无关
  module.exports = {
    data: {
      text: "按钮文本",
      textsize: 0,
      textcolor: "#fff",
      disabled: false,//控制是否可用
      full: false,//是否满宽度显示，否则显示650
      titleFontSizeLarger:40,
    },
    created: function () {
      apis.init(this, {
        font: true
      });//初始化页面，项目中用，跟button无关

      //如果没定义textsize,就使用默认的
      if (this.textsize == 0) this.textsize = this.titleFontSizeLarger;


    }

  }
</script>
<style scoped>
  .btn {
    height: 80px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    padding: 20;
    background-color: #0f8cf0;
  }

  .btn-normal {
    width: 650;
    margin-left: 50;
  }

  .btn-full {
    width: 750;
  }

  .btn:active {
    background-color: #9bcdfa;
  }
</style>