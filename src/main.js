// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueRouter from 'vue-router'
import router from './router'
import  Axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
/*import acquisition from './components/acquisition/acquisition.vue'
import identify from './components/identify/identify.vue'
import check from './components/check/check.vue'
import analyse from './components/analyse/analyse.vue'
import manage from './components/manage/manage.vue'
import login from './components/login.vue'*/

// Vue.use(VueRouter)
Vue.use(iView);
Vue.config.productionTip = false
Vue.prototype.$http = Axios
Axios.defaults.baseURL = 'http://192.168.31.99:8040'
if(localStorage.getItem('id_token')){
  console.log(localStorage.getItem('id_token'))
  // Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')
  Axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3MiOiJhZG1pbiIsImF0dGVuZGFuY2UiOiJhZG1pbiIsImNvcmUiOiJhZG1pbiIsImVudGVycHJpc2UiOiJhZG1pbiIsImV4YW0iOiJhZG1pbiIsImV4cCI6MTQ5Nzc2NDYzMSwiaWQiOiI5YTJmNzg3Yi0zYjZlLTExZTctODczYi0wMjQyYWMxMjAwMGEiLCJvcmlnX2lhdCI6MTQ5NzUwNTQzMSwicGF5bWVudCI6ImFkbWluIiwicmVtb3Rlc2l0ZSI6ImFkbWluIiwidmlzaXRvciI6ImFkbWluIn0.1idoqmCG2UpG-Q_eoQqbQmKl3FlAKWG8WRx4P2MgAMY'
}

// 全局的请求拦截器
Axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});
Axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if(error.response){
    let status = error.response.status;
    if(status === 401){
      router.replace({ path: '/login',
        query: {redirect: router.currentRoute.fullPath}})

    }
  }
  return Promise.reject(error);
});
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (localStorage.getItem('id_token')) {
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})

/* eslint-disable no-new */

//最原始的router配置已经存入桌面

/*
let Router = new VueRouter({
  linkActiveClass: 'active',
  routes
})*/


new Vue({
  router, render: h => h(App)
}).$mount('#app')
// router.push('/login')
