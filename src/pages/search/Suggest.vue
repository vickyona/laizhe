<template>
	<div id="blank-suggesst" class="suggest">
		<div class="suggest-list">
			<div class="history-head"></div>
			<div class="history-counter"></div>
		</div>
		<div class="hotlist">
			<div class="hostsearch-head">
				<span class="hotsearch-title">热门搜索</span>
				<span class="hotsearch-refreshoption">
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
						<div class="hotsearch-iteminner " >
							<a class="hotsearch-item" v-for="item in hotSearchItem">{{item}}</a>
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
						<div class="hotsearch-iteminner " >
							<a class="hotsearch-cityitem" v-for="item in hotSearchCityItem">{{item}}</a>
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
			hotSearchItem:[
				"宋城千古情","故宫","香山公园","天山狐仙","张家界大峡谷","颐和园","鼓浪屿往返渡轮","鼓浪屿","上海迪士尼乐园","北京欢乐谷","婺源","八达岭长城","恭王府","雍和宫","天坛","西岭雪山滑雪场","古北水镇","玉龙雪山","慈城古镇","华山","乌镇西栅","都江堰","圆明园","泰山","成都欢乐谷","武汉欢乐谷","泸沽湖","常州环球动漫嬉戏谷","深圳欢乐谷","凤凰山海港乐园"
			],
			hotSearchCityItem:[
				"广州","三亚","上海","苏州","厦门","重庆","成都","天津","西安","南京","深圳","宁波","昆明","大连","桂林","清远","杭州","惠州","福州","武汉"
			]
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