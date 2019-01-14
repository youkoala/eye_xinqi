// { "framework": "Vue"} 

webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(12)
)

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(14)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\workspace\\vuerouter-demo backup\\vuerouter-demo\\src\\web\\websocket.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-04d62bae"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
  "input": {
    "fontSize": "40",
    "height": "80",
    "width": "600"
  },
  "button": {
    "fontSize": "36",
    "width": "150",
    "color": "#41B883",
    "textAlign": "center",
    "paddingTop": "25",
    "paddingBottom": "25",
    "borderWidth": "2",
    "borderStyle": "solid",
    "marginRight": "20",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var websocket = weex.requireModule('webSocket');
exports.default = {
  data: function data() {
    return {
      connectinfo: '',
      sendinfo: '',
      onopeninfo: '',
      onmessage: '',
      oncloseinfo: '',
      onerrorinfo: '',
      closeinfo: '',
      txtInput: '',
      navBarHeight: 88,
      title: 'Navigator',
      dir: 'examples',
      baseURL: ''
    };
  },

  methods: {
    connect: function connect() {
      websocket.WebSocket('ws://echo.websocket.org', '');
      var self = this;
      self.onopeninfo = 'connecting...';
      websocket.onopen = function (e) {
        self.onopeninfo = 'websocket open';
      };
      websocket.onmessage = function (e) {
        self.onmessage = e.data;
      };
      websocket.onerror = function (e) {
        self.onerrorinfo = e.data;
      };
      websocket.onclose = function (e) {
        self.onopeninfo = '';
        self.onerrorinfo = e.code;
      };
    },
    send: function send(e) {
      var input = this.$refs.input;
      input.blur();
      websocket.send(this.txtInput);
      this.sendinfo = this.txtInput;
    },
    oninput: function oninput(event) {
      this.txtInput = event.value;
    },
    close: function close(e) {
      websocket.close();
    }
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('div', [_vm._m(0), _c('input', {
    ref: "input",
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "please input message to send",
      "autofocus": "false",
      "value": ""
    },
    on: {
      "change": _vm.onchange,
      "input": _vm.oninput
    }
  }), _c('div', {
    staticStyle: {
      flexDirection: "row",
      justifyContent: "center"
    }
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.connect
    }
  }, [_vm._v("connect")]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.send
    }
  }, [_vm._v("send")]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.close
    }
  }, [_vm._v("close")])]), _vm._m(1), _c('text', {
    staticStyle: {
      color: "black",
      height: "80px"
    }
  }, [_vm._v(_vm._s(_vm.sendinfo))]), _vm._m(2), _c('text', {
    staticStyle: {
      color: "black",
      height: "80px"
    }
  }, [_vm._v(_vm._s(_vm.onopeninfo))]), _vm._m(3), _c('text', {
    staticStyle: {
      color: "black",
      height: "400px"
    }
  }, [_vm._v(_vm._s(_vm.onmessage))]), _vm._m(4), _c('text', {
    staticStyle: {
      color: "black",
      height: "80px"
    }
  }, [_vm._v(_vm._s(_vm.oncloseinfo))]), _vm._m(5), _c('text', {
    staticStyle: {
      color: "black",
      height: "80px"
    }
  }, [_vm._v(_vm._s(_vm.onerrorinfo))]), _vm._m(6), _c('text', {
    staticStyle: {
      color: "black",
      height: "80px"
    }
  }, [_vm._v(_vm._s(_vm.closeinfo))])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      backgroundColor: "#286090"
    }
  }, [_c('text', {
    staticClass: ["title"],
    staticStyle: {
      height: "80px",
      padding: "20px",
      color: "white"
    }
  }, [_vm._v("websocket")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      backgroundColor: "lightgray"
    }
  }, [_c('text', {
    staticClass: ["title"],
    staticStyle: {
      height: "80px",
      padding: "20px",
      color: "black"
    }
  }, [_vm._v("method = send")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      backgroundColor: "lightgray"
    }
  }, [_c('text', {
    staticClass: ["title"],
    staticStyle: {
      height: "80px",
      padding: "20px",
      color: "black"
    }
  }, [_vm._v("method = onopen")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      backgroundColor: "lightgray"
    }
  }, [_c('text', {
    staticClass: ["title"],
    staticStyle: {
      height: "80px",
      padding: "20px",
      color: "black"
    }
  }, [_vm._v("method = onmessage")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      backgroundColor: "lightgray"
    }
  }, [_c('text', {
    staticClass: ["title"],
    staticStyle: {
      height: "80px",
      padding: "20px",
      color: "black"
    }
  }, [_vm._v("method = onclose")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      backgroundColor: "lightgray"
    }
  }, [_c('text', {
    staticClass: ["title"],
    staticStyle: {
      height: "80px",
      padding: "20px",
      color: "black"
    }
  }, [_vm._v("method = onerror")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      backgroundColor: "lightgray"
    }
  }, [_c('text', {
    staticClass: ["title"],
    staticStyle: {
      height: "80px",
      padding: "20px",
      color: "black"
    }
  }, [_vm._v("method = close")])])
}]}
module.exports.render._withStripped = true

/***/ })
]);