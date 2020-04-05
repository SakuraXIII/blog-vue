<template>
  <div>
    <div class="menu" @click="drawer = true" style="margin-left: 16px;">
      <i class="el-icon-minus"></i>
      <i class="el-icon-minus"></i>
      <i class="el-icon-minus"></i>
    </div>
    <el-drawer
      :direction=direction
      size="60%"
      :visible.sync="drawer"
      :modal="false"
      :custom-class="icon ? 'light' : 'dark'"
      :with-header="false">
      <div>
        <mobile-menu/>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import MobileMenu from './mobileMenu'

export default {
  name: 'mobile-drawer',
  components: {MobileMenu},
  props: ['icon'],
  data () {
    return {
      drawer: false,
      direction: 'ltr'
    }
  }
}
</script>
<!--自定义的类名必须要取消<style>的scoped属性才能生效-->
<style lang="less" scoped>
  .menu {
    position: fixed;
    top: 1vh;

    i {
      display: block;
      color: #fff;
      height: 5px;
      font-size: 25px;
    }
  }

</style>
