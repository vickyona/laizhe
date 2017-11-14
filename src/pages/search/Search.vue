<template>
	<div>
		<search-header></search-header>
		<search-suggest></search-suggest>
	</div>
</template>

<script>
	import HeaderComponent from './Header';
	import SuggestComponent from './Suggest';
	export default{
		components:{
			"search-header":HeaderComponent,
			"search-suggest":SuggestComponent
		},
		mounted(){
			if(this.$store.getters.shouldGetSearchData){
				this.$store.dispatch('getSearchInfo');
			}
		}
	}
</script>
<style>
html {
  background: #f5f5f5;
}
</style>
