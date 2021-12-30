// import App from './App.vue'
// import Vue from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import VueRouter from "vue-router";
// import VueResource from 'vue-resource'

//开启debug模式
// Vue.config.debug = true;

// Vue.use(ElementUI)
// Vue.use(VueRouter);
// Vue.use(VueResource);

// // 定义组件, 也可以像教程之前教的方法从别的文件引入
// const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
// import firstcomponent from './components/firstcomponent.vue'
// import secondcomponent from './components/secondcomponent.vue'
// import tree from './components/tree.vue'
//
// // 创建一个路由器实例
// // 并且配置路由规则
// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//     {
//       path: '/first',
//       component: First
//     },
//     {
//       path: '/firstcomponent',
//       component: firstcomponent
//     },
//     {
//       path: '/second',
//       component: secondcomponent
//     },
//     {
//       path: '/tree',
//       component: tree
//     },
//   ]
// })

// 自定义过滤器 "currency"
// Vue.filter('currency', function (value) {
//   return '$' + value.toFixed(2);
// });

// /src/main.js
import App from './App.vue'

// 移除
// import Vue from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import axios from 'axios'
// import Qs from 'qs'
// Vue.use(ElementUI)
// 添加
const Vue = require('vue')
const ElementUI = require('element-ui')
const axios = require('axios')
const Qs = require('qs')

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  // router: router,
  render: h => h(App)
}).$mount('#app')