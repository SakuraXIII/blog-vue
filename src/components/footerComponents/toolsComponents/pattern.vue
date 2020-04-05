<template>
  <el-backtop :visibility-height="0" :bottom="100">
    <el-tooltip class="item" :effect="icon ? 'light' : 'dark'" content="切换模式" placement="left">
      <el-button :circle="true" class="el-button" :class="icon ? 'light' : 'dark'" @click.stop="$emit('toggle')">
        <i :class="icon ? 'el-icon-moon' : 'el-icon-sunny'"></i>
      </el-button>
    </el-tooltip>
  </el-backtop>
</template>

<script>
export default {
  name: 'sun-dark',
  props: ['icon'],
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>

</style>
