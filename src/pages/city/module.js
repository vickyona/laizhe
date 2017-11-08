import axios from "axios"
export default {
	state: {
      domestic: [],
      foreign: [],
      changeshow:""
	},
	actions: {
		getCityData: function(context) {
	      axios.get("/static/city.json")
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
		getDataSucc(state) {
			if(!state.domestic.length && !state.foreign.length){
				return true;
			}else{
				return false;
			}
		}
	}
}




