import Vue from 'vue'
import App from './App.vue'
import router from './router' // 路由
import './plugins/element.js'
import './assets/css/main.css'
import axios from 'axios'

// axios 全局配置
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做什么
  const { url } = config
  if (url !== 'login/') {
    const token = window.localStorage.getItem('token')
    if (token) {
      config.header.Authorization = token
    }
    console.log(config)
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//   // 对响应数据做点什么
//   return response
// }, function (error) {
//   // 对响应错误做点什么
//   return Promise.reject(error)
// })

axios.defaults.baseURL = '/api/v1/'
// axios.defaults.baseURL = 'http://127.0.0.1:8000/' // Django WSGI
// 为Vue类增加全局属性$http, 这样所有组件实例都可以使用该属性
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router, // 使用路由
  render: h => h(App)
}).$mount('#app') // 在SPA的唯一的HTML网页里边找id为app的HTML标签上的mount Vue组件
