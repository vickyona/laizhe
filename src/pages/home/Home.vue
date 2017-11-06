<template>
	<div>
		<index-hearder/>
		 <index-swiper></index-swiper>
     <index-iconSwiper></index-iconSwiper>
     <index-onSale></index-onSale>
     <index-hotPlace></index-hotPlace>
     <index-weekendPlace></index-weekendPlace>
 	</div>
</template>

<script>
import Header from "./components/Header";
import Swiper from "./components/Swiper";
import IconSwiper from "./components/IconSwiper";
import OnSale from "./components/OnSale";
import HotPlace from "./components/HotPlace";
import WeekendPlace from "./components/WeekendPlace";
export default {
  components: {
    "index-hearder": Header,
    "index-swiper": Swiper,
    "index-iconSwiper": IconSwiper,
    "index-onSale": OnSale,
    "index-hotPlace": HotPlace,
    "index-weekendPlace": WeekendPlace
  }
};
</script>

<style>
html {
  background: #f5f5f5;
}
</style>
