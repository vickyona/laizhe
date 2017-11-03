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
          slogan: "细数北京温泉，温暖你的冬天"
        },
        {
          path: require("../../assets/weekend/week2.jpg"),
          title: "寻找北京的皇城范儿",
          slogan: "数百年的宫廷庙宇，至今依旧威严霸气"
        },
        {
          path: require("../../assets/weekend/week3.jpg"),
          title: "北京必游TOP10",
          slogan: "来北京必去的景点非这些地方莫属"
        },
        {
          path: require("../../assets/weekend/week4.jpg"),
          title: "登高望远秋色佳",
          slogan: "山顶满眼彩色，此情此景醉了"
        },
        {
          path: require("../../assets/weekend/week5.jpg"),
          title: "秋高气爽去礼佛",
          slogan: "秋风伴着美妙经声，品尝秋的另一番滋味"
        }
      ]
    };
  }
};
</script>
<style>
.week-title {
  height: 0.8rem;
  padding-left: 0.26rem;
  line-height: 0.8rem;
  color: #212121;
}
.mp-product-item {
  position: relative;
  margin-bottom: 0.1rem;
  background: #fff;
}
.mp-fulllink {
  display: block;
  width: 100%;
  height: 100%;
}
.product-imgcontainer {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 37.4375%;
}
.image-ready {
  background: none !important;
}
.mp-product-info {
  position: relative;
  padding: 0.14rem 0.2rem 0.2rem 0.2rem;
}
.product-name {
  overflow: hidden;
  padding-right: 1.4rem;
  color: #212121;
  font-size: 0.28rem;
  line-height: 0.48rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.product-desc {
  overflow: hidden;
  padding-right: 1.4rem;
  color: #616161;
  font-size: 0.24rem;
  line-height: 0.42rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>

