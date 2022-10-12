import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/LoginView.vue'
import Home from '../views/HomeView.vue'

Vue.use(VueRouter)

// 路由表
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
