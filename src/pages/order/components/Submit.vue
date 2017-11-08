<template>
	<header class="footer">
 		<div class="price">
			<em class="title">产品价格￥</em>
			<span class="number">{{PriceNum}}</span>			 
		 </div>
 		<div class="submit">
 			提交订单
 		</div>
 	</header>
</template>

<script>
	export default{
		computed: {
			PriceNum() {
				if (!this.$store.state.order.totalPrice){
					return 40
				}else{
					return this.$store.state.order.totalPrice
				}
				
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
	.footer .title{
		padding-bottom: .25rem; 
	}
	.footer .number{
		display:block;
		font-size:.48rem;
		text-indent: 0rem;
		font-weight: bold;
		line-height: 1rem;
		overflow:hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
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