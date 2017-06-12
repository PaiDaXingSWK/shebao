// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import  Axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import acquisition from './components/acquisition/acquisition.vue'
Vue.use(VueRouter)
Vue.use(iView);
Vue.config.productionTip = false
Vue.prototype.$http = Axios
/* eslint-disable no-new */

const routes = [
  {
    path: '/',
    name: 'index',
    component: App,
    children: [
      {path: '/acquisition',component: acquisition
       /* ,
      children:[{path:'/',component:stepF}]*/
    }
     /* {
      path: '/ratings', component: ratings,
      children:[{path: 'sec', component: sec}, {
        path: 'sec2', component: sec2
      }]
    },
      {path:'/sec',component:sec}*/
    ]
  }
]


let router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

new Vue({
  router
}).$mount('#app')
router.push('/acquisition')
