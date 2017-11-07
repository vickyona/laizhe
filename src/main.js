import Vue from 'vue'
import App from './app/App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from "./vuex"

Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
