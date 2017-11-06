<template>
 	<header class="header">
 		<div class="header-left">
			 <i class="iconfont">&#xe705;</i>			 
		 </div>
 		<a class="header-title" href="#/search">
			 <i class="iconfont">&#xe6ae;</i>
 			输入城市/景点/游玩主题
 		</a>
 		<div class="header-right">
 			北京
 		</div>
 	</header>
</template>

<script>
export default {};
</script>

<style>
.header {
  position: relative;
  height: 0.88rem;
  background: #00bcd4;
  overflow: hidden;
}
.header-back {
  color: #fff;
}
.header-left {
  float: left;
  width: 0.4rem;
  height: .88rem;
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
  width: 1.08rem;
  height: .88rem;
  overflow: hidden;
  padding-right: 0.2rem;
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

