<template>
  <div>
    <div class="theme-bg"></div>
    <el-container>
      <div class="blog-header">
        <el-header>
          <nav-bar/>
        </el-header>
        <div class="null"></div>
        <site-name/>
      </div>
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
import SiteName from './headComponents/siteName'

export default {
  name: 'Home',
  components: {SiteName, NavBar, PostCard},

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
    /*头部*/
    .blog-header {
      .el-header {
        position: fixed;
        top: 0;
        z-index: 100;
        background-color: rgba(50, 47, 59, 0.93);
        width: 100%;
      }
      .null {
        width: 100%;
        padding-top: 60px;
      }
      --fontColor: #ffffff;
    }
    /*中间文章部分*/
    .post-main {
      width: var(--width);
      margin: 0 auto;
      --subwidth: 70%;
      --borRadius: 5px;
      --darkbgColor: #353535;
      --ligthbgColor: #ffffff;
      .el-main {
        width: var(--subwidth);
        float: right;
      }
      /*侧边栏部分*/
      .el-aside {
        background: pink;
        position: sticky;
        top: 20vh;
        float: left;
        margin: 20px;
        border-radius: var(--borRadius) ;
      }
    }
  }
</style>
