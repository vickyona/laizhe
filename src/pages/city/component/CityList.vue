<template>
  <div>
   	<domestic-list v-if="show == 'domestic'"></domestic-list>
    <foreign-list v-else></foreign-list>
  </div>
</template>

<script>
import DomesticComponent from "./CityList/Domestic";
import ForeignComponent from "./CityList/Foreign";

export default {
  computed: {
      show() {
        if( this.$store.state.city.changeshow == "" ){
          return 'domestic';
        }else{
          return this.$store.state.city.changeshow
        }
      }
  },
  components: {
    "domestic-list": DomesticComponent,
    "foreign-list": ForeignComponent,
  },
};
</script>

<style>

</style>

