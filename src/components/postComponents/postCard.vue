<template>
  <main>
    <div v-for="item in postlist" :key="item.id" class="post-box spacial">
      <el-card class="post-card">
        <h1>{{ item.title }}</h1>
        {{ item.article ? item.article.slice(0,30) : '' }}
      </el-card>
    </div>
  </main>
</template>

<script>
export default {
  name: 'post-card',
  data () {
    return {}
  },
  props: ['postlist'],

  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>
