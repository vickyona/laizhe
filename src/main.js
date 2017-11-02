import Vue from 'vue'
import App from './app/App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
