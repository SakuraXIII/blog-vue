<template>
  <div class="spacial my-footer" :class="icon ? 'light' : 'dark'">
    <p>CopyRight &copy; 2020 wise's blog</p>
    <p>本站已勉强运行{{runtime}}</p>
    <p>Theme by <a href="https://gitee.com/hbbxht/blog-vue" :class="icon ? 'light' : 'dark'">Sakura</a></p>
  </div>
</template>

<script>
export default {
  name: 'my-footer',
  props: ['icon'],
  data () {
    return {
      runtime: ''
    }
  },
  created () {
    this.date()
  },
  methods: {
    date: function () {
      setInterval(() => {
        let current = new Date().getTime()
        this.runtime = this.calc(current)
      }, 1000)
    },
    calc: function (current) {
      let start = '2017-11-12 18:30'
      let now = current - new Date(start).getTime()// 时间差的毫秒数
      let days = Math.floor(now / (24 * 3600 * 1000))
      let leave1 = now % (24 * 3600 * 1000)
      let hours = Math.floor(leave1 / (3600 * 1000))
      let leave2 = leave1 % (3600 * 1000)
      let minutes = Math.floor(leave2 / (60 * 1000))
      let leave3 = leave2 % (60 * 1000)
      let seconds = Math.round(leave3 / 1000)
      return `${days}天${hours}小时${minutes}分钟${seconds}秒`
    }
  }

}
</script>

<style lang="less" scoped>
.my-footer {
  padding: 20px;
  text-align: center;
  margin: 20px 0;
  border-radius: var(--borRadius);
  &:not(.dark) {
    border: 1px solid rgba(var(--defaultColor));
    background-color: rgba(var(--defaultColor));
  }
  a {
    border: none;
    color: steelblue;
    background-color: transparent;
  }
}
</style>
