import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Swiper from '@/pages/home/Swiper'

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }]
});
