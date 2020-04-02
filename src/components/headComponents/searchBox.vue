<template>
  <div class="search-box">
    <i class="iconfont icon-sousuo" :class="{ 'visiable': isopen }" @click="searchInput"></i>
    <input
      type="text"
      placeholder="要搜索点啥..."
      autocomplete="off"
      :class="{ open: isopen }"
      ref="input"
      @blur="onblur"
    />
  </div>
</template>

<script>
export default {
  name: 'search-box',
  data () {
    return {isopen: false}
  },
  methods: {
    searchInput: function (e) {
      this.isopen = true
      this.$refs.input.focus()
    },
    onblur: function () {
      this.isopen = false
    }
  }
}
</script>

<style lang="less" scoped>
  .search-box {
    float: right;
    margin-left: auto;

    i {
      font-size: 20px;
      cursor: pointer;
      display: inline-block;
      vertical-align: middle;
      padding: 10px;
      color: var(--fontColor);
      transition: all 0.3s cubic-bezier(0.4, 0, 0, 1);;
      &.visiable {
        opacity: 0;
      }
    }

    input:not(.open) {
      width: 0;
      padding: 0;
    }

    input {
      padding: 15px;
      border-radius: 8px;
      outline: none;
      border: none;
      width: 10vw;
      transition: all 0.5s cubic-bezier(0.4, 0, 0, 1);
    }

  }
</style>
