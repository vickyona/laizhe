<template>
	<div>
		<beijing-header/>
        <Sort-contend :categories="categories"></Sort-contend>
				<List-contend ></List-contend >
	</div>
</template>

<script>
import HeaderComponent from "./components/Header";
import SortComponent from "./components/Sort";
import ListComponent from "./components/List";
import axios from "axios";

export default {
	data(){
		return {
			categories:[]
		}

	},
	methods:{
		getCategoriesData(){
            axios.get("/static/categories.json")
                 .then(this.handleGetDataSucc.bind(this))
                 .catch(this.handleGetDataErr.bind(this))
        },
        handleGetDataSucc(response){
					console.log(response)
            if(response.status==200){
          this.categories=response.data.data.categories
            }
            
        },
        handleGetDataErr(){

        }

	},

  components: {
	"beijing-header": HeaderComponent,
	"Sort-contend": SortComponent,
	"List-contend": ListComponent
	},
	mounted(){
		this.$store.dispatch("getlists");
		this.getCategoriesData();
  }
};
</script>

<style>
html {
  background: #f5f5f5;
}
</style>
