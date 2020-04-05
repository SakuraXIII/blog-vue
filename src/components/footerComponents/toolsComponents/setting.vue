<template>
  <el-backtop :visibility-height="0" :bottom="150">
    <el-tooltip class="item" :effect="icon ? 'light' : 'dark'" content="设置主题" placement="left">
      <el-button :circle="true" class="el-button-setting" :class="icon ? 'light' : 'dark'" @click.stop>
        <tool-setting :icon="icon"/>
      </el-button>
    </el-tooltip>
  </el-backtop>
</template>

<script>
import ToolSetting from './settingComponents/toolSetting'
export default {
  name: 'my-setting',
  components: {ToolSetting},
  props: ['icon'],
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>

</style>
