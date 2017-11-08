import Vue from "vue"
import Vuex from "vuex"
import city from "../pages/city/module.js"

Vue.use(Vuex);

export default  new Vuex.Store({
	modules:{
		city: city
	}
});




