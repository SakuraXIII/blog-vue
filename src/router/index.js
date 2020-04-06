import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import postDetail from '../components/mainComponents/postComponents/postDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/',
      component: Home,
      children: [
        {
          name: 'postDetail',
          path: '/article/:id',
          component: postDetail
        }
      ]
    }
  ]
})
