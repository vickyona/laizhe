<template>
	<div>
 		<city-header/>
 	</div>
</template>

<script>
import HeaderComponent from "./Header";
export default {
  components: {
    "city-header": HeaderComponent,
  }
};
</script>

<style>
html {
  background: #f5f5f5;
}
</style>
