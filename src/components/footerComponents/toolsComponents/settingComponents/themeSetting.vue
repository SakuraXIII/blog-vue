<template>
  <div>
    <p>主题调整功能还未正式上线哦</p>
    <div class="block">
      <span class="demonstration">圆角</span>
      <el-slider
        v-model="value"
        :min="0" :max="30"
        tooltip-class="borderTip"
        :show-tooltip="tooltip"
        @input="borderAdjust"
        @change="closeTip"></el-slider>
    </div>
  </div>
</template>

<script>
export default {
  name: 'theme-setting',
  data () {
    return {
      value: 0,
      tooltip: false
    }
  },
  methods: {
    borderAdjust: function (value) {
      this.tooltip = true
      this.$root.borRadius = value + 'px'
    },
    closeTip: function (value) {
      this.tooltip = false
    }
  }
}
</script>

<style lang="less">
.borderTip {
  z-index: 2500 !important;
}
</style>
