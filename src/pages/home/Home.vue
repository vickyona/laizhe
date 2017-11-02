<template>
	<div>
 		<home-header/>
		 <swiper-content></swiper-content>
     <navBoard-content></navBoard-content>
     <onSale-content></onSale-content>
     <hotPlace-content></hotPlace-content>
 	</div>
</template>

<script>
import HeaderComponent from "./Header";
import SwiperContent from "./Swiper";
import NavBoard from "./NavBoard";
import OnSale from "./OnSale";
import HotPlace from "./HotPlace";
export default {
  components: {
    "home-header": HeaderComponent,
    "swiper-content": SwiperContent,
    "navBoard-content": NavBoard,
    "onSale-content": OnSale,
    "hotPlace-content": HotPlace
  }
};
</script>

<style>
html {
  background: #f5f5f5;
}
</style>
