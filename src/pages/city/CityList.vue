<template>
 	<div id="city">
    <div class="header-keyword">
      <input type="text" placeholder="请输入城市名或拼音" class="city-keyword" />
    </div>
    <div class="city-group">
      <div class="city-group-title">您的位置</div>
      <div class="city-group-now">
        <div class="city-light">
          <a href="" class="city-name city-select">北京</a>
        </div> 
      </div>
    </div>
    <!-- 国内的城市 -->
    <div class="city-domestic" v-if="btext" id="city_top">
      <div class="city-hot">
          <div class="city-group-title">热门城市</div>
          <div class="city-group-now">
            <div class="city-light" v-for="item in hotDomCity" 
            :key="item">
              <a href="" class="city-name ">{{item}}</a>
            </div> 
          </div>
      </div>
      <!-- 22222 -->
      <div class="city-hot" v-for="(items, index) in internalCity" v-bind:id="index">
          <div class="city-group-title">{{index}}</div>
          <div class="city-center" v-for="item in items">
            <a href="" class="city-normal" >{{item}}</a>
          </div>
      </div>
    </div>
    <!-- 国外的城市 -->
    <div class="city-domestic" v-else>
      <div class="city-hot">
          <div class="city-group-title">热门城市</div>
          <div class="city-group-now">
            <div class="city-light" v-for="item in hotAbroadCity" 
            :key="item">
              <a href="" class="city-name ">{{item}}</a>
            </div> 
          </div>
      </div>
      <div class="city-hot" v-for="(items, index) in foreignCity" v-bind:id="index">
          <div class="city-group-title">{{index}}</div>
          <div class="city-center" v-for="item in items">
            <a href="" class="city-normal">{{item}}</a>
          </div>
      </div>
    </div>
    <ul class="right-sidebar" id="position" v-if="btext">
      <li v-for="(items, index) in internalCity" class="city-letter" :key="index" @touchstart="handleTouchstart" @touchmove="handleTouchstart">{{index}}</li>
    </ul>
    <ul class="right-sidebar" id="position" v-else>
      <li v-for="(items, index) in foreignCity" class="city-letter" :key="index" @touchstart="handleTouchstart">{{index}}</li>
    </ul>
  </div>
</template>

<script>
import bus from "./bus.js";
export default {
  props: ["internalCity", "foreignCity"],
  data() {
    return {
      hotDomCity: ["北京", "西安", "三亚", "丽江", "桂林", "成都", "上海", "西双版纳", "厦门", "长沙", "苏州", "大理", "广州", "杭州", "昆明", "重庆"],
      hotAbroadCity:["普吉岛", "清迈", "香港", "东京", "台北", "澳门", "巴厘岛", "曼谷", "芭提雅", "凯恩斯", "首尔", "新加坡", "济州岛", "迪拜", "沙巴", "苏梅岛"],
      btext:true
    }
  },
  created:function() {
     bus.$on("change",(message)=>{
      if( message == "" ){
        this.btext = false;
        document.documentElement.scrollTop="0px";
      }else{
        this.btext = true;
      }
    })
  },
  methods: {
    handleTouchstart: function(e) {
      var liElement = e.target;
      var text = liElement.innerHTML;
      var positionElement = document.getElementById(text);
      
      if( positionElement ){
        document.documentElement.scrollTop = positionElement.offsetTop - 44;
      }
      
    }
  }
};
</script>

<style>
.header-keyword{
  margin-top: .88rem;
  padding: 0 .2rem .1rem .2rem ;
  background: #00afc7;
  font-size: .26rem;
  color: #9e9e9e;
}
.city-keyword{
  width: 100%;
  height: .3rem;
  line-height: .3rem;
  padding: .16rem 0 .16rem .1rem;
  background: #fff;
  border: 0;
  border-radius: .06rem;
  text-align: center;
}
.city-position{
  font-size: .28rem;
}
.city-group-title{
  line-height: .54rem;
  padding-left: .3rem;
  color: #616161;
  font-size: .26rem;
  border-bottom: 1px solid #ccc;
}
.city-group-now{
  width: 100%;
  box-sizing: border-box;
  overflow: hidden; 
  padding: .04rem .5rem .26rem .2rem;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.city-light{
  box-sizing: border-box;
  float: left;
  width: 33.33%;
  height: .6rem;
  line-height: .6rem;
  overflow: hidden;
  padding: .15rem .14rem .65rem .1rem;
}

.city-name{
  display: block;
  line-height: 28px;
  text-align: center;
  border: .02rem solid #c9cccd;
  border-radius: .06rem;
  color: #212121;
  height: .6rem;
  overflow: hidden;
}
.city-select{
  color: #00afc7;
  border-color: #00afc7;
}
.city-normal{
  display: block;
  line-height: .76rem;
  padding-left: .2rem;
  font-size: .28rem;
  color: #212121;
  border-bottom: .02rem solid #ccc;
}
.city-center{
  width: 100%;
  box-sizing: border-box;
  overflow: hidden; 
  background: #fff;
}
.right-sidebar{
  position: fixed;
  top: 108px;
  right: 0rem;
}
.city-letter{
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

