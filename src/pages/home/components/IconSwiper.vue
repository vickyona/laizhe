<template>
 <swiper :options="swiperOption" id="swiper" ref="mySwiper">
      <swiper-slide>
        <div v-for="(item,index) in iconSwiperInfo" v-if="index<8" :key="item.id">
          <img :src="item.imgUrl" alt="">
          <p class="itemTitle">{{item.name}}</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div v-for="(item,index) in iconSwiperInfo" v-if="7 < index && index < 16" :key="item.id">
          <img :src="item.imgUrl" alt="">
          <p class="itemTitle">{{item.name}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: ["iconSwiperInfo"],
  data() {
    return {
      swiperOption: {
        autoplay: 0,
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
#swiper > .swiper-wrapper {
  background: #fff;
}
#swiper > .swiper-wrapper .swiper-slide {
  height: 3.8rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;
}

#swiper > .swiper-wrapper .swiper-slide > div {
  width: 25%;
  padding-top: 0.3rem;
  text-align: center;
}
#swiper > .swiper-wrapper .swiper-slide > div > .itemTitle {
  width: 100%;
  height: 0.38rem;
  overflow: hidden;
  margin-top: 0.2rem;
  line-height: 0.38rem;
  font-size: 0.28rem;
}
#swiper > .swiper-wrapper .swiper-slide > div > img {
  width: 0.66rem;
}
</style>