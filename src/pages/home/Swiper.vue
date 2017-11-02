<template>
 <swiper :options="swiperOption" ref="mySwiper" id="swiper">
    <!-- slides -->
      <swiper-slide><img src="../../assets/swipers/swiper1.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../../assets/swipers/swiper2.png" alt=""></swiper-slide>
      <swiper-slide><img src="../../assets/swipers/swiper3.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../../assets/swipers/swiper4.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../../assets/swipers/swiper5.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../../assets/swipers/swiper6.jpg" alt=""></swiper-slide>
    <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        notNextTick: false,
        autoplay: 3000,
        centeredSlides: true,
        // direction : 'vertical',
        spaceBetween: 0,
        effect: "coverflow",
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        paginationType: "dots",
        pagination: ".swiper-pagination",
        paginationClickable: true,
        scrollbar: ".swiper-scrollbar",
        mousewheelControl: true,
        observeParents: true
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>

<style>
.swiper-slide {
  float: left;
}
img {
  width: 100%;
}
</style>