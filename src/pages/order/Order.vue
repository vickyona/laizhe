<template>
	<div id="Order">
		<order-Header></order-Header>
		<order-form></order-form>
		<order-Submit></order-Submit>
	</div>
</template>

<script>
	import Header from "./Header.vue";
	import OrderForm from "./OrderForm.vue";
	import Submit from "./Submit.vue";
	export default{
		components:{
			"order-Header":Header,
			"order-form":OrderForm,
			"order-Submit":Submit,
		},
	}
</script>

<style>
	html,body {
	  	background: #f5f5f5;
	  	height:100%;
	}
	body,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,figure,form,fieldset,legend,input,textarea,button,p,blockquote,th,td,pre,xmp{ box-sizing:border-box; }
	#Order{
		height:100%;
	  	display:flex;
	  	flex-direction: column;
	  	justify-content: space-between;
	}
</style>