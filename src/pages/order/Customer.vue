<template>
	<div id="customer">
		<div class="num">
			<div class="content">
				<p class="text">购买数量</p>
				<p class="warm" v-if="show">最多买<span>{{num}}</span>张</p>
			</div>
			<div class="number">
				<span class="reduce" @click="handleReduce">
					<span></span>
				</span>
				<input type="text" value=1 ref="inputbox" @input="numChange" @blur="InputBlur">
				<span class="add" @click="handleAdd">
					<span class="line"></span>
					<span class="vertical-line"></span>
				</span>
			</div>
		</div>
		<div class="customer-inf" v-for="item in listNum">
			<label for="">
				<p>游客<span>{{item}}</span></p>
				<div class="customer-name">
					<input type="text" placeholder="游客姓名">
					<i class="iconfont">&#xe612;</i>
				</div>
			</label>
			<label for="">
				<p>手机号</p>
				<div>
					<span class="area-code">+86 <em>|</em></span>
					<input type="text" placeholder="请填写手机号">
				</div>
			</label>
			<label for="">
				<p>身份证</p>
				<div>
					<input type="text" placeholder="请填写正确的身份证号码">
				</div>
			</label>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				num:5,
				show:true,
				listNum:[1]
			}
		},
		methods:{
			handleAdd:function(){
				if(this.$refs.inputbox.value != 5){
					this.$refs.inputbox.value = parseInt(this.$refs.inputbox.value) + 1;
					this.listNum.push(parseInt(this.$refs.inputbox.value));
				}
			},
			handleReduce:function(){
				if(this.$refs.inputbox.value != 1){
					this.$refs.inputbox.value = parseInt(this.$refs.inputbox.value) - 1;
					this.listNum.pop();
				}
			},
			numChange:function(){
				var inputNum = this.$refs.inputbox.value;
				if(inputNum != ''){
					if(!Number(inputNum)){
						this.$refs.inputbox.value = 1;
						this.listNum = [1];

					}else if(parseInt(inputNum) == 0){
						this.$refs.inputbox.value = 1;
						this.listNum = [1];

					}else if(parseInt(inputNum) > 5){
						this.$refs.inputbox.value = 5;
						this.listNum = [1,2,3,4,5];

					}else{
						var ls = [];
						for(var i = 1 ; i < parseInt(inputNum) + 1 ; i++){
							ls.push(i);
						}
						this.listNum = ls;
					}
				}
				
			},
			InputBlur:function(){
				if(this.$refs.inputbox.value == ''){
					this.$refs.inputbox.value = 1;
					this.listNum = [1];
				}

			}
		}
	}
</script>

<style>
	#customer .num{
		margin: .2rem 0;
		background: #fff;
		padding: .3rem .2rem .3rem .2rem;
		display: flex;
		justify-content: space-between;
	}
	#customer .num .content{
		display: flex;
	}
	#customer .num .text{
		color: #616161;
	    font-size: .3rem;
	    line-height: .5rem;
	    padding-right: .15rem
	}
	#customer .num .warm{
		color: #ccc;
	    font-size: .28rem;
	    line-height: .5rem;
	}
	#customer .num .number{
		border: .02rem solid #c7ced4;
		width:1.96rem;
		display: flex;
		justify-content: space-between;
	}
	#customer .num .number input{
		border:0;
		width: .6rem;
	    height: .6rem;
	    font: normal .28rem/.6rem arial;
	    text-align: center;
	    padding: 0 .06rem;
	}
	#customer .num .number .add,#customer .num .number .reduce{
		height:.6rem;
		background: #00afc7;
		width: .56rem;
	    height: .56rem;
	    margin: .02rem;
	    position: relative;
	}
	#customer .num .number .reduce span,#customer .num .number .add .line{
		width: .3rem;
    	height: .06rem;
    	background: #fff;
    	display: block;
    	position: absolute;
    	top: .26rem;
    	left: .12rem;
	}
	#customer .num .number .add .vertical-line{
		top: .15rem;
	    left: .24rem;
	    width: .06rem;
	    height: .28rem;
	    display: block;
	    position: absolute;
	    background: #fff;
	}
	.customer-inf{
		background: #fff;
		margin-bottom: .2rem;
	}
	.customer-inf label{
		display: flex;
		justify-content: space-between;
		overflow: hidden;
	    min-height: .5rem;
	    padding: .24rem;
	    border:.02rem solid #f5f5f5;
	}
	.customer-inf label p{
		width:1.5rem;
		color: #616161;
	    font-size: .3rem;
	    line-height: .5rem;
	}
	.customer-inf label div{
		width:5.32rem;
	}
	.customer-inf label div input{
		width: 4rem;
	    height: .40rem;
	    padding: .1rem 0;
	    border: 0;
	    font: normal .32rem/.38rem Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
	    color: #212121;
	}
	.customer-inf label .customer-name{
		display: flex;
		justify-content: space-between;
	}
	.customer-inf label i{
		font-size:.4rem;
	}
	.customer-inf label div .area-code{
		border: .02rem solid #ccc;
	    color: #888;
	    font-size: .28rem;
	    line-height: .7rem;
	    overflow: hidden;
	    white-space: nowrap;
    	text-overflow: ellipsis;
    	padding: 0.1rem 0.06rem;
    	min-width: .4rem;
    	max-width: 1rem;
	}
	.customer-inf label div .area-code em{
		 font-size: .18rem;
		 line-height: .7rem;
		 font-style: normal;
	}
	
</style>