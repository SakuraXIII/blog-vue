<template>
  <div>
    <p>主题调整功能还未正式上线哦</p>
    <div class="block">
      <span class="theme-border">圆角</span>
      <el-slider
        v-model="value"
        :min="0" :max="30"
        tooltip-class="borderTip"
        :show-tooltip="tooltip"
        @input="borderChange"
        @change="closeTip"></el-slider>
    </div>
    <div class="block">
      <span class="theme-color">主题色</span>
      <el-color-picker
        popper-class="colorPicker"
        color-format="rgb"
        :predefine="predefines"
        @active-change="colorChange"
        v-model="color"></el-color-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: 'theme-setting',
  data () {
    return {
      value: 0,
      tooltip: false,
      color: 'rgb(31, 142, 150)',
      predefines: ['rgb(255, 120, 0)', 'rgb(50, 47, 59)', 'rgb(31, 142, 150)']
    }
  },
  created () {
    this.readSession()
  },
  methods: {
    // 加载时首先读取session，载入之前存储的信息
    readSession: function () {
      let value = window.sessionStorage.getItem('borRadius')
      let color = window.sessionStorage.getItem('color')
      this.value = parseInt(value)
      this.color = color || 'rgb(50, 47, 59)'
    },
    borderChange: function (borderValue) {
      this.tooltip = true
      document.body.style = `--borRadius:${borderValue}px`
    },
    closeTip: function (value) {
      this.tooltip = false
      // 写入session，存储数据
      window.sessionStorage.setItem('borRadius', this.value)
    },
    colorChange: function (colorValue) {
      let color = colorValue.split(/rgb\(|\)/)[1] // 匹配rgb两边的括号并删除
      document.documentElement.style = '--defaultColor:' + color + ';'
      window.sessionStorage.setItem('color', colorValue)
    }
  }
}
</script>

<style lang="less">
.borderTip {
  z-index: 2500 !important;
}
  .colorPicker {
    z-index: 2300 !important;
  }

  .block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div.el-slider {
      width: 85%;
    }
  }
</style>
