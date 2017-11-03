<template>
    <div>
        <h1 class="week-title">周末去哪</h1>
        <div>
          <div class="mp-product-item" v-for="item in weekInfo" :key="item.title">
            <a  :title="item.title" class="mp-fulllink">
              <div class="product-imgcontainer image-ready">
                <img :src="item.path" :alt="item.title">
              </div>
              <div class="mp-product-info">
                <p class="product-name">{{item.title}}</p>
                <p class="product-desc">{{item.slogan}}</p>
              </div>
            </a>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      weekInfo: [
        {
          path: require("../../assets/weekend/week1.jpg"),
          title: "北京温泉排行榜",
          slogan: "细数北京温泉，",
        },
        {
          path: require("../../assets/weekend/week2.jpg"),
          title: "北京温泉排行榜",
          slogan: "细数北京温泉，",
        },
        {
          path: require("../../assets/weekend/week3.jpg"),
          title: "北京温泉排行榜",
          slogan: "细数北京温泉，",
        },
        {
          path: require("../../assets/weekend/week4.jpg"),
          title: "北京温泉排行榜",
          slogan: "细数北京温泉，",
        },
        {
          path: require("../../assets/weekend/week5.jpg"),
          title: "北京温泉排行榜",
          slogan: "细数北京温泉，",
        },
        {
          path: require("../../assets/weekend/week1.jpg"),
          title: "北京温泉排行榜",
          slogan: "细数北京温泉，",
        }
      ]
    };
  }
};
</script>
<style>
  .week-title{
    height: .8rem;
    padding-left: .26rem;
    line-height: .8rem;
    color: #212121;
  }
  .mp-product-item{
    position: relative;
    margin-bottom: .1rem;
    background: #fff;
  }
  .mp-fulllink{
    display: block;
    width: 100%;
    height: 100%;
  }
  .product-imgcontainer{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 37.4375%;
  }
  .image-ready{
    background: none !important;
  }
  .mp-product-info{
    position: relative;
    padding: .14rem .2rem .2rem .2rem;
  }
  .product-name{
    overflow: hidden;
    padding-right: 1.4rem;
    color: #212121;
    font-size: .28rem;
    line-height: .48rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .product-desc{
    overflow: hidden;
    padding-right: 1.4rem;
    color: #616161;
    font-size: .24rem;
    line-height: .42rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>

