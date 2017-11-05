<template>
	<div id="content">
		<order-Title></order-Title>
		<order-customer></order-customer>
	</div>
</template>

<script>
	import Title from "./Title.vue";
	import Customer from "./Customer.vue";
	export default{
		components:{
			"order-Title":Title,
			"order-customer":Customer
		}
	}
</script>

<style>
	#content{flex:1;overflow: auto;}
</style>