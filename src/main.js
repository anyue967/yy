import Vue from 'vue'
import App from './App.vue'
import router from './router' // 路由
import './plugins/element.js'
import './assets/css/main.css'

Vue.config.productionTip = false

new Vue({
  router, // 使用路由
  render: h => h(App)
}).$mount('#app') // 在SPA的唯一的HTML网页里边找id为app的HTML标签上的mount Vue组件
