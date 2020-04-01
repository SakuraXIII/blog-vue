<template>
  <el-container class="home-container">
    <el-header>Header</el-header>
    <el-aside width="380px">Aside</el-aside>
    <el-main>
      <post-card></post-card>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
import PostCard from './subComponents/postCard'
export default {
  name: 'Home',
  components: {PostCard},

  methods: {
    logout () {
      this.$router.push('/login')
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
  bottom: 0;
  width: 100%;
}

.el-header {
  position: fixed;
  top: 0px;
  color: #333;
  text-align: center;
  line-height: 60px;
  width: 100%;
  z-index: 99999;
}

.el-aside {
  position: sticky;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  /*background-color: transparent;*/
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 100%;
  margin-top: 30px;
}

.home-container {
  background: url("../assets/img/home-wallpaper.jpg") no-repeat fixed;
  background-size: cover;
}
</style>
