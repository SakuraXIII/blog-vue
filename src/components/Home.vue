<template>
  <div>
    <div class="theme-bg"></div>
    <el-container direction="vertical">
      <div class="blog-header">
        <div class="pc-navbar">
          <el-header>
            <nav-bar/>
          </el-header>
          <div class="null"></div>
        </div>
        <!--小屏幕适配-->
        <div class="mobile-drawer">
          <mobile-drawer :icon="icon"/>
        </div>
        <site-name/>
      </div>
      <div class="post-main">
        <!--侧边栏-->
        <el-aside class="spacial" :class="icon ? 'light' : 'dark'">
          aside
          <!--          <blog-info/>-->
          <!--          <my-info/>-->
        </el-aside>
        <!--文章列表-->
        <div class="post-list">
          <post-card :postlist="post" :icon="icon"></post-card>
          <router-view name="postDetail"></router-view>
          <my-footer :icon="icon"/>
        </div>
      </div>
      <div class="blog-tool">
        <!--页脚-->
        <!--侧边栏小工具-->
        <tools @toggle="toggle" :icon="icon"/>
      </div>
    </el-container>
  </div>
</template>
<script>
import PostCard from './mainComponents/postComponents/postCard'
import NavBar from './headComponents/navBarComponents/navBar'
import SiteName from './headComponents/siteName'
import BlogInfo from './mainComponents/AsideComponents/asideBlogInfo'
import MyInfo from './mainComponents/AsideComponents/asideMyInfo'
import MobileDrawer from './headComponents/navBarComponents/mobileDrawer'
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
    this.readSession()
    this.getBlogList()
  },
  methods: {
    readSession: function () {
      let light = window.sessionStorage.getItem('light')
      this.icon = JSON.parse(light)
    },

    toggle: function () {
      this.icon = !this.icon
      window.sessionStorage.setItem('light', this.icon)
    },

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

  // 超小屏幕xs 手机 (<768px) 小屏幕sm 平板(≥768px) 中等屏幕md  桌面(≥992px) 大屏幕lg  桌面(≥1200px)
  /*PC端*/
  @media screen and (min-width: 992px) {
    .mobile-drawer {
      display: none;
    }
  }

  @media screen and (max-width: 1200px) {
    .el-container {
      --width: 95vw;
    }
  }

  @media screen and (min-width: 1200px) {
    .el-container {
      --width: 80vw;
    }
  }

  /*移动端*/
  @media screen and (max-width: 992px) {
    .el-container {

      .pc-navbar {
        display: none;
      }

      .el-aside {
        display: none;
      }
    }
  }

  .el-container {
    /*头部*/

    .blog-header {
      --fontColor: #ffffff; //作为页头文字统一颜色
      .el-header {
        position: fixed;
        top: 0;
        z-index: 100;
        background-color: rgba(var(--defaultColor), 0.8);
        width: 100%;
      }

      .null {
        width: 100%;
        padding-top: 60px;
      }
    }

    /*中间文章部分*/

    .post-main {
      width: var(--width);
      margin: 0 auto;

      .post-list {
        overflow: hidden;
        // 样式穿透到下一级的分页组件
        /deep/ .el-pagination {
          text-align: center;
        }
      }

      /*侧边栏部分*/

      .el-aside {
        position: sticky;
        top: 15vh;
        float: left;
        margin: 0 5vw;
        border-radius: var(--borRadius);
      }
    }
  }

</style>
