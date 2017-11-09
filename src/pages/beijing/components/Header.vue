<template>
 	<header class="header">
 		<div class="header-left">
			 <i class="iconfont">&#xe705;</i>			 
		 </div>
 		<div class="header-title">
 			输入城市或景点
 		</div>
 		<div class="header-right">
 			搜索
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

</style>

