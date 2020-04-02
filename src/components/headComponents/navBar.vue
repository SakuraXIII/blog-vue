<template>
  <div class="nav-bar">
    <ul class="headTitle">
      <li v-for="(value, index) in headField" :key="index">
        <a :href="value.link">{{ value.name }}</a>
      </li>
    </ul>
    <search-box/>
  </div>
</template>

<script>
import SearchBox from './searchBox'

export default {
  name: 'nav-bar',
  components: {SearchBox},
  data () {
    return {
      headField: [
        {name: 'wise酱\'s blog', link: '/'},
        {name: '首页', link: '/'},
        {name: '折腾', link: '#'}
      ]
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: var(--width);
    --fontColor: #fff;
    margin: 0 auto;

    .headTitle {
      padding: 0;
      margin: 0;

      li {
        float: left;
        margin-right: 5px;
        a {
          color: var(--fontColor);
          display: block;
          padding: 20px;

          &:hover {
            color: #ccc;
          }
        }
      }
    }

  }
</style>
