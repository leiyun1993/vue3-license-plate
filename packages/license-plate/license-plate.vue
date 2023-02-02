<!--  -->
<template>
  <div class="license-plate_container">
    <!-- 输入框 -->
    <div class="">
      <div class="input_container">
        <div class="input_box"
             v-for="(item,index) in licensePlateLength"
             :key="`${item}_${inputValue[index]}`"
             :class="activeIndex == index?'active':''"
             :style="{borderWidth:`${borderWidth}px`,borderRadius:`${borderRadius}px`,borderColor:`${activeIndex == index?borderActiveColor:borderColor}`}"
             @click="inputClick(index)">
          <div class="button"
               :style="{borderRadius:`${borderRadius}px`,fontSize: `${fontSize}px`, color: fontColor}"
               v-if="inputValue[index]">{{ inputValue[index] }}</div>
        </div>
      </div>
    </div>
    <!-- 键盘 -->
    <transition name="keyboard">
      <div class="keyboard_container"
           v-if="visible">
        <div class="keyboard_header"
             @click.stop="visibleClick">
          <i class="iconfont icon-jianpan"></i>
        </div>
        <div class="keyboard_body">
          <div class="province_list"
               v-if="activeIndex==0">
            <div v-for="item in provinceList"
                 :key="item"
                 class="key_wrapper"
                 @click="btnClick(item)">
              <div class="button">
                {{ item }}
              </div>
            </div>
          </div>
          <div class="number_list"
               v-if="activeIndex!=0">
            <div class="numer_wapper"
                 v-for="item of numberList"
                 :key="item"
                 @click="btnClick(item,activeIndex==1)">
              <div class="button"
                   :class="activeIndex==1?'disabled':''">
                {{ item }}
              </div>
            </div>
          </div>
          <div class="number_list"
               v-if="activeIndex!=0">
            <div class="numer_wapper"
                 v-for="item of letterList"
                 :key="item"
                 @click="btnClick(item,item=='O'&&activeIndex>1)">
              <div class="button"
                   :class="item=='O'&&activeIndex>1?'disabled':''">
                {{ item }}
              </div>
            </div>
            <div class="numer_wapper"
                 @click="delClick">
              <div class="button img">
                <i class="iconfont icon-backspace"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
const LICENSE_PLATE_RULE = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/;
import '../assets/icon/iconfont.css';
export default {
  name: "LicensePlate",
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    //是否自动显示
    autoShow:{
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
      numberList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      letterList: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'O', 'P', '澳', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '港', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '学', '领'],
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
    if(this.autoShow){
      this.activeIndex=0;
      this.visible = true;
    }
  },
  methods: {
    initLicensePlate () {
      if (this.modelValue && LICENSE_PLATE_RULE.test(this.modelValue)) {
        this.inputValue = this.modelValue.split("");
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
        this.inputValue[this.activeIndex-1] = ``;
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
}
</script>
<style lang='less' scoped>
.license-plate_container {
  box-sizing: border-box;
  .input_container {
    display: flex;
    align-items: center;
    justify-content: center;
    .input_box {
      flex: 1;
      border: 1px solid #79aef3;
      height: 40px;
      border-radius: 6px;
      padding: 2px;
      & + .input_box {
        margin-left: 10px;
      }
      &:last-of-type {
        border-color: #67c23a;
        border-style: dashed;
        position: relative;
        &::after {
          content: '新能源';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.5);
          font-size: 18px;
          white-space: nowrap;
          color: #67c23a;
          z-index: -1;
        }
      }
      &.active {
        border-color: #330aec;
        border-style: solid;
      }
    }
  }
  .keyboard_container {
    position: fixed;
    z-index: 999;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    background-color: #e2e3e7;
    padding: 10px 0 calc(env(safe-area-inset-bottom) + 10px) 6px;
    box-sizing: border-box;
    .keyboard_body {
      margin-top: 5px;
      .province_list {
        display: flex;
        -webkit-box-flex: 8;
        -webkit-flex: 8;
        flex: 8;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        .key_wrapper {
          flex: 1;
          flex-basis: 12.5%;
          padding: 0 6px 6px 0;
          box-sizing: border-box;
        }
      }
      .number_list {
        display: flex;
        -webkit-box-flex: 8;
        -webkit-flex: 8;
        flex: 8;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        .numer_wapper {
          flex: 1;
          flex-basis: 10%;
          padding: 0 6px 6px 0;
          box-sizing: border-box;
        }
      }
    }
  }
  .button {
    box-sizing: border-box;
    text-align: center;
    background-color: #fff;
    padding: 10px 0;
    &.disabled {
      background-color: #eaeaea;
    }
  }

  .iconfont {
    font-size: 20px;
    color: #333;
  }
  .icon-jianpan {
    position: relative;
    &::after {
      position: absolute;
      content: '';
      border: 3px solid #666;
      bottom: 0;
      left: 50%;
      transform: rotate(45deg) translateX(-50%);
      border-color: transparent #666 #666 transparent;
    }
  }
}
</style>
<style>
</style>
