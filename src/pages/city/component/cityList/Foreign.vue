<template>
 	<div id="city">
    <div class="header-keyword">
      <input type="text" placeholder="请输入城市名或拼音请输入城市名或拼音请输入城市名或拼音请输入城市名或拼音请输入城市名或拼音" class="city-keyword" />
    </div>
    <div class="city-group">
      <div class="city-group-title">您的位置</div>
      <div class="city-group-now">
        <div class="city-light" v-if="positionCity">
          <a href="" class="city-name city-select">{{positionCity}}</a>
        </div> 
      </div>
    </div>
    
    <!-- 国外的城市 -->
    <div class="city-domestic">
      <div class="city-hot">
          <div class="city-group-title">热门城市</div>
          <div class="city-group-now">
            <div class="city-light" v-for="item in hotCity" 
            :key="item">
              <a href="" class="city-name ">{{item}}</a>
            </div> 
          </div>
      </div>
      <div class="city-hot" v-for="(items, index) in cities" v-bind:id="index">
          <div class="city-group-title">{{index}}</div>
          <div class="city-center" v-for="item in items">
            <a href="" class="city-normal">{{item}}</a>
          </div>
      </div>
    </div>
   
    <ul class="right-sidebar" id="position">
      <li v-for="(items, index) in cities" class="city-letter" :key="index" @touchstart="handleTouchstart">{{index}}</li>
    </ul>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
   computed: mapState({
    positionCity(state) {
      return state.city.foreign.positionCity;
    },
    hotCity(state) {
      return state.city.foreign.hotCity;
    },
    cities(state) {
      return state.city.foreign.cities;
    }
  }),
  methods: {
    handleTouchstart: function(e) {
      var liElement = e.target;
      var text = liElement.innerHTML;
      var positionElement = document.getElementById(text);
      
      if(positionElement){
        document.documentElement.scrollTop = positionElement.offsetTop - 44;
      }
    }
  }
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

