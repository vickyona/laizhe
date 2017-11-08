<template>
    <div id="hotPlace">
        <div class="hot-place-title">热销推荐</div>
        <div id="hot-place-stage" v-for="item in hotPlaceInfo" :key="item.name">
            <img :src="item.imgUrl" class="hotPlace-img" :alt="item.name">
            <div id="hot-place-content">
                <span class="hotPlace-name">{{item.name}}</span>
                <span class="hotPlace-slogan">{{item.slogan}}</span>
                <span class="hotPlace-price">¥<b>{{item.price}}</b><span>起</span></span>
            </div>
        </div>
        <div class="hot-more">查看所有产品</div>
    </div>
</template>
<script>
export default {
  computed:{
    hotPlaceInfo(){
      return this.$store.state.home.hotPlaceInfo;
    }
  }
  
};
</script>
<style>
.hot-place-title {
  clear: both;
  width: 2rem;
  height: 0.8rem;
  overflow: hidden;
  padding-left: 0.26rem;
  line-height: 0.8rem;
  color: #212121;
}
#hot-place-stage {
  background: #fff;
  height: 1.4rem;
  padding: 0.24rem;
  border-bottom: 1px solid #f4f4f4;
}
#hot-place-stage .hotPlace-img {
  float: left;
  width: 1.4rem;
}
.hotPlace-name,.hotPlace-slogan,.hotPlace-price{
  display: block;
  width: 4rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 1.6rem;
  padding: 0.04rem;
}
#hot-place-content .hotPlace-name {
  overflow: hidden;
  margin-top: 0.04rem;
  margin-bottom: 0.1rem;
  color: #212121;
  font-size: 0.3rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#hot-place-content .hotPlace-slogan {
  height: 0.4rem;
  overflow: hidden;
  margin-bottom: 0.1rem;
  line-height: 0.4rem;
  color: #9e9e9e;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#hot-place-content .hotPlace-price {
  margin-left: 1.6rem;
  color: #ff8300;
}
#hot-place-content .hotPlace-price  b {
  font-size: 0.36rem;
  padding: 0.04rem;
}
#hot-place-content .hotPlace-price span {
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

