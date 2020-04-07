<template>
  <div class="search-box">
    <i class="el-icon-search" :class="{ 'visiable': isopen }" @click="searchInput"></i>
    <input
      type="text"
      placeholder="要搜索点啥..."
      autocomplete="off"
      :class="{ open: isopen }"
      ref="input"
      v-model="key"
      @blur="onblur"
      @keyup.enter="searchKey"
    />
  </div>
</template>

<script>
export default {
  name: 'search-box',
  data () {
    return {isopen: false, key: ''}
  },
  methods: {
    searchInput: function (e) {
      this.isopen = true
      this.$refs.input.focus()
    },
    onblur: function () {
      this.isopen = false
      this.key = ''
    },
    searchKey: function () {
      this.key = this.key.trim()
      if (this.key !== '') {
        // TODO 搜索功能
        this.$emit('search', this.key)
        console.log(this.key)
      }
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
