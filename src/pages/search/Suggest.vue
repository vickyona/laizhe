<template>
	<div id="search-suggest" class="suggest">
		<div class="suggest-list">
			<div class="history-head"></div>
			<div class="history-counter"></div>
		</div>
		<div class="hotlist">
			<div class="hostsearch-head">
				<span class="hotsearch-title">热门搜索</span>
				<span class="hotsearch-refreshoption" @click="handelRefreshClick()">
					<i class="iconfont hotsearch-refreshicon">&#xe790;</i>
					<span class="iconfont hotsearch-refreshtext">换一批</span>
				</span>
			</div>
			<div class="hotsearch-con">
				<div class="hotsearch-group">
					<div class="hotsearch-typecon">
						<div class="hotsearch-typeinner">
							<img src="../../assets/search/hotsearch-typeicon1.png"  alt=""  class="hotsearch-typeicon">
						</div>
					</div>
					<div class="hotsearch-itemcon sight-maxline">
						<div class="hotsearch-iteminner " ref="items">
							<a class="hotsearch-item" v-for="item in hotSearchInfo" :key="item.id">{{item.name}}</a>
						</div>
					</div>
				</div>
				<div class="hotsearch-group">
					<div class="hotsearch-typecon">
						<div class="hotsearch-typeinner">
							<img src="../../assets/search/hotsearch-typeicon2.png"  alt=""  class="hotsearch-typeicon">
						</div>
					</div>
					<div class="hotsearch-itemcon region-maxline">
						<div class="hotsearch-iteminner " ref="cityItems">
							<a class="hotsearch-cityitem" v-for="item in hotSearchCityInfo" :key="item.id">{{item.name}}</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="search-nearbycon">
			<div class="search-nearbybtn">搜索身边的景点</div>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return {
			itemTop:[0,1.8,3.6,5.4,6.3 ],
			cityItemTop:[0,0.9,1.8,2.7,3.6]
		}
	},
	methods:{
		handelRefreshClick:function(){
			var itemTopNum = this.$data.itemTop[Math.floor(Math.random()*this.$data.itemTop.length)];
			var cityItemTopNum = this.$data.cityItemTop[Math.floor(Math.random()*this.$data.cityItemTop.length)];
			this.$refs.items.style.top = -itemTopNum + "rem";
			this.$refs.cityItems.style.top = -cityItemTopNum + 'rem';
		}
	},
	computed:{
		hotSearchInfo(){
			return this.$store.state.search.hotSearchInfo;
		},
		hotSearchCityInfo(){
			return this.$store.state.search.hotSearchCityInfo;
		}
	}
    
};
</script>
<style>
.hostsearch-head{
	height: .64rem;
	line-height: .64rem;
	padding: 0 .2rem;
	background-color: #f0f5f6;
}

.hotsearch-title{
	font-size: .26rem;
    color: #888;
}

.hotsearch-refreshoption {
    float: right;
    font-size: .24rem;
    color: #00afc7;
    line-height: .62rem;
}

.hotsearch-group{
	position: relative;
	padding-left: .74rem;
	background-color: #fff;
	border-top: 1px solid #dce5e7;
}
.hotsearch-typecon {
    position: absolute;
    left: 0;
    top: 0;
    width: .74rem;
    height: 100%;
    overflow: hidden;
    line-height: 100%;
    text-align: center;
}
.hotsearch-typeinner {
    position: absolute;
    width: .72rem;
    height: 70%;
    top: 15%;
    border-right: 1px solid #dce5e7;
}
.hotsearch-typeicon{
	width: .3rem;
	height: .3rem;
	position: relative;
	top: 50%;
	margin-top: -.15rem;
}
.hotsearch-itemcon{
	overflow: hidden;
    position: relative;
}
.sight-maxline {
    max-height: 1.8rem;
}
.region-maxline{
    max-height: .9rem;
}
.hotsearch-iteminner {
    overflow: hidden;
    position: relative;
    left: 0;
    top: 0;
}
.hotsearch-item{
	height: .36rem;
    max-width: 2.89rem;
    line-height: .36rem;
    text-align: center;
    display: inline-block;
    padding-left: .3rem;
    padding-right: .3rem;
    border-right: 1px dashed #c9cccd;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: .25rem;
    margin-bottom: .25rem;
}
.hotsearch-cityitem{
    height: .36rem;
    width: 24.5%;
    line-height: .36rem;
    text-align: center;
    display: inline-block;
    border-right: 1px dashed #c9cccd;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: .25rem;
    margin-bottom: .25rem;
}
.search-nearbycon{
	padding: .2rem;
	background-color: #fff;
	border: 1px solid #dde1e3;
}
.search-nearbybtn{
	height: .72rem;
    line-height: .72rem;
    background-color: #fff;
    text-align: center;
    font-size: .26rem;
    color: #333;
    border: 1px solid #dde1e3;
    border-radius: 2px;
}
</style>