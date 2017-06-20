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
          redirect: '/login'
        }
      ]
    },
    {
      path: '/readme',
      component: resolve => require(['../components/home.vue'], resolve),
      children: [
        {path: '/acquisition', meta: {requireAuth: true}, component: resolve => require(['../components/acquisition/acquisition.vue'], resolve)},
        {path: '/identify',meta: {requireAuth: true}, component: resolve => require(['../components/identify/identify.vue'], resolve)},
        {path: '/pickUp',meta: {requireAuth: true}, component: resolve => require(['../components/pickUp/pickUp.vue'], resolve)},
        {path: '/analyse',meta: {requireAuth: true}, component: resolve => require(['../components/analyse/analyse.vue'], resolve)},
        {path: '/manage',meta: {requireAuth: true}, component: resolve => require(['../components/manage/manage.vue'], resolve)}
      ]
    },
    {
      path: '/login', component: resolve => require(['../components/login.vue'], resolve)
    }
  ]
})
