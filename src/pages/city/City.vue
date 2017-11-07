<template>
	<div>
 		<city-header/>
 		<city-list :internalCity="internalCity" :foreignCity="foreignCity"></city-list>
 	</div>
</template>

<script>
import CityHeaderComponent from "./CityHeader";
import CityListComponent from "./CityList";
import axios from "axios";

export default {
  data() {
    return {
      internalCity: [],
      foreignCity: []
    }
  },
  components: {
    "city-header": CityHeaderComponent,
    "city-list": CityListComponent,
  },
  methods: {
    getCityData: function() {
      axios.get("/static/data.json")
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataError.bind(this))
    },
    handleGetDataSucc(res) {
      if(res.status === 200){
        this.internalCity = res.data.data.internalCity
        this.foreignCity = res.data.data.foreignCity;
      }
    },
    handleGetDataError(err) {
      console.log(err)
    }
  },
  mounted() {
  	this.getCityData();
  }
};
</script>

<style>
html {
  background: #f5f5f5;
}
</style>
