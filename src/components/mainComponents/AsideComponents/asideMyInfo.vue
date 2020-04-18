<template>
  <div>
    <div class="bg-img">
    </div>
    <div class="block">
      <el-avatar :size="80" :src="avatarUrl"></el-avatar>
    </div>
  </div>
</template>

<script>

export default {
  name: 'my-info',
  data () {
    return {
      avatarUrl: require('../../../assets/img/logo.png')
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
  .bg-img {
    height: 130px;
    background: url("../../../assets/img/aside_bg.jpg") no-repeat center / cover;
  }

  .block {
    text-align: center;
    /deep/ span {
      box-shadow: 0 0 10px 1px #ffffff;
      margin: -30px auto 0;
      transition: all .3s ease-out;
      &:hover {
        transform: rotate(360deg) scale(1.05);
        cursor: pointer;
      }
    }
  }
</style>
