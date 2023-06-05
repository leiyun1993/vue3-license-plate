module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2845":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_license_plate_vue_vue_type_style_index_0_id_20feba54_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8230");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_license_plate_vue_vue_type_style_index_0_id_20feba54_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_license_plate_vue_vue_type_style_index_0_id_20feba54_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6961":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6b0d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.default = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "8230":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./packages/license-plate/license-plate.vue?vue&type=template&id=20feba54&scoped=true


const _withScopeId = n => (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-20feba54"),n=n(),Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(),n)
const _hoisted_1 = { class: "license-plate_container" }
const _hoisted_2 = { class: "input_container" }
const _hoisted_3 = ["onClick"]
const _hoisted_4 = {
  key: 0,
  class: "keyboard_container"
}
const _hoisted_5 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", { class: "iconfont icon-jianpan" }, null, -1))
const _hoisted_6 = [
  _hoisted_5
]
const _hoisted_7 = { class: "keyboard_body" }
const _hoisted_8 = {
  key: 0,
  class: "province_list"
}
const _hoisted_9 = ["onClick"]
const _hoisted_10 = { class: "button" }
const _hoisted_11 = {
  key: 1,
  class: "number_list"
}
const _hoisted_12 = ["onClick"]
const _hoisted_13 = {
  key: 2,
  class: "number_list"
}
const _hoisted_14 = ["onClick"]
const _hoisted_15 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", { class: "button img" }, [
  /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", { class: "iconfont icon-backspace" })
], -1))
const _hoisted_16 = [
  _hoisted_15
]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_1, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
      class: "",
      onClick: _cache[0] || (_cache[0] = (...args) => ($options.onSlotClick && $options.onSlotClick(...args)))
    }, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {}, () => [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_2, [
          (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($data.licensePlateLength, (item, index) => {
            return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
              class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["input_box", $data.activeIndex == index?'active':'']),
              key: `${item}_${$data.inputValue[index]}`,
              style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({borderWidth:`${$props.borderWidth}px`,borderRadius:`${$props.borderRadius}px`,borderColor:`${$data.activeIndex == index?$props.borderActiveColor:$props.borderColor}`}),
              onClick: $event => ($options.inputClick(index))
            }, [
              ($data.inputValue[index])
                ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
                    key: 0,
                    class: "button",
                    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({borderRadius:`${$props.borderRadius}px`,fontSize: `${$props.fontSize}px`, color: $props.fontColor})
                  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($data.inputValue[index]), 5))
                : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
            ], 14, _hoisted_3))
          }), 128))
        ])
      ], true)
    ]),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], { name: "keyboard" }, {
      default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [
        ($data.visible)
          ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_4, [
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
                class: "keyboard_header",
                onClick: _cache[1] || (_cache[1] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])((...args) => ($options.visibleClick && $options.visibleClick(...args)), ["stop"]))
              }, _hoisted_6),
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_7, [
                ($data.activeIndex==0)
                  ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_8, [
                      (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($data.provinceList, (item) => {
                        return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
                          key: item,
                          class: "key_wrapper",
                          onClick: $event => ($options.btnClick(item))
                        }, [
                          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_10, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(item), 1)
                        ], 8, _hoisted_9))
                      }), 128))
                    ]))
                  : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
                ($data.activeIndex!=0)
                  ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_11, [
                      (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($data.numberList, (item, index) => {
                        return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
                          class: "numer_wapper",
                          key: item,
                          onClick: $event => ($options.btnClick(item,$data.activeIndex==1))
                        }, [
                          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
                            class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["button", $data.activeIndex==1 && index<10?'disabled':''])
                          }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(item), 3)
                        ], 8, _hoisted_12))
                      }), 128))
                    ]))
                  : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
                ($data.activeIndex!=0)
                  ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_13, [
                      (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($data.letterList, (item) => {
                        return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
                          class: "numer_wapper",
                          key: item,
                          onClick: $event => ($options.btnClick(item,item=='O'&&$data.activeIndex>1))
                        }, [
                          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
                            class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["button", item=='O'&&$data.activeIndex>1?'disabled':''])
                          }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(item), 3)
                        ], 8, _hoisted_14))
                      }), 128)),
                      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
                        class: "numer_wapper delete",
                        onClick: _cache[2] || (_cache[2] = (...args) => ($options.delClick && $options.delClick(...args)))
                      }, _hoisted_16)
                    ]))
                  : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
              ])
            ]))
          : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
      ]),
      _: 1
    })
  ]))
}
// CONCATENATED MODULE: ./packages/license-plate/license-plate.vue?vue&type=template&id=20feba54&scoped=true

// EXTERNAL MODULE: ./packages/assets/icon/iconfont.css
var iconfont = __webpack_require__("6961");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./packages/license-plate/license-plate.vue?vue&type=script&lang=js

const LICENSE_PLATE_RULE = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/;

/* harmony default export */ var license_platevue_type_script_lang_js = ({
  name: "LicensePlate",
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    //是否自动显示
    autoShow: {
      type: Boolean,
      default: false
    },
    // 输入框边框颜色
    borderColor: {
      type: String,
      default: '#79aef3'
    },
    // 输入框选中边框颜色
    borderActiveColor: {
      type: String,
      default: '#330aec'
    },
    // 边框圆角
    borderRadius: {
      type: Number,
      default: 6
    },
    // 边框宽度
    borderWidth: {
      type: Number,
      default: 1
    },
    // 文字颜色
    fontColor: {
      type: String,
      default: '#333333'
    },
    // 文字大小
    fontSize: {
      type: Number,
      default: 16
    },
  },
  components: {},
  data () {
    return {
      licensePlateLength: 8,
      provinceList: ["京", "津", "渝", "沪", "冀", "晋", "辽", "吉", "黑", "苏", "浙", "皖", "闽", "赣", "鲁", "豫", "鄂", "湘", "粤", "琼", "川", "贵", "云", "陕", "甘", "青", "蒙", "桂", "宁", "新", "藏", "临"],
      numberList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '警'],
      letterList: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'O', 'P', '港', '澳', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '挂', '学', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '领'],
      activeIndex: -1,
      inputValue: ["", "", "", "", "", "", "", ""],
      visible: false,
    }
  },
  computed: {
  },
  watch: {
    modelValue () {
      this.initLicensePlate();
    }
  },
  async created () { },
  async mounted () {
    this.initLicensePlate();
    if (this.autoShow) {
      this.activeIndex = 0;
      this.visible = true;
    }
  },
  methods: {
    initLicensePlate () {
      if (this.modelValue && LICENSE_PLATE_RULE.test(this.modelValue)) {
        this.inputValue = this.modelValue.split("");
      }
    },
    onSlotClick () {
      let length = this.inputValue.filter(it => it).length;
      this.activeIndex = length == 0 ? 0 : length - 1;
      if (!this.visible) {
        this.visible = true;
      }
    },
    inputClick (index) {
      this.activeIndex = index;
      if (!this.visible) {
        this.visible = true;
      }
    },
    btnClick (val, disabled) {
      if (disabled) {
        return false;
      }
      this.inputValue[this.activeIndex] = `${val}`;
      // this.$set(this.inputValue, this.activeIndex, `${val}`);
      this.activeIndex++;
      if (this.activeIndex > 7) {
        this.visible = false;
      }
      this.change();
    },
    delClick () {
      if (this.inputValue[this.activeIndex]) {
        // this.$set(this.inputValue, this.activeIndex, ``);
        this.inputValue[this.activeIndex] = ``;
      } else {
        this.inputValue[this.activeIndex - 1] = ``;
        // this.$set(this.inputValue, this.activeIndex - 1, ``);
        this.activeIndex--;
      }
      this.change();
    },
    visibleClick () {
      this.visible = false;
    },
    change () {
      let value = this.inputValue.join("");
      let pass = LICENSE_PLATE_RULE.test(value);
      this.$emit("change", {
        array: this.inputValue.filter(it => it !== ""),
        value: value,
        pass: pass,
      })
      this.$emit("update:modelValue", value);
    }
  },
  filters: {}
});

// CONCATENATED MODULE: ./packages/license-plate/license-plate.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./packages/license-plate/license-plate.vue?vue&type=style&index=0&id=20feba54&lang=less&scoped=true
var license_platevue_type_style_index_0_id_20feba54_lang_less_scoped_true = __webpack_require__("2845");

// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./packages/license-plate/license-plate.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(license_platevue_type_script_lang_js, [['render',render],['__scopeId',"data-v-20feba54"]])

/* harmony default export */ var license_plate = (__exports__);
// CONCATENATED MODULE: ./packages/license-plate/index.js


license_plate.install = function(Vue) {
  Vue.component(license_plate.name, license_plate)
}

/* harmony default export */ var packages_license_plate = (license_plate);
// CONCATENATED MODULE: ./packages/index.js
// 导入车牌号输入组件


// 组件列表
const components = [packages_license_plate]

const install = function(app) {
  // 注册全局组件
  components.map(component => app.component(component.name, component))
}

/* harmony default export */ var packages_0 = ({
  install,
  LicensePlate: packages_license_plate
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });