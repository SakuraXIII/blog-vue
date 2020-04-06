<template>
  <main>
    <div v-for="item in postListSplit(postlist)" :key="item.title" class="post-box spacial">
      <div class="post-card" :class="icon ? 'light' : 'dark'">
        <post-header
          :icon="icon"
          :title="item.title"
          :date="item.date"
          :id="item.id"
          :wordNum="item.article ? item.article.length : ''"
          :read-time="item.time"
          :tags="'折腾'"
          v-if="postlist !== '正在加载中'"
        />
        <p v-else class="loading">(。・∀・)ノ)数据好像还没收到，等一下吧 <i class="el-icon-loading"></i></p>
        <div class="text">
          <p v-html="item.article"></p>
        </div>
      </div>
    </div>
    <div class="nav">
      <a
        :href="'/article/'+postlist[articalId-2].id"
        v-if="postlist[articalId-2]"
        :class="icon ? 'light' : 'dark'"><i class="el-icon-back"></i>上一篇 {{postlist[articalId-2].title}}</a>
      <a
        :href="'/article/'+postlist[articalId].id"
        v-if="postlist[articalId]"
        :class="icon ? 'light' : 'dark'">下一篇 {{postlist[articalId].title}}<i class="el-icon-right"></i></a>
    </div>
  </main>
</template>

<script>
import PostHeader from './postHeader'

export default {
  name: 'post-card',
  components: {PostHeader},
  props: ['postlist', 'icon'],
  data () {
    return {
      articalId: null
    }
  },
  created () {
    this.articalIndex()
  },
  methods: {
    articalIndex: function () {
      console.log(this.$route.params.id)
      this.articalId = this.$route.params.id
    },
    postListSplit: function (value) {
      if (value === '正在加载中') return value
      return value.filter((item) => {
        return item.id == this.articalId
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .post-box {

    .post-card {
      padding: 30px;
      border-radius: var(--borRadius);
      margin-bottom: 2vw;

      .loading {
        text-align: center;
      }

      .text {
        margin-top: 1vw;
        text-indent: 2em;
        line-height: 1.5em;
      }
    }
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      padding: 10px;
      &:hover {
        transform: scale(1.02);
      }
    }
  }
</style>
