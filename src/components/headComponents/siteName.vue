<template>
  <div class="site-name">
    <h1>ヽ(≧∀≦)ﾉ</h1>
    <p>基于vue构建的个人博客</p>
  </div>
</template>

<script>
export default {
  name: 'site-name',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
  .site-name {
    margin: 15vh 0 10vh 0;
    text-align: center;

    & > h1, p {
      color: var(--fontColor);
    }
  }
</style>
