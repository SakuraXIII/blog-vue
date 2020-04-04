// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import element from './elementCom'
import './assets/css/global.css'
Vue.use(element)
// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8443/api'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios
Vue.config.productionTip = false
// 将判断是否为移动端注册到全局，方便获取
Vue.prototype.isMobile = false
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
  Vue.prototype.isMobile = true
}

const d = new Date()
let month = d.getMonth() + 1
let date = d.getDate()
let today = `${month}月${date}日`
if (today === '4月4日') {
  // 如果是清明，全站灰度化
  document.querySelector('html').style.filter = 'grayscale(1)'
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    borRadius: ''
  },
  router,
  components: {App},
  template: '<App/>'
})
