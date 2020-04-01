<template>
  <main>
    <div v-for="item in BlogList" :key="item.id" class="post-box">
      <el-card class="post-card">
        {{ item.title }}
        {{ item.article }}
      </el-card>
    </div>
  </main>
</template>

<script>
export default {
  name: 'post-card',
  data () {
    return {BlogList: {}}
  },
  created () {
    this.getBlogList()
  },
  methods: {
    async getBlogList () {
      const {data: res} = await this.$axios.get('loadBlog')
      console.log(res.data)
      this.BlogList = res.data
    }
  }
}
</script>

<style scoped>

</style>
