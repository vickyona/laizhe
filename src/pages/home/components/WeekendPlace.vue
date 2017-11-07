<template>
    <div>
        <h1 class="week-title">周末去哪</h1>
        <div>
          <div class="mp-product-item" v-for="item in weekendPlaceInfo" :key="item.id">
            <a  :title="item.title" class="mp-fulllink">
              <div class="product-imgcontainer image-ready">
                <img :src="item.imgUrl" :alt="item.name" class="title-image">
              </div>
              <div class="mp-product-info">
                <p class="product-name">{{item.name}}</p>
                <p class="product-desc">{{item.slogan}}</p>
              </div>
            </a>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["weekendPlaceInfo"]
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
.title-image {
  width: 100%;
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

