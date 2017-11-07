<template>
    <div id="hotPlace">
        <div class="hot-title">热销推荐</div>
        <div id="hot-stage" v-for="item in hotInfo" :key="item.name">
            <img :src="item.path" alt="">
            <div id="hot-content">
                <span>{{item.name}}</span>
                <span>{{item.slogan}}</span>
                <span>¥<b>{{item.price}}</b><span>起</span></span>
            </div>
        </div>
        <div class="hot-more">查看所有产品</div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      hotInfo: [
        {
          path: require("../../../assets/hot/hot1.jpg"),
          name: "故宫",
          slogan: "东方宫殿建筑代表作，世界宫殿建筑典范",
          price: "65"
        },
        {
          path: require("../../../assets/hot/hot2.jpg"),
          name: "八达岭长城",
          slogan: "不到长城非好汉",
          price: "25"
        },
        {
          path: require("../../../assets/hot/hot3.jpg"),
          name: "颐和园",
          slogan: "保存完成的一座皇家行宫御苑",
          price: "1"
        },
        {
          path: require("../../../assets/hot/hot4.jpg"),
          name: "北京欢乐谷",
          slogan: "七大主题园区带你畅享北京欢乐谷",
          price: "13"
        },
        {
          path: require("../../../assets/hot/hot5.jpg"),
          name: "慕田峪长城",
          slogan: "秀美长城，关键是人少",
          price: "19.1"
        }
      ]
    };
  }
};
</script>
<style>
.hot-title {
  clear: both;
  width: 2rem;
  height: 0.8rem;
  overflow: hidden;
  padding-left: 0.26rem;
  line-height: 0.8rem;
  color: #212121;
}
#hot-stage {
  background: #fff;
  height: 1.4rem;
  padding: 0.24rem;
  border-bottom: 1px solid #f4f4f4;
}
#hot-stage > img {
  float: left;
  width: 1.4rem;
}
#hot-content > span {
  display: block;
  width:4rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 1.6rem;
  padding: 0.04rem;
}
#hot-content > span:nth-child(1) {
  overflow: hidden;
  margin-top: 0.04rem;
  margin-bottom: 0.1rem;
  color: #212121;
  font-size: 0.3rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#hot-content > span:nth-child(2) {
  height: 0.4rem;
  overflow: hidden;
  margin-bottom: 0.1rem;
  line-height: 0.4rem;
  color: #9e9e9e;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#hot-content > span:nth-child(3) {
  margin-left: 1.6rem;
  color: #ff8300;
}
#hot-content > span:nth-child(3) > b {
  font-size: 0.36rem;
  padding: 0.04rem;
}
#hot-content > span:nth-child(3) > span {
  color: #9e9e9e;
  font-size: 0.24rem;
}
.hot-more {
  overflow: hidden;
  height: 0.88rem;
  line-height: 0.88rem;
  text-align: center;
  background: #fff;
  color: #00afc7;
}
</style>

