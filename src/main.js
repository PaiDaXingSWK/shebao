// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import  Axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import acquisition from './components/acquisition/acquisition.vue'
import identify from './components/identify/identify.vue'
import check from './components/check/check.vue'
import analyse from './components/analyse/analyse.vue'
import manage from './components/manage/manage.vue'
import login from './components/login.vue'

Vue.use(VueRouter)
Vue.use(iView);
Vue.config.productionTip = false
Vue.prototype.$http = Axios
/* eslint-disable no-new */

const routes = [
  {
    path:'/',
    component:App,
    children: [
      {
        path: '/',
        component: login
      }
    ]
  },
  {
    path: '/App',
    name: 'App',
    component: App,
    children: [
      {path: '/login',component: login
      },
      {path: '/acquisition',component: acquisition
    },
      {path:'/identify',component:identify},
      {path:'/check',component:check},
      {path:'/analyse',component:analyse},
      {path:'/manage',component:manage}
     /* {
      path: '/ratings', component: ratings,
      children:[{path: 'sec', component: sec}, {
        path: 'sec2', component: sec2
      }]
    }*/
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
router.push('/login')
