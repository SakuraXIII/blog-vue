<template>
  <main>
    <div v-for="item in postlist" :key="item.id" class="post-box spacial">
      <el-card class="post-card" :class="icon ? 'light' : 'dark'">
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
  props: ['postlist', 'icon'],

  methods: {}
}
</script>

<style lang="less" scoped>
  .post-card {
    border-radius: var(--borRadius);
    transition: all .5s ease-out;

  }
</style>
