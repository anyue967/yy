import Vue from 'vue'
import App from './App.vue'
import router from './router' // 路由
import './plugins/element.js'
import './assets/css/main.css'
import axios from 'axios'

// axios 全局配置
axios.defaults.baseURL = '/api/v1/'
// axios.defaults.baseURL = 'http://127.0.0.1:8000/' // Django WSGI
// 为Vue类增加全局属性$http, 这样所有组件实例都可以使用该属性
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router, // 使用路由
  render: h => h(App)
}).$mount('#app') // 在SPA的唯一的HTML网页里边找id为app的HTML标签上的mount Vue组件
