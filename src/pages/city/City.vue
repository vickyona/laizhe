<template>
	<div>
 		<city-header/>
 		<city-list ></city-list>
 	</div>
</template>

<script>
import CityHeaderComponent from "./CityHeader";
import CityListComponent from "./CityList";

export default {
  components: {
    "city-header": CityHeaderComponent,
    "city-list": CityListComponent
  }
};
</script>

<style>
html {
  background: #f5f5f5;
}
</style>
