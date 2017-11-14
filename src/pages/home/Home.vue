<template>
	<div>
		<index-hearder/>
		 <index-swiper></index-swiper>
     <index-iconSwiper></index-iconSwiper>
     <index-hotSale></index-hotSale>
     <index-hotPlace></index-hotPlace>
     <index-weekendPlace></index-weekendPlace>
     <index-download></index-download>
 	</div>
</template>

<script>
import Header from "./components/Header";
import Swiper from "./components/Swiper";
import IconSwiper from "./components/IconSwiper";
import HotSale from "./components/HotSale";
import HotPlace from "./components/HotPlace";
import WeekendPlace from "./components/WeekendPlace";
import Download from "./components/Download";
export default {
  components: {
    "index-hearder": Header,
    "index-swiper": Swiper,
    "index-iconSwiper": IconSwiper,
    "index-hotSale": HotSale,
    "index-hotPlace": HotPlace,
    "index-weekendPlace": WeekendPlace,
    "index-download": Download
  },
  mounted() {
    if (this.$store.getters.shouldGetHomeData) {
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
