import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Search from '@/pages/search/Search'
import Order from '@/pages/order/Order'
import Detail from '@/pages/detail/Detail'

import Beijing from '@/pages/beijing/Beijing'
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City,
  }, {
    path: '/search',
    name: 'Search',
    component: Search,
  }, {
    path: '/order',
    name: 'Order',
    component: Order,
  }, {
    path: '/detail',
    name: 'detail',
    component: Detail
  }, {
    path: '/beijing',
    name: 'Beijing',
    component: Beijing,
  }]
})
