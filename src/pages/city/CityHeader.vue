<template>
 	<header class="ch-header">
 		<div class="ch-header-left">
			<i class="iconfont">&#xe705;</i>			 
		</div>
 		<div class="ch-header-right">
      <h1 class="ch-header-title">
        <span class="ch-header-city">国内</span>
        <span class="ch-header-city">国外</span>
      </h1>
    </div>
 	</header>
</template>

<script>
export default {};
</script>

<style>
.ch-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.88rem;
  width: 100%;
  background: #00afc7;
  display: flex;
}
.ch-header-left{
  display: inline-block;
  width: .4rem;
  line-height: 0.88rem;
  padding: 0 .22rem;
  color: #fff;
}
.ch-header-right{
  flex: 1;
  line-height: .88rem;
  text-align: center
}
.ch-header-title{
  display: inline-block;
  height: .56rem;
  line-height: .56rem;
  text-align: center;
  margin-left: -.42rem;
  margin-top: .15rem;
  border: .02rem solid #fff;
  border-radius: .06rem;
}
.ch-header-city{
  display: inline-block;
  width: 2rem;
  overflow: hidden;
  font-size: 100%;
  color: #fff;
}
</style>

