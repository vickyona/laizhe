<template>
	<div class="ticket-prddetail-group">
		<h3 class="ticket-prddetail-title">购票须知</h3>
		<div class="ticket-ticketcontent border-top">
			<div class="ticket-ticketcontent-item">
				<p class="ticket-ticketcontent-title">
					<img class="ticket-ticketcontent-titleicon" src="http://img1.qunarzz.com/piao/fusion/1703/1b/b4ae0bf46adb9602.png" >
					预定说明
				</p>
				<p class="ticket-ticketcontent-line">
					<span class="ticket-ticketcontent-keyword">有效期：</span>
					游玩日期当天有效
				</p>
				<p class="ticket-ticketcontent-line">
					<span class="ticket-ticketcontent-keyword">提前预定时间：</span>
					预定后立即出票
				</p>
			</div>
			<div class="ticket-ticketcontent-item">
				<p class="ticket-ticketcontent-title">
					<img class="ticket-ticketcontent-titleicon" src="http://img1.qunarzz.com/piao/fusion/1703/89/dc69c8cb83b92502.png" >
					入园须知
				</p>
				<p class="ticket-ticketcontent-notice">需提前换票入园</p>
				<p class="ticket-ticketcontent-line">
					<span class="ticket-ticketcontent-keyword">入园方式</span>
				</p>
				<p class="ticket-ticketcontent-sepline">
					<span class="ticket-ticketcontent-linetag">
						<img class="ticket-ticketcontent-innericon" src="http://img1.qunarzz.com/piao/fusion/1703/4f/60b1629ae5d22702.png">
					</span>
					凭去哪儿发送的电子票到景区售票处进行换票
				</p>
				<p class="ticket-ticketcontent-sepline">
					<span class="ticket-ticketcontent-linetag">
						<img class="ticket-ticketcontent-innericon" src="http://img1.qunarzz.com/piao/fusion/1703/e2/8f4c1d0b353c9402.png">
					</span>
					在北京市房山区十渡镇十渡自然风景区停车场旁凭票入园			
				</p>
				<p class="ticket-ticketcontent-line">
					<span class="ticket-ticketcontent-keyword">景区开放时间</span>
				</p>
				<p class="ticket-ticketcontent-line">全天开放</p>
			</div>
			<div class="ticket-ticketcontent-item">
				<p class="ticket-ticketcontent-title">
					<img class="ticket-ticketcontent-titleicon" src="http://img1.qunarzz.com/piao/fusion/1703/19/c2df078ae9e10802.png" >
					退款说明
				</p>
				<p class="ticket-ticketcontent-sepline">
					<span class="ticket-ticketcontent-linetag">
						<img class="ticket-ticketcontent-innericon" src="http://img1.qunarzz.com/piao/fusion/1703/84/ca17a90b690b4b02.png">
					</span>
					随心退：90天内支持随时退款，经核实如未取票，可免费取消				
				</p>
				<p class="ticket-ticketcontent-sepline">
					<span class="ticket-ticketcontent-linetag">
						<img class="ticket-ticketcontent-innericon" src="http://img1.qunarzz.com/piao/fusion/1703/51/39b07e031986102.png">
					</span>
					极速处理：去哪儿网承诺，提交申请后一个工作日内完成退款申请的审核			
				</p>
			</div>
			<div class="ticket-ticketcontent-item">
				<p class="ticket-ticketcontent-title">
					<img class="ticket-ticketcontent-titleicon" src="http://img1.qunarzz.com/piao/fusion/1703/30/7704a63ac2cedf02.png" >
					费用说明
				</p>
				<p class="ticket-ticketcontent-line">十渡聚龙湾玻璃栈道套票1张（含大门票）</p>
			</div>
			<div class="ticket-ticketcontent-item" v-show = "isdisplay">
				<p class="ticket-ticketcontent-title">
					<img class="ticket-ticketcontent-titleicon" src="http://img1.qunarzz.com/piao/fusion/1703/be/e0e62095776dc802.png" >
					使用说明
				</p>
				<p class="ticket-ticketcontent-line">
					营业时间：8:00-17：00</br>
					（1）为保证取票、入园顺利，预订时请务必填写真手机号码等信息。</br>
					（2）门票当天有效，出园需入园，需再次购票。
				</p>
			</div>
			<div class="ticket-ticketcontent-more" @click="handleToogleClick">
				<div class="ticket-ticketcontent-shadow"></div>
				<span>更多购票须知</span>
				<span :class="[{'ticket-prddetail-arrowup' : isdisplay}, 'iconfont']">&#xe617;</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      isdisplay: false
    };
  },
  methods: {
    handleToogleClick: function() {
      this.isdisplay = !this.isdisplay;
    }
  }
};
</script>

<style scoped>
.iconfont {
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
}
.ticket-prddetail-group {
  margin-top: 0.2rem;
  padding: 0.01rem 0;
  background: #fff;
}
.ticket-prddetail-title {
  position: relative;
  padding: 0 0.2rem;
  height: 0.88rem;
  background: #fff;
  color: #333;
  font-size: 0.32rem;
  line-height: 0.88rem;
  text-indent: 0.15rem;
}
.ticket-prddetail-title::after {
  content: " ";
  position: absolute;
  top: 0.32rem;
  left: 0.2rem;
  width: 0.06rem;
  height: 0.27rem;
  background: #00bcd4;
  border-radius: 0.04rem;
}
.ticket-ticketcontent {
  position: relative;
  margin: 0 0.2rem;
  padding: 0 0.4rem 0.3rem 0.4rem;
}
.ticket-ticketcontent-title {
  position: relative;
  padding-top: 0.3rem;
  line-height: 0.44rem;
  font-size: 0.3rem;
  color: #ff8300;
}
.ticket-ticketcontent-titleicon {
  position: absolute;
  top: 0.34rem;
  left: -0.4rem;
  width: 0.34rem;
  height: 0.34rem;
}
.ticket-ticketcontent-line,
.ticket-ticketcontent-sepline {
  margin-top: 0.14rem;
  line-height: 0.42rem;
  font-size: 0.28rem;
}
.ticket-ticketcontent-keyword {
  font-weight: bold;
  color: #212121;
}
.ticket-ticketcontent-notice {
  margin: 0.2rem 0 0.06rem 0;
  padding: 0.1rem 0.2rem;
  line-height: 0.44rem;
  background: #fffaf2;
  border-radius: 0.08rem;
  color: #ff8300;
}
.ticket-ticketcontent-sepline {
  position: relative;
  padding-left: 0.4rem;
}
.ticket-ticketcontent-linetag {
  position: absolute;
  left: 0;
  top: 0;
  width: 0.4rem;
  height: 0.4rem;
  text-align: left;
}
.ticket-ticketcontent-innericon {
  width: 0.26rem;
  height: 0.26rem;
  vertical-align: top;
  margin-top: 0.06rem;
}
.ticket-ticketcontent-more {
  padding-top: 0.3rem;
  text-align: center;
  border-top: 0;
  font-size: 0.28rem;
  color: #616161;
}
.ticket-ticketcontent-shadow {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.8rem;
  height: 0.5rem;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);
}
.ticket-prddetail-arrowup {
  display: inline-block;
  color: #9e9e9e;
  transform: rotate(180deg);
}
</style>
