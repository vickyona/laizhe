<template>
 	<div id="city">
    <div class="header-keyword">
      <input type="text" placeholder="请输入城市名或拼音" class="city-keyword" />
    </div>
    <div class="city-group">
      <div class="city-group-title">您的位置</div>
      <div class="city-group-now">
        <div class="city-light" v-if="positionCity">
          <a href="" class="city-name city-select">{{positionCity}}</a>
        </div> 
      </div>
    </div>
    <!-- 国内的城市 -->
    <div class="city-domestic" id="city_top">
      <div class="city-hot">
          <div class="city-group-title">热门城市</div>
          <div class="city-group-now">
            <div class="city-light" v-for="item in hotCity" 
            :key="item">
              <a href="" class="city-name ">{{item}}</a>
            </div> 
          </div>
      </div>
      <div class="city-hot" v-for="(items, index) in cities" :id="index" :key="index">
          <div class="city-group-title">{{index}}</div>
          <div class="city-center" v-for="item in items" :key="item">
            <a href="" class="city-normal" >{{item}}</a>
          </div>
      </div>
    </div>
   
    <ul class="right-sidebar" id="position" @touchmove="handleTouchmove" @touchstart="handleTouchstart">
      <li v-for="(items, index) in cities" class="city-letter" :key="index">{{index}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      cityList: []
    };
  },
  computed: mapState({
    positionCity(state) {
      return state.city.domestic.positionCity;
    },
    hotCity(state) {
      return state.city.domestic.hotCity;
    },
    cities(state) {
      this.cityList = state.city.domestic.cities;
      return state.city.domestic.cities;
    }
  }),
  methods: {
    handleTouchmove(e) {
      e = event || window.event;
      const touchedCitysNum =
        ((e.changedTouches[0].clientY - 108) / 16).toFixed(0) - 1;
      var arr = [];
      for (let i in this.cityList) {
        arr.push(i);
      }
      const positionElement = document.getElementById(arr[touchedCitysNum]);
      document.documentElement.scrollTop = positionElement.offsetTop - 44;
      e.preventDefault();
    },
    handleTouchstart(e) {
      var liElement = e.target;
      var text = liElement.innerHTML;
      var positionElement = document.getElementById(text);
      if (positionElement) {
        document.documentElement.scrollTop = positionElement.offsetTop - 44;
      }
    }
  }
};
</script>

<style>
.header-keyword {
  margin-top: 0.88rem;
  padding: 0 0.2rem 0.1rem 0.2rem;
  background: #00afc7;
  font-size: 0.26rem;
  color: #9e9e9e;
}
.city-keyword {
  width: 100%;
  height: 0.3rem;
  line-height: 0.3rem;
  padding: 0.16rem 0 0.16rem 0.1rem;
  background: #fff;
  border: 0;
  border-radius: 0.06rem;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.city-position {
  font-size: 0.28rem;
}
.city-group {
  width: 100%;
}
.city-group-title {
  width: 100%;
  box-sizing: border-box;
  line-height: 0.54rem;
  padding: 0 0.3rem;
  color: #616161;
  font-size: 0.26rem;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.city-group-now {
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  padding: 0.04rem 0.5rem 0.26rem 0.2rem;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.city-light {
  box-sizing: border-box;
  float: left;
  width: 33.33%;
  height: 0.6rem;
  line-height: 0.6rem;
  overflow: hidden;
  padding: 0.15rem 0.14rem 0.65rem 0.1rem;
}

.city-name {
  display: block;
  line-height: 30px;
  text-align: center;
  border: 0.02rem solid #c9cccd;
  border-radius: 0.06rem;
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
  line-height: 0.76rem;
  padding: 0 0.2rem;
  font-size: 0.28rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #212121;
  border-bottom: 0.02rem solid #ccc;
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
  width: 0.32rem;
  height: 0.32rem;
  line-height: 0.32rem;
  padding-left: 0.2rem;
  color: #00afc7;
  font-size: 0.24rem;
  text-align: center;
  overflow: hidden;
}
</style>

