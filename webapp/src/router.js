import Vue from 'vue'
import Router from 'vue-router'
import NewImg from './views/NewImg.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'newimg',
      component: NewImg
    },
    {
      path: '/stored',
      name: 'stored',
      component: () => import('./views/Stored.vue')
    }
  ]
})
