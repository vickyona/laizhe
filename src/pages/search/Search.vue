<template>
	<div>
		<search-header></search-header>
		<blank-suggest></blank-suggest>
	</div>
</template>

<script>
	import HeaderComponent from './Header';
	import SuggestComponent from './Suggest';
	export default{
		components:{
			"search-header":HeaderComponent,
			"blank-suggest":SuggestComponent
		}
	}
</script>
<style>
html {
  background: #f5f5f5;
}
</style>

