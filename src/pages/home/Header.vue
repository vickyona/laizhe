<template>
 	<header class="header">
 		<div class="header-left">
			 <i class="iconfont header-back">&#xe679;</i>			 
		 </div>
 		<div class="header-title">
			 <i class="iconfont">&#xe65c;</i>
 			输入城市/景点/游玩主题
 		</div>
 		<div class="header-right">
 			上海
 		</div>
 	</header>
</template>

<script>
export default {};
</script>

<style>
@font-face {
  font-family: "iconfont";
  src: url(../../assets/iconfont/iconfont.eot);
  src: url(../../assets/iconfont/iconfont.eot#iefix) format("embedded-opentype"),
    url(../../assets/iconfont/iconfont.woff) format("woff"),
    url(../../assets/iconfont/iconfont.ttf) format("truetype"),
    url(../../assets/iconfont/iconfont.svg) format("svg");
}
.iconfont {
  color: #ccc;
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.header {
  position: relative;
  height: 0.88rem;
  background: #00bcd4;
}
.header-back {
  color: #fff;
}
.header-left {
  float: left;
  width: 0.4rem;
  padding: 0 0.2rem;
  line-height: 0.88rem;
  font-size: 0.4rem;
  color: #fff;
}
.header-title {
  position: absolute;
  left: 0.8rem;
  right: 1.28rem;
  top: 0.14rem;
  line-height: 0.6rem;
  background: #fff;
  border-radius: 0.06rem;
  text-indent: 0.4rem;
  color: #ccc;
}
.header-right {
  float: right;
  width: 1.28rem;
  line-height: 0.88rem;
  text-align: center;
  color: #fff;
}
.header-right::after {
  box-sizing: border-box;
  content: "";
  position: absolute;
  top: 0.4rem;
  right: 0.1rem;
  width: 0.2rem;
  height: 0.2rem;
  border: 0.1rem solid transparent;
  border-top: 0.1rem solid #fff;
}
</style>

