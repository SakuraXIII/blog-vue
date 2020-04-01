<template>
  <div>
    <ul class="headTitle">
      <li v-for="(value,index) in headField" :key="index">
        <a :href="value.link">{{value.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'nav-bar',
    data () {
      return {
        headField: [{name: 'wise酱', link: '/'}, {name: '首页', link: '/'}, {name: '折腾', link: '#'}]
      }
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  .headTitle {
    width: var(--width);
    display: flex;
    justify-content: left;
    margin: 0 auto;
    padding: 0;

    li {
      color: white;
      line-height: 60px;
      float: left;

      a {
        color: #ffeb3b;

        &:hover {
          color: #c4ba5d;
        }
      }
    }
  }
</style>
