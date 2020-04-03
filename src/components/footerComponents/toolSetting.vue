<template>
  <el-popover
    placement="left"
    offset="15"
    trigger="click"
    :popper-class="icon ? '' : 'dark'"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    <i slot="reference" class="el-icon-setting"></i>
  </el-popover>
</template>

<script>
export default {
  name: 'tool-setting',
  props: ['icon'],
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less">
  @media screen and (max-width: 1100px) {
    .el-popper {
      width: 35vw;
    }
  }

  @media screen and (min-width: 1100px) {
    .el-popper {
      width: 20vw;
    }
  }

  .el-popper {
    transform: translateX(-5%);
    z-index: 3000 !important;

    & > div.popper__arrow {
      display: none;
    }
  }
</style>
