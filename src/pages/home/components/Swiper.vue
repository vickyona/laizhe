<template>
 <swiper :options="swiperOption" id="swiper" ref="mySwiper">
      <swiper-slide v-for="item in swiperInfo" :key="item.id">
        <router-link :to="item.link">
          <img :src="item.imgUrl" alt="">
        </router-link>
      </swiper-slide>
      
      <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        direction: "horizontal",
        spaceBetween: 0,
        autoHeight: true,
        paginationType: "bullets",
        pagination: ".swiper-pagination",
        observeParents: true
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiperInfo() {
      return this.$store.state.home.swiperInfo;
    }
  }
};
</script>
<style>
.swiper-pagination-bullet {
  background: #00bcd4;
}
</style>

<style scoped>
/* .con {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
} */
img {
  width: 100%;
}
</style>