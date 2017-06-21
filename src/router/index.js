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
        {path: '/pickUp',meta: {requireAuth: true}, component: resolve => require(['../components/pickUp/pickUp.vue'], resolve)},
        {path: '/analyse',meta: {requireAuth: true}, component: resolve => require(['../components/analyse/analyse.vue'], resolve),
          children: [
            {path: '/searchPeople',meta: {requireAuth: true}, component: resolve => require(['../components/analyse/searchPeople.vue'], resolve)},
            {path: '/identify',meta: {requireAuth: true}, component: resolve => require(['../components/analyse/identify.vue'], resolve)},
            {path: '/hisIdentify',meta: {requireAuth: true}, component: resolve => require(['../components/analyse/hisIdentify.vue'], resolve)}
          ]
        },
        {path: '/manage',meta: {requireAuth: true}, component: resolve => require(['../components/manage/manage.vue'], resolve),
        children: [
          {path: '/',meta: {requireAuth: true}, component: resolve => require(['../components/manage/users.vue'], resolve)},
          {path: '/users',meta: {requireAuth: true}, component: resolve => require(['../components/manage/users.vue'], resolve)},
          {path: '/setUp',meta: {requireAuth: true}, component: resolve => require(['../components/manage/setUp.vue'], resolve)},
          {path: '/core',meta: {requireAuth: true}, component: resolve => require(['../components/manage/core.vue'], resolve)}
        ]
        }
      ]
    },
    {
      path: '/login', component: resolve => require(['../components/login.vue'], resolve)
    }
  ]
})
