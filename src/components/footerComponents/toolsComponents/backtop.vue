<template>
  <el-backtop :visibility-height="0" :bottom="200" :class="[icon ? 'light' : 'dark']">
    <el-tooltip class="item" :effect="icon ? 'light' : 'dark'" content="回到顶部" placement="left">
      <el-button :circle="true" class="el-button" :class="icon ? 'light' : 'dark'">
        <i class="el-icon-caret-top"></i>
      </el-button>
    </el-tooltip>
  </el-backtop>
</template>

<script>
export default {
  name: 'my-backtop',
  props: ['icon'],
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>

</style>
