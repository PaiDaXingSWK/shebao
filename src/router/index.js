import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      children: [
        {
          path: '/',
          component: resolve => require(['../components/login.vue'], resolve)
        }
      ]
    },
    {
      path: '/readme',
      component: resolve => require(['../components/home.vue'], resolve),
      children: [
        {path: '/acquisition', component: resolve => require(['../components/acquisition/acquisition.vue'], resolve)},
        {path: '/identify', component: resolve => require(['../components/identify/identify.vue'], resolve)},
        {path: '/check', component: resolve => require(['../components/check/check.vue'], resolve)},
        {path: '/analyse', component: resolve => require(['../components/analyse/analyse.vue'], resolve)},
        {path: '/manage', component: resolve => require(['../components/manage/manage.vue'], resolve)}
      ]
    },
    {
      path: '/login', component: resolve => require(['../components/login.vue'], resolve)
    }
  ]
})
