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
          <p v-html="item.article ? item.article.slice(0,200) + '...' : ''"></p>
        </div>
      </div>
    </div>
    <el-pagination
      background
      :page-size="pageSize"
      layout="prev, pager, next"
      @current-change="changePage"
      class="spacial"
      :hide-on-single-page="true"
      :total="postlist !=='正在加载中' ? postlist.length : 1">
    </el-pagination>
  </main>
</template>

<script>
import PostHeader from './postHeader'

export default {
  name: 'post-card',
  components: {PostHeader},
  data () {
    return {
      pageSize: 5,
      pageValue: 1
    }
  },
  props: ['postlist', 'icon'],
  methods: {
    changePage: function (pageValue) {
      console.log(pageValue)
      document.querySelector('.el-backtop').click()
      this.pageValue = pageValue
    },
    postListSplit: function (value) {
      if (value === '正在加载中') return value
      return value.filter((item) => {
        return item.id > (this.pageValue - 1) * this.pageSize && item.id <= this.pageValue * this.pageSize
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
</style>
