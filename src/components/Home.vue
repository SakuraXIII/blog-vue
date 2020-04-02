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
        <el-aside class="spacial" :class="icon ? 'light' : 'dark'">
          aside
          <!--          <blog-info/>-->
          <!--          <my-info/>-->
        </el-aside>
        <el-main>
          <post-card :postlist="post" :icon="icon"></post-card>
        </el-main>
      </div>
      <el-footer>Footer</el-footer>
      <el-backtop :visibility-height="0" :bottom="100" @click="switchPattern">
        <el-tooltip class="item" :effect="icon ? 'light' : 'dark'" content="切换模式" placement="left">
          <el-button :circle="true" class="el-button" :class="icon ? 'light' : 'dark'">
            <i :class="icon ? 'el-icon-moon' : 'el-icon-sunny'"></i>
          </el-button>
        </el-tooltip>
      </el-backtop>
      <el-backtop :visibility-height="50" :class="icon ? 'light' : 'dark'"></el-backtop>
    </el-container>
  </div>
</template>
<script>
import PostCard from './mainComponents/postCard'
import NavBar from './headComponents/navBar'
import SiteName from './headComponents/siteName'
import BlogInfo from './mainComponents/asideBlogInfo'
import MyInfo from './mainComponents/asideMyInfo'

export default {
  name: 'Home',
  components: {MyInfo, BlogInfo, SiteName, NavBar, PostCard},

  data () {
    return {
      post: '正在加载中',
      icon: true
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
    },
    switchPattern: function (e) {
      console.log(e)
      this.icon = !this.icon
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

      .el-main {
        width: var(--subwidth);
        float: right;
      }

      /*侧边栏部分*/

      .el-aside {
        position: sticky;
        top: 20vh;
        float: left;
        margin: 20px;
        border-radius: var(--borRadius);
        transition: all .5s ease-out;
      }
    }
    .el-button.is-circle {
      padding: 13px;
    }
  }
</style>
