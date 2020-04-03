<template>
  <div class="post-header">
    <a :href="'/article/'+id" class="title" :class="icon ? 'light' : 'dark'">{{title}}</a>
    <div class="sub-title">
      <p><i class="el-icon-date"></i>{{date}}</p>
      <p><i class="el-icon-document"></i>{{wordNum}}字</p>
      <p><i class="el-icon-timer"></i>{{readTime}}分钟</p>
      <p><i class="el-icon-collection-tag"></i>{{tags}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post-header',
  props: ['icon', 'title', 'date', 'id', 'wordNum', 'readTime', 'tags'],
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.post-header {
  text-align: center;
  a.title {
    font-size: 20px;
    border: none;
    background-color: unset;
    display: inline-block;
    margin: 5px 0;
    &:hover {
      transform: scale(1.05);
      color: #777777;
    }
  }
  .sub-title {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      margin: 0;
      font-size: 12px;
      i {
        margin: 0 5px;
      }
    }
  }
}
</style>
