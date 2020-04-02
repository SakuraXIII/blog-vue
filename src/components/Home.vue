<template>
  <div>
    <div class="theme-bg"></div>
    <el-container>
      <el-header>
        <nav-bar/>
      </el-header>
      <div class="post-main">
        <el-aside class="spacial">Aside</el-aside>
        <el-main>
          <post-card :postlist="post"></post-card>
        </el-main>
      </div>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
import PostCard from './postComponents/postCard'
import NavBar from './headComponents/navBar'

export default {
  name: 'Home',
  components: {NavBar, PostCard},

  data () {
    return {
      post: '正在加载中'
    }
  },
  created () {
    this.getBlogList()
  },
  methods: {
    async getBlogList () {
      let {data: res} = await this.$axios.post('loadBlog', {id: '1'})
      res = res.data
      console.log(res)
      this.post = res.blogs
    }
  }
}
</script>

<style lang="less" scoped>
  .theme-bg {
    background: url("../assets/img/home-wallpaper.jpg") no-repeat  center / cover;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .el-container {
    --width: 80vw;

    .el-header {
      position: fixed;
      top: 0;
      z-index: 100;
      background-color: rgba(50, 47, 59, 0.93);
      width: 100%;
    }

    .post-main {
      width: var(--width);
      margin: 0 auto;
      --subwidth: 70%;
      margin-top: 70px;

      .el-main {
        width: var(--subwidth);
        float: right;
      }

      .el-aside {
        background: pink;
        position: sticky;
        top: 5vh;
        float: left;
      }
    }
  }
</style>
