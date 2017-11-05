<template>
	<header class="footer">
 		<div class="price">
			<em>产品价格￥</em>
			<span>{{price}}</span>			 
		 </div>
 		<div class="submit">
 			提交订单
 		</div>
 	</header>
</template>

<script>
	export default{
		data(){
			return {
				price:40
			}
		}
	}
</script>

<style>
	.footer{
		height:1rem;
		width:100%;
		border-top:0.01rem solid #ccc;
		display:flex;
		justify-content: space-between;
		background:#fff;
	}
	.footer .price{
		font-size: .24rem;
	    text-indent: .2rem;
	    width:50%;
	    color:#ff8300;
	    display:flex;
	    align-items: flex-end;
	    font-style:normal;
	}
	.footer .price em{
		padding-bottom: .25rem; 
	}
	.footer .price span{
		display:block;
		font-size:.48rem;
		text-indent: 0rem;
		font-weight: bold;
		line-height: 1rem;
	}
	.footer .submit{
		background: #ff9800;
		color:#fff;
		font-size:.36rem;
		width:50%;
		text-align: center;
		line-height: 1rem;
		font-weight: bold;
	}
</style>