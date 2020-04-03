<template>
  <div class="site-info">
      <el-avatar class="avatar" :src="avatarUrl" :size="100"></el-avatar>
  </div>
</template>

<script>
export default {
  name: 'mobile-menu',
  data () {
    return {
      avatarUrl: require('../../assets/img/logo.png')
    }
  },
  methods: {

  }

}
</script>

<style scoped>
.avatar {
  display: block;
  margin: 5vh auto 0 auto;
  /*background: url("../../assets/img/logo.png");*/
}
</style>
