<template>
  <div class="my-tool">
    <el-backtop :visibility-height="0" :bottom="200" :class="[icon ? 'light' : 'dark']"></el-backtop>
    <el-backtop :visibility-height="0" :bottom="150">
      <el-tooltip class="item" :effect="icon ? 'light' : 'dark'" content="切换模式" placement="left">
        <el-button :circle="true" class="el-button" :class="icon ? 'light' : 'dark'" @click.stop="$emit('toogle')">
          <i :class="icon ? 'el-icon-moon' : 'el-icon-sunny'"></i>
        </el-button>
      </el-tooltip>
    </el-backtop>
    <el-backtop :visibility-height="0" :bottom="100" :class="[icon ? 'light' : 'dark']">
      <el-tooltip class="item" :effect="icon ? 'light' : 'dark'" content="阅读进度" placement="left">
        <div class="preventdefault" @click.stop>
          <span class="process">{{readProcess}}</span>
        </div>
      </el-tooltip>
    </el-backtop>
  </div>
</template>

<script>
export default {
  name: 'tools',
  props: ['icon'],
  data () {
    return {
      readProcess: '0%'
    }
  },
  created () {
    this.myscroll()
  },
  methods: {
    myscroll: function () {
      document.body.onscroll = (e) => {
        let percent = Math.ceil(document.documentElement.scrollTop / (document.body.scrollHeight - document.body.clientHeight) * 100)
        percent = percent > 100 ? 100 : percent
        this.readProcess = percent + '%'
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .my-tool {
    .el-button.is-circle {
      padding: 13px;
    }

    .preventdefault {
      width: 100%;
      height: 100%;
      text-align: center;

      .process {
        font-size: 14px;
        vertical-align: sub;
      }
    }
  }
</style>
