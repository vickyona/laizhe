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
.header-keyword {
  margin-top: .88rem;
  padding: 0 .2rem .1rem .2rem ;
  background: #00afc7;
  font-size: .26rem;
  color: #9e9e9e;
}
.city-keyword {
  width: 100%;
  height: .3rem;
  line-height: .3rem;
  padding: .16rem 0 .16rem .1rem;
  background: #fff;
  border: 0;
  border-radius: .06rem;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.city-position {
  font-size: .28rem;
}
.city-group {
  width: 100%;
}
.city-group-title {
  width: 100%;
  box-sizing: border-box;
  line-height: .54rem;
  padding: 0 .3rem;
  color: #616161;
  font-size: .26rem;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.city-group-now {
  width: 100%;
  box-sizing: border-box;
  overflow: hidden; 
  padding: .04rem .5rem .26rem .2rem;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.city-light {
  box-sizing: border-box;
  float: left;
  width: 33.33%;
  height: .6rem;
  line-height: .6rem;
  overflow: hidden;
  padding: .15rem .14rem .65rem .1rem;
}

.city-name {
  display: block;
  line-height: 30px;
  text-align: center;
  border: .02rem solid #c9cccd;
  border-radius: .06rem;
  color: #212121;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.city-select {
  color: #00afc7;
  border-color: #00afc7;
}
.city-normal {
  display: block;
  width: 100%;
  box-sizing: border-box;
  line-height: .76rem;
  padding: 0 .2rem;
  font-size: .28rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #212121;
  border-bottom: .02rem solid #ccc;
}
.city-center {
  width: 100%;
  box-sizing: border-box;
  overflow: hidden; 
  background: #fff;
}
.right-sidebar {
  position: fixed;
  top: 108px;
  right: 0rem;
}
.city-letter {
  width: .32rem;
  height: .32rem;
  line-height: .32rem;
  padding-left: .2rem;
  color: #00afc7;
  font-size: .24rem;
  text-align: center;
  overflow: hidden;
}
</style>

