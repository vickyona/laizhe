import Vue from 'vue'
import App from './app/App'
import router from './router'
import store from './vuex'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import iscroll from 'vue-scroll'
import VueScroller from 'vue-scroller'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'



Vue.use(IScrollView, IScroll)
Vue.use(VueAwesomeSwiper)
Vue.use(VueScroller)



new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
