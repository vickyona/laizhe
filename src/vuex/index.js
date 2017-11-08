import Vue from 'vue'
import Vuex from 'vuex'
import home from '../pages/home/module.js'
import search from '../pages/search/module.js'
import order from "../pages/order/moudle.js"
import city from "../pages/city/module.js"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home: home,
    search: search,
    order: order,
    city: city
  }
})
