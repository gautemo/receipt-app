import Vue from 'vue'
import Router from 'vue-router'
import NewImg from './views/NewImg.vue'
import firebase from '@/firebaseinit.js'
import "firebase/auth";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'newimg',
      component: NewImg,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/stored',
      name: 'stored',
      component: () => import('./views/Stored.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  const user = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !user) {
    next('login');
  } else {
    next();
  }
});

export default router;
