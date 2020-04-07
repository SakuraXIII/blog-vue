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
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/article/:id',
          component: postDetail
        },
        {
          path: '/',
          component: postCard
        }
      ]
    }
  ]
})
