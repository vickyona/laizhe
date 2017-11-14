<template>
	<header class="header">
		<router-link to="/detail">
			<div class="header-left">
				<i class="iconfont">&#xe705;</i>			 
			</div>
		</router-link>
 		<div class="header-title">
			订单填写
 		</div>
 		<div class="header-right">
 			登录
 		</div>
 	</header>
</template>

<script>
export default {};
</script>

<style>
.header {
  height: 0.88rem;
  background: #00bcd4;
  display: flex;
  justify-content: space-between;
}
.header-left {
  width: 0.4rem;
  padding: 0 0.2rem;
  line-height: 0.88rem;
  font-size: 0.4rem;
  color: #fff;
}
.header-title {
  line-height: 0.88rem;
  border-radius: 0.06rem;
  font-size: 0.32rem;
  color: #fff;
}
.header-right {
  width: 1rem;
  line-height: 0.88rem;
  text-align: center;
  color: #fff;
}
</style>