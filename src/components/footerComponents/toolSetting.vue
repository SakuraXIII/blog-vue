<template>
  <div>
  <el-popover
    placement="left"
    offset="15"
    trigger="click"
    :popper-class="icon ? '' : 'dark'">
    <theme-setting/>
    <i slot="reference" class="el-icon-setting"></i>
  </el-popover>
  </div>
</template>

<script>
import ThemeSetting from './themeSetting'
export default {
  name: 'tool-setting',
  components: {ThemeSetting},
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
    transform: translateX(2%);
    z-index: 3000 !important;

    & > div.popper__arrow {
      display: none;
    }
  }
  i.el-popover__reference {
    padding: 13px;
    position: absolute;
    transform: translate(-50%,-50%);
  }
</style>
