<template>
  <div>
    <div class="theme-bg"></div>
    <el-container direction="vertical" :style="!this.isMobile ? '--width: 80vw': '--width: 95vw'">
      <div class="blog-header">
        <div v-if="!this.isMobile">
          <el-header>
            <nav-bar/>
          </el-header>
          <div class="null"></div>
        </div>
        <div class="mobile-drawer" v-else>
          <mobile-drawer :icon="icon"/>
        </div>
        <site-name/>
      </div>
      <div class="post-main">
        <div v-if="!this.isMobile">
          <el-aside class="spacial" :class="icon ? 'light' : 'dark'">
            aside
            <!--          <blog-info/>-->
            <!--          <my-info/>-->
          </el-aside>
        </div>
        <div class="post-list">
          <post-card :postlist="post" :icon="icon"></post-card>
        </div>
      </div>
      <my-footer/>
      <tools @toogle="icon = !icon" :icon="icon" />
    </el-container>
  </div>
</template>
<script>
import PostCard from './mainComponents/postCard'
import NavBar from './headComponents/navBar'
import SiteName from './headComponents/siteName'
import BlogInfo from './mainComponents/asideBlogInfo'
import MyInfo from './mainComponents/asideMyInfo'
import MobileDrawer from './headComponents/mobileDrawer'
import MyFooter from './footerComponents/footer'
import Tools from './footerComponents/tools'

export default {
  name: 'Home',
  components: {Tools, MyFooter, MobileDrawer, MyInfo, BlogInfo, SiteName, NavBar, PostCard},

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
    }

    --borRadius: 0px;

    /*中间文章部分*/

    .post-main {
      width: var(--width);
      margin: 0 auto;

      .post-list {
        overflow: hidden;
      }

      /*侧边栏部分*/

      .el-aside {
        position: sticky;
        top: 20vh;
        float: left;
        margin: 20px;
        border-radius: var(--borRadius);
      }
    }
  }

</style>
