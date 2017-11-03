<template>
 <swiper :options="swiperOption" id="swiper" ref="mySwiper">
      <swiper-slide><img src="../../assets/swipers/swiper1.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../../assets/swipers/swiper2.png" alt=""></swiper-slide>
      <swiper-slide><img src="../../assets/swipers/swiper3.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../../assets/swipers/swiper4.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../../assets/swipers/swiper5.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../../assets/swipers/swiper6.jpg" alt=""></swiper-slide>
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
  }
};
</script>

<style scoped>
.con {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
}
img {
  width: 100%;
}
</style>