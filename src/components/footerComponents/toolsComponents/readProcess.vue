<template>
  <el-backtop :visibility-height="0" :bottom="50" :class="[icon ? 'light' : 'dark']">
    <el-tooltip class="item" :effect="icon ? 'light' : 'dark'" content="阅读进度" placement="left">
      <div class="preventdefault" @click.stop>
        <span class="process">{{readProcess}}</span>
      </div>
    </el-tooltip>
  </el-backtop>
</template>

<script>
export default {
  name: 'read-process',
  props: ['icon'],
  data () {
    return {readProcess: '0%'}
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

<style lang="less">
  .preventdefault {
    width: 100%;
    height: 100%;
    text-align: center;

    .process {
      font-size: 14px;
      vertical-align: sub;
    }
  }

</style>
