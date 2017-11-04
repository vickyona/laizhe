<template>
 	<div id="ch-city">
    <div class="ch-header-keyword">
      <input type="text" placeholder="请输入城市名或拼音" class="ch-city-keyword" />
    </div>
    <div class="ch-city-group">
      <div class="ch-city-group-title">您的位置</div>
      <div class="ch-city-group-now">
        <div class="ch-city-light">
          <a href="" class="ch-city-name ch-city-select">北京</a>
        </div> 
      </div>
    </div>
    <!-- 国内的城市 -->
    <div class="ch-city-domestic">
      <div class="ch-city-hot">
          <div class="ch-city-group-title">热门城市</div>
          <div class="ch-city-group-now">
            <div class="ch-city-light" v-for="item in hotDomCity" 
            :key="item">
              <a href="" class="ch-city-name ">{{item}}</a>
            </div> 
          </div>
      </div>
      <!-- 22222 -->
      <div class="ch-city-hot" >
          <div class="ch-city-group-title">A</div>
          <div class="ch-city-center">
            <a href="" class="ch-city-normal" >啊困的基本萨迪克</a>
          </div>
      </div>
    </div>
    <!-- 国外的城市 -->
    <div class="ch-city-domestic" style="display:none;">
      <div class="ch-city-hot">
          <div class="ch-city-group-title">热门城市</div>
          <div class="ch-city-group-now">
            <div class="ch-city-light" v-for="item in hotAbroadCity" 
            :key="item">
              <a href="" class="ch-city-name ">{{item}}</a>
            </div> 
          </div>
      </div>
      <div class="ch-city-hot">
          <div class="ch-city-group-title">A</div>
          <div class="ch-city-center">
            <a href="" class="ch-city-normal">安倍在哪个组羌族</a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      hotDomCity: ["北京", "西安", "三亚", "丽江", "桂林", "成都", "上海", "西双版纳", "厦门", "长沙", "苏州", "大理", "广州", "杭州", "昆明", "重庆"],
      hotAbroadCity:["普吉岛", "清迈", "香港", "东京", "台北", "澳门", "巴厘岛", "曼谷", "芭提雅", "凯恩斯", "首尔", "新加坡", "济州岛", "迪拜", "沙巴", "苏梅岛"]
    }
  }
};
</script>

<style>
.ch-header-keyword{
  margin-top: .88rem;
  padding: 0 .2rem .1rem .2rem ;
  background: #00afc7;
  font-size: .26rem;
  color: #9e9e9e;
}
.ch-city-keyword{
  width: 100%;
  height: .3rem;
  line-height: .3rem;
  padding: .16rem 0 .16rem .1rem;
  background: #fff;
  border: 0;
  border-radius: .06rem;
  text-align: center;
}
.ch-city-position{
  font-size: .28rem;
}
.ch-city-group-title{
  line-height: .54rem;
  padding-left: .3rem;
  color: #616161;
  font-size: .26rem;
  border-bottom: 1px solid #ccc;
}
.ch-city-group-now{
  width: 100%;
  box-sizing: border-box;
  overflow: hidden; 
  padding: .04rem .5rem .26rem .2rem;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.ch-city-light{
  box-sizing: border-box;
  float: left;
  width: 33.33%;
  height: .6rem;
  line-height: .6rem;
  overflow: hidden;
  padding: .15rem .14rem .65rem .1rem;
}

.ch-city-name{
  display: block;
  line-height: 28px;
  text-align: center;
  border: .02rem solid #c9cccd;
  border-radius: .06rem;
  color: #212121;
  height: .6rem;
  overflow: hidden;
}
.ch-city-select{
  color: #00afc7;
  border-color: #00afc7;
}
.ch-city-normal{
  display: block;
  line-height: .76rem;
  padding-left: .2rem;
  font-size: .28rem;
  color: #212121;
  border-bottom: .02rem solid #ccc;
}
.ch-city-center{
  width: 100%;
  box-sizing: border-box;
  overflow: hidden; 
  background: #fff;
}
</style>

