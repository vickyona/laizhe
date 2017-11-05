import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Swiper from '@/pages/home/Swiper'
import Order from '@/pages/order/Order'

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/order',
    name: 'Order',
    component: Order,
  }]
})
