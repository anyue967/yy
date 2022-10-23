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

router.beforeEach((to, from, next) => {
  // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // else next()
  console.log(to)
  console.log(from)
  if (to.path === '/login') {
    next()
  } else {
    // 检查 token
    const token = window.localStorage.getItem('token')
    console.log(token)
    if (token) {
      // 拿到token，并不发送到后台验证，只不过不验证看到的是前端生成的页面，但是没有数据
      next()
    } else {
      next('/login')
    }
  }
})

export default router
