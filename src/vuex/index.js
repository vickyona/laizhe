import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex);

export default  new Vuex.Store({
	state: {
      domestic: [],
      foreign: [],
      changeshow:""
	},
	actions: {
		getCityData: function(context) {
	      axios.get("/static/data.json")
	        .then((res)=>{
	        	if(res.status === 200){
			        const {data} = res.data;
			        context.commit("changeinternalCity",data);
      			}
	        })
	    }, 
	},
	mutations: {
		changeinternalCity(state, data) {
			state.domestic = data.domestic;
			state.foreign = data.foreign;
		},
		changeShow(state, data) {
			state.changeshow = data;
		}
	},
	getters: {
		
	}
});




