<template>
 	<header class="city-header">
 		<div class="city-header-left">
			<i class="iconfont">&#xe705;</i>			 
		</div>
 		<div class="city-header-right">
      <h1 class="city-header-title">
        <span class="header-city" :class="a" v-on:touchstart="internalClick">国内</span>
        <span class="header-city" :class="b" v-on:touchstart="foreignClick">国外</span>
      </h1>
    </div>
 	</header>
</template>

<script>
import bus from "./bus.js";
export default {
  data(){
    return {
      a:"city-clickStyle",
      b:""
    }
  },
  methods: {
    internalClick: function() {
      this.a="city-clickStyle";
      this.b = "";
      bus.$emit("change", this.a)

    },
    foreignClick: function() {
      this.b="city-clickStyle";
      this.a = "";
      bus.$emit("change", this.a)
    },
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
.city-header-left{
  display: inline-block;
  width: .4rem;
  line-height: 0.88rem;
  padding: 0 .22rem;
  color: #fff;
}
.city-header-right{
  flex: 1;
  line-height: .88rem;
  text-align: center
}
.city-header-title{
  display: inline-block;
  height: .56rem;
  line-height: .56rem;
  text-align: center;
  margin-left: -.42rem;
  margin-top: .15rem;
  border: .02rem solid #fff;
  border-radius: .06rem;
}
.header-city{
  display: inline-block;
  width: 2rem;
  overflow: hidden;
  font-size: 100%;
  color: #fff;
}
.city-clickStyle{
  background: #fff;
  color: #00afc7;
}
</style>

