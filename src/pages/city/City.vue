<template>
	<div>
 		<city-header/>
 		<city-list ></city-list>
 	</div>
</template>

<script>
import CityHeaderComponent from "./CityHeader";
import CityListComponent from "./CityList";
import axios from "axios";

export default {
  components: {
    "city-header": CityHeaderComponent,
    "city-list": CityListComponent,
  },
  mounted() {
  	axios.get("/city/data").then( res => {
  		var result = res.data;
  	});
  }
};
</script>

<style>
html {
  background: #f5f5f5;
}
</style>
