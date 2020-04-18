<template>
  <canvas id="canvas"></canvas>
</template>

<script>
export default {
  name: 'my-canvas',
  data () {
    return {}
  },
  mounted () {
    this.drawCanvas()
  },
  methods: {
    drawCanvas: function () {
      let canvas = document.querySelector('#canvas')
      canvas.width = document.body.offsetWidth
      canvas.height = document.body.offsetHeight
      let ctx = canvas.getContext('2d')
      ctx.beginPath()
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true)
      ctx.fillStyle = 'rgba(255,255,255,0.3'
      ctx.fill()
    },

    circl: function () {
      // class drawCir {
      //
      // }
    }
  }
}
</script>

<style scoped>
#canvas {
  position: absolute;
  z-index: -1;
  overflow: hidden;
}
</style>
