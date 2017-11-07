<template>
	<div>
		<index-hearder/>
		 <index-swiper :swiperInfo="this.$store.state.swiperInfo"></index-swiper>
     <index-iconSwiper :iconSwiperInfo="this.$store.state.iconSwiperInfo"></index-iconSwiper>
     <index-onSale></index-onSale>
     <index-hotPlace :hotPlaceInfo="this.$store.state.hotPlaceInfo"></index-hotPlace>
     <index-weekendPlace :weekendPlaceInfo="this.$store.state.weekendPlaceInfo"></index-weekendPlace>
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
  },
  mounted() {
    if (!this.$store.state.swiperInfo.length) {
      this.$store.dispatch("getIndexInfo");
    }
  }
};
</script>

<style>
html {
  background: #f5f5f5;
}
</style>
