<template>
  <div>
    <div class="theme-bg"></div>
    <el-container :style="!this.isMobile ? '--width: 80vw': '--width: 95vw'">
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
      <el-footer>Footer</el-footer>
      <div class="my-tool">
        <el-backtop :visibility-height="0" :bottom="200" :class="[icon ? 'light' : 'dark']"></el-backtop>
        <el-backtop :visibility-height="0" :bottom="150">
          <el-tooltip class="item" :effect="icon ? 'light' : 'dark'" content="切换模式" placement="left">
            <el-button :circle="true" class="el-button" :class="icon ? 'light' : 'dark'" @click.stop="switchPattern">
              <i :class="icon ? 'el-icon-moon' : 'el-icon-sunny'"></i>
            </el-button>
          </el-tooltip>
        </el-backtop>
        <el-backtop :visibility-height="0" :bottom="100" :class="[icon ? 'light' : 'dark']">
          <div class="process" @click.stop>{{readProcess}}</div>
        </el-backtop>
      </div>
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

export default {
  name: 'Home',
  components: {MobileDrawer, MyInfo, BlogInfo, SiteName, NavBar, PostCard},

  data () {
    return {
      post: '正在加载中',
      icon: true,
      readProcess: '0%'
    }
  },
  created () {
    this.getBlogList()
    this.myscroll()
  },
  methods: {
    async getBlogList () {
      let {data: res} = await this.$axios.post('loadBlog', {id: '1'})
      res = res.data
      console.log(res)
      this.post = res.blogs
    },
    switchPattern: function () {
      this.icon = !this.icon
    },
    myscroll: function () {
      document.body.onscroll = (e) => {
        let percent = document.documentElement.scrollTop / (document.body.scrollHeight - document.body.clientHeight) * 100
        this.readProcess = Math.ceil(percent) + '%'
      }
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

    /*中间文章部分*/

    .post-main {
      width: var(--width);
      margin: 0 auto;
      --borRadius: 0px;

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

    .my-tool {
      .el-button.is-circle {
        padding: 13px;
      }

      .process {
        font-size: 14px;
      }

    }
  }

</style>
