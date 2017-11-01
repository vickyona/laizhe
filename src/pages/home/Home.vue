<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent
	}
}
</script>

<style>
</style>
