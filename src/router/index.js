import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import postDetail from '../components/mainComponents/postComponents/postDetail'
import postCard from '../components/mainComponents/postComponents/postCard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'login',
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
        },
        {
          name: 'postList',
          path: '/',
          component: postCard
        }
      ]
    }
  ]
})
