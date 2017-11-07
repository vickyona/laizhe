import Vue from "vue"
import Vuex from "vuex"
import order from "../pages/order/moudle.js"

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		order:order
	}

})