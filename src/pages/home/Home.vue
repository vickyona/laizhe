<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
        <home-icon-swiper></home-icon-swiper>
        <home-hotSale></home-hotSale>
        <home-hotPlace></home-hotPlace>
        <home-weekendplace></home-weekendplace>
 	</div>
</template>

<script>
import Header from "./components/Header";
import Swiper from "./components/Swiper";
import IconSwiper from "./components/IconSwiper";
import HotSale from "./components/HotSale";
import HotPlace from "./components/HotPlace";
import WeekendPlace from "./components/WeekendPlace";
export default {
  components: {
    "home-header": Header,
    "home-swiper": Swiper,
    "home-icon-swiper": IconSwiper,
    "home-hotSale": HotSale,
    "home-hotPlace": HotPlace,
    "home-weekendplace": WeekendPlace
  }
};
</script>

<style>
html {
  background: #f5f5f5;
}
</style>
