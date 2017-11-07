<template>
	<div>
		<beijing-header/>
        <Classify-contend></Classify-contend>
				<List-contend :lists="lists"></List-contend >
	</div>
</template>

<script>
import HeaderComponent from "./components/Header";
import ClassifyComponent from "./components/Classify";
import ListComponent from "./components/List";
import axios from "axios";





export default {
	data(){
		return{
			lists:[]
		}
	},
  components: {
	"beijing-header": HeaderComponent,
	"Classify-contend": ClassifyComponent,
	"List-contend": ListComponent
	
    
  },
	methods:{
		getBeijingData(){
			    axios.get('/static/beijing.json')
					.then(this.handleGetDataSucc.bind(this))
					.catch(this.handleGetDataErr.bind(this))
		},
		handleGetDataSucc:function(response){
       if(response.status ==200){
				 const {data} =response.data;
				 this.lists=data.lists;

			 }
		},
		handleGetDataErr:function(error){
       console.log(error)
		}


	},
	mounted(){
		this.getBeijingData();

	}
};
</script>

<style>
html {
  background: #f5f5f5;
}
</style>
