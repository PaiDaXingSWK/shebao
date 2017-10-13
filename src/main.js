// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueRouter from 'vue-router'
import router from './router'
import  Axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'


// Vue.use(VueRouter)
Vue.use(iView);
Vue.config.productionTip = false
Vue.prototype.$http = Axios
//Axios.defaults.baseURL = 'http://192.168.31.99:8040'
if(localStorage.getItem('id_token')){
  console.log(localStorage.getItem('id_token'))

}

// 全局的请求拦截器
Axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (localStorage.getItem('id_token')) {
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }
  else {
    next();
  }
})

/* eslint-disable no-new */




new Vue({
  router, render: h => h(App)
}).$mount('#app')
// router.push('/login')
