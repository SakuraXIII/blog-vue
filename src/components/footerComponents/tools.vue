<template>
  <div class="my-tool">
    <my-backtop :icon="icon"/>
    <my-setting :icon="icon"/>
    <sun-dark :icon="icon" @toggle="$emit('toggle')"/>
    <read-process :icon="icon"/>
  </div>
</template>

<script>

import MySetting from './toolsComponents/setting'
import SunDark from './toolsComponents/pattern'
import ReadProcess from './toolsComponents/readProcess'
import MyBacktop from './toolsComponents/backtop'

export default {
  name: 'tools',
  components: {MyBacktop, ReadProcess, MySetting, SunDark},
  props: ['icon'],
  data () {
    return {}
  },

  methods: {}
}
</script>

<style lang="less">
  .my-tool {
    .el-button.is-circle {
      padding: 13px;
    }
    .el-button.el-button-setting {
      padding: 20px;
    }
  }
</style>
