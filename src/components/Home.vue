<template>
  <el-container class="home-container">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="380px">Aside</el-aside>
      <el-container>
          <el-main>
            <el-container v-for="item in BlogList" :key="item.id" class="card-box">
              <el-card class="box-card">
                {{item.title}}
                {{item.article}}
              </el-card>
            </el-container>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>

</template>
<script>
export default {
  name: 'Home',
  created () {
    this.getBlogList()
  },
  methods: {
    logout () {
      this.$router.push('/login')
    },
    async getBlogList () {
      const {data: res} = await this.$axios.post('loadsidebar', this.user)
      this.BlogList = res.data.blogs
    }
  },
  data () {
    return {
      user: {
        id: '1'
      },
      BlogList: {
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .card-box{
    margin-top: 30px;
  }
  .box-card {
    width: 480px;
    margin-left: 50%;
    transform: translate(-50%);
  }
  .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
    bottom: 0;
    width: 100%;
  }
  .el-header{
    position: fixed;
    top: 0px;
    color: #333;
    text-align: center;
    line-height: 60px;
    width: 100%;
    z-index: 99999;
  }

  .el-aside {
    position:sticky;
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
    margin-top:30px
  }
  .home-container{
    background: url("../assets/img/home-wallpaper.jpg") no-repeat fixed;
    background-size: cover;

  }

</style>
