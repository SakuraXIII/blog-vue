<template>
  <main>
    <div v-for="item in postlist" :key="item.id" class="post-box spacial">
      <div class="post-card" :class="icon ? 'light' : 'dark'">
        <post-header
          :icon="icon"
          :title="item.title"
          :date="item.date"
          :id="item.id"
          :wordNum="item.article ? item.article.length : ''"
          :read-time="item.time"
          :tags="'折腾'"
        />
        <div class="text">
                  {{ item.article ? item.article.slice(0,200) + '...' : '' }}
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import PostHeader from './postHeader'

export default {
  name: 'post-card',
  components: {PostHeader},
  data () {
    return {}
  },
  props: ['postlist', 'icon'],

  methods: {}
}
</script>

<style lang="less" scoped>
  .post-box {
    margin-bottom: 2vw;
    border-radius: var(--borRadius);

    .post-card {
      padding: 1vw;
      .text {
        margin-top: 5vh;
        text-indent: 2em;
      }
    }
  }
</style>
