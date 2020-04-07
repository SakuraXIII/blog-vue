<template>
  <div>
    <div class="bg-img">
      <my-canvas/>
    </div>
    <div class="block"><el-avatar :size="80" :src="avatarUrl"></el-avatar></div>
  </div>
</template>

<script>
import MyCanvas from './canvas'
export default {
  name: 'my-info',
  components: {MyCanvas},
  data () {
    return {
      avatarUrl: require('../../../assets/img/logo.png')
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.bg-img {
  background-color: ;
}
</style>
