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
if(localStorage.getItem('id_token')){
  console.log(localStorage.getItem('id_token'))
  Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')
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
