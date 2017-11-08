<template>
 	<header class="city-header">
    <router-link to="/">
      <div class="city-header-left">
        <i class="iconfont">&#xe705;</i>			 
      </div>
    </router-link>
 		<div class="city-header-right">
      <h1 class="city-header-title">
        <p class="header-city" :class="{'city-clickStyle': isActive}"  v-on:touchstart="internalClick">国内</p>
        <p class="header-city" :class="{'city-clickStyle': !isActive}" v-on:touchstart="foreignClick">国外</p>
      </h1>
    </div>
 	</header>
</template>

<script>
import bus from "../bus.js";
export default {
  data() {
    return {
      isActive: true
    };
  },
  methods: {
    internalClick: function(e) {
      this.$store.commit("changeShow", "domestic");
      this.isActive = true;
    },
    foreignClick: function() {
      this.$store.commit("changeShow", "foreign");
      this.isActive = false;
    }
  }
};
</script>

<style>
.city-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.88rem;
  width: 100%;
  background: #00afc7;
  display: flex;
}
.city-header-left {
  display: inline-block;
  width: 0.4rem;
  line-height: 0.88rem;
  padding: 0 0.22rem;
  color: #fff;
}
.city-header-right {
  flex: 1;
  line-height: 0.88rem;
  text-align: center;
}
.city-header-title {
  display: inline-block;
  height: 0.56rem;
  line-height: 0.56rem;
  text-align: center;
  margin-top: 0.15rem;
  font-size: 0;
  border: 0.02rem solid #fff;
  border-radius: 0.06rem;
}
.header-city {
  display: inline-block;
  width: 2rem;
  height: 0.56rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #fff;
  font-size: 0.28rem;
}
.city-clickStyle {
  background: #fff;
  color: #00afc7;
}
</style>

