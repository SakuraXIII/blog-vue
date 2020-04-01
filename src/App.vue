<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  /*滚动条整体部分*/
  ::-webkit-scrollbar {
    width: 10px;
  }

  /*滚动条内层轨道*/
  ::-webkit-scrollbar-track-piece {
    background-color: #fff;
  }

  /*滚动条滑块*/
  ::-webkit-scrollbar-thumb {
    background-color: #5981C6;
    border-radius: 5px;
    border: 2px solid #fff;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #E63D5D;
  }
</style>
