import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSocketIO from 'vue-socket.io';

Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')




Vue.use(new VueSocketIO({//podesavanja za server
  debug: false,
  connection: 'ws://127.0.0.1:8000',
  vuex: {
    store,
    actionPrefix: 'socket_',
  }
}));



