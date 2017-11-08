<template>
	<div>
 		<city-header></city-header>
 		<city-list ></city-list>
 	</div>
</template>

<script>

import CityHeaderComponent from "./component/CityHeader";
import CityListComponent from "./component/CityList";


export default {
  
  components: {
    "city-header": CityHeaderComponent,
    "city-list": CityListComponent,
  },
  
  mounted() {
  	if(this.$store.getters.getDataSucc) {
  		this.$store.dispatch("getCityData");
  	}
  }
};
</script>

<style>
html {
  background: #f5f5f5;
}
</style>
