<template>
	<div id="title">
		<div class="name">
			<h3>{{title}}</h3>
			<div class="tag">
				<p>
					<img src="../../assets/order/time.png" alt="">{{time}}
				</p>
				<ul v-for="item in info" :key="item"> 
					<li><img src="../../assets/order/02.png" alt="">{{item}}</li>
				</ul>
			</div>
		</div>
		<div class="price">
			<p><span>￥<em>{{price}} </em></span>/张</p>
			<a href="##">预订须知</a>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				title:"【上午场】故宫成人票凭身份证入园",
				price:40,
				time:"2017-11-11",
				info:["条件退"]
			}
		}
	}
</script>

<style>
	#title{
		min-height:1.1rem;
		background:#fff;
		padding: .2rem .2rem .1rem;
		display: flex;
		justify-content: space-between;
	}
	#title .name h3{
		color: #212121;
	    font-size: .32rem;
	    line-height: .44rem;
	    margin-bottom: .04rem;
	}
	#title .name .tag p,#title .name .tag ul li{
		line-height: .44rem;
	    margin-right: .2rem;
	    color: #616161;
	    font-size: .24rem;
	}
	#title .name .tag p img,#title .name .tag ul li img{
		width: .24rem;
	    height: .24rem;
	    margin-right: .08rem;
	}
	#title .name .tag{
		display: flex;
		justify-content: flex-start;
	}
	#title .price{
		width: 1.8rem;
    	text-align: right;
	}
	#title .price p{
		height: .44rem;
	    line-height: .44rem;
	    color: #9e9e9e;
	    font-size: .24rem;
	}
	#title .price p span{
		color:#ff8300;
	}
	#title .price p span em{
		font-style: normal;
    	font: .4rem Tahoma,Helvetica,sans-serif;
	}
	#title .price a{
		line-height: .32rem;
	    color: #00bcd4;
	    font-size: .28rem;
	    margin-top:.12rem;
	    display: block;
	}
</style>