<template>
    <div class="headfigure">
        <div class="headfigure-wrap" mp-role="imgContainer">
            <img @click="handleImgClick" class="headfigure-img" src="//img1.qunarzz.com/sight/p0/1707/39/3909e50919a141f9a3.img.jpg_600x330_6666eea6.jpg" alt="长隆水上乐园">
        </div>
        <div class="background-img" ref="showe" v-show="show" >  
            <div class="close-mask iconfont" @click="handleCloseClick">&#xe624;</div>
            <swiper :options="swiperOption" ref='mySwiper' >
                <swiper-slide>
                    <div class="img-container">
                        <img class="swiper-img" src="//img1.qunarzz.com/sight/p0/1707/39/3909e50919a141f9a3.img.jpg_800x800_e32447a6.jpg"/>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="img-container">
                        <img class="swiper-img" src="//img1.qunarzz.com/sight/p0/1707/33/33d47d55bbab5c84a3.img.jpg_800x800_03fa5527.jpg"/>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="img-container">
                        <img class="swiper-img" src="//img1.qunarzz.com/sight/p0/1707/ab/abb70c851caaa6d8a3.img.jpg_800x800_2284f1c4.jpg" />
                    </div>
                </swiper-slide>  
            </swiper>
            <div class='imgswipe-bar'> 
                <div class="imgswipe-turn swiper-button-prev iconfont" slot="button-prev">&#xe720;</div>
                <div class="imgswipe-turn swiper-button-next iconfont" slot="button-next">&#xe649;</div> 
            </div>     
        </div> 
        <div class="headfeagure-info">
            <div class="headfeagure-title">
               长隆水上乐园(AAAAA景区)
            </div>
            <div class="imgswipeicon">
                <span class="iconfont">&#xe636;</span>
                <em class="imgswipeicon-number">16</em>
            </div>
        </div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      show: false,
      swiperOption: {
        direction: "horizontal",
        grabCursor: false,
        setWrapperSize: true,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next"
      }
    };
  },
  methods: {
    handleImgClick() {
      this.$refs.showe.style.display = "block";
    },
    handleCloseClick() {
      this.$refs.showe.style.display = "none";
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  components: {
    swiper: swiper,
    "swiper-slide": swiperSlide
  }
};
</script>
<style>
@import "~swiper/dist/css/swiper.css";
@import "../../assets/font/iconfont.css";
#map {
  width: 100%;
  height: 100px;
}
.headfigure {
  position: relative;
}
.headfigure-wrap {
  padding-bottom: 56.25%;
  width: 100%;
  height: 0;
}
.headfigure-img {
  width: 100%;
  vertical-align: top;
}
.headfeagure-info {
  position: absolute;
  right: 0.2rem;
  bottom: 0.2rem;
  left: 0.2rem;
  z-index: 1;
}
.headfeagure-title {
  position: relative;
  margin-right: 1.4rem;
  line-height: 0.4rem;
  color: #fff;
  font-size: 0.24rem;
  text-shadow: 0 0.02rem 0.04rem rgba(0, 0, 0, 0.7);
}
.imgswipeicon {
  position: absolute;
  right: 0;
  top: 0;
  width: 1.2rem;
  height: 0.4rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0.2rem;
  font-size: 0.24rem;
  color: #fff;
  line-height: 0.4rem;
  text-align: center;
}
.background-img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 1);
  z-index: 90;
}
.close-mask {
  position: absolute;
  top: 3%;
  right: 3%;
  width: 0.67rem;
  height: 0.67rem;
  border-radius: 50%;
  line-height: 0.78rem;
  background: #5f666e;
  text-align: center;
  color: #fff;
  font-size: 0.32rem;
  overflow: hidden;
  opacity: 0.7;
  z-index: 10;
}
.img-container {
  width: 100%;
  height: 100%;
  margin: 30% 0;
  z-index: 3;
}
.swiper-img {
  width: 100%;
  height: 100%;
}
.imgswipe-bar {
  position: absolute;
  z-index: 9;
  right: 0;
  bottom: 2rem;
  left: 0;
  color: #fff;
}
.imgswipe-turn {
  position: absolute;
  top: 0;
  width: 0.8rem;
  height: 0.8rem;
  background: rgba(51, 51, 51, 0.8);
  text-align: center;
  line-height: 0.8rem;
  border-radius: 50%;
}
.swiper-button-prev {
  left: 0.4rem;
}
.swiper-button-next {
  right: 0.4rem;
}
</style>