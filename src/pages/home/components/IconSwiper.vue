<template>
 <swiper :options="swiperOption" id="swiper" ref="mySwiper">
      <swiper-slide>
        <div v-for="(item,index) in imgs" v-if="index<8" :key="item.name">
          <img :src="item.path" alt="">
          <p class="itemTitle">{{item.name}}</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div v-for="(item,index) in imgs" v-if="7 < index && index < 16" :key="item.name">
          <img :src="item.path" alt="">
          <p class="itemTitle">{{item.name}}</p>
        </div>
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
        autoplay: 0,
        direction: "horizontal",
        spaceBetween: 0,
        autoHeight: true,
        paginationType: "bullets",
        pagination: ".swiper-pagination",
        observeParents: true
      },
      imgs: [
        {
          path: require("../../../assets/nav/nav1.png"),
          name: "景点门票"
        },
        {
          path: require("../../../assets/nav/nav2.png"),
          name: "动植物园"
        },
        {
          path: require("../../../assets/nav/nav3.png"),
          name: "故宫"
        },
        {
          path: require("../../../assets/nav/nav4.png"),
          name: "一日游"
        },
        {
          path: require("../../../assets/nav/nav5.png"),
          name: "必游榜单"
        },
        {
          path: require("../../../assets/nav/nav6.png"),
          name: "秋色美"
        },
        {
          path: require("../../../assets/nav/nav7.png"),
          name: "游乐场"
        },
        {
          path: require("../../../assets/nav/nav8.png"),
          name: "泡温泉"
        },
        {
          path: require("../../../assets/nav/nav9.png"),
          name: "城市观光"
        },
        {
          path: require("../../../assets/nav/nav10.png"),
          name: "玻璃栈道"
        },
        {
          path: require("../../../assets/nav/nav11.png"),
          name: "名胜古迹"
        },
        {
          path: require("../../../assets/nav/nav12.png"),
          name: "周边游"
        },
        {
          path: require("../../../assets/nav/nav13.png"),
          name: "自然风光"
        },
        {
          path: require("../../../assets/nav/nav14.png"),
          name: "古北水镇"
        },
        {
          path: require("../../../assets/nav/nav15.png"),
          name: "景点讲解"
        },
        {
          path: require("../../../assets/nav/nav16.png"),
          name: "全部"
        }
      ]
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
  width:100%;
  height:0.38rem;
  overflow: hidden;
  margin-top: 0.2rem;
  line-height: 0.38rem;
  font-size: 0.28rem;
}
#swiper > .swiper-wrapper .swiper-slide > div > img {
  width: 0.66rem;
}
</style>