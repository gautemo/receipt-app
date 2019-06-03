import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import firebase from '@/firebaseinit.js'

Vue.config.productionTip = false

let mounted = false;
firebase.auth().onAuthStateChanged(() => {
  if (!mounted) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
    mounted = true;
  }
});