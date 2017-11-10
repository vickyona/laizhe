<template>
    <div class='prddetail-group'>
        <h3 class="prddetail-title">购票须知</h3>
        <div class="ticketcontent border-top">
            <div class="ticketcontent-item">
                <p class="ticketcontent-title">
                    <img class="ticketcontent-titleicon" src="//img1.qunarzz.com/piao/fusion/1703/1b/b4ae0bf46adb9602.png">预订说明
                </p>
                <p class="ticketcontent-line">
                    <span class="ticketcontent-keyword">有效期：</span>游玩日期当天有效
                </p>
                <p class="ticketcontent-line">
                    <span class="ticketcontent-keyword">提前预订时间：</span>需要在游玩前1天的23:30前预订
                </p>
            </div>

            <div class="ticketcontent-item">
                <p class="ticketcontent-title">
                    <img class="ticketcontent-titleicon" src="//img1.qunarzz.com/piao/fusion/1703/89/dc69c8cb83b92502.png">
                    入园须知
                </p>
                <p class="ticketcontent-notice">需提前换票入园
                </p>
                <p class="ticketcontent-line">
                    <span class="ticketcontent-keyword">入园方式
                    </span>
                </p>
                <p class="ticketcontent-sepline">
                    <span class="mp-ticketcontent-linetag">
                        <img class="ticketcontent-innericon" src="//img1.qunarzz.com/piao/fusion/1703/4f/60b1629ae5d22702.png">
                    </span>
                    凭商家确认短信、手机号、姓名到长隆水上乐园景区门口自助取票机处输入短信中的电子票号和手机号进行换票
                </p>
                <p class="ticketcontent-sepline">
                    <span class="mp-ticketcontent-linetag">
                        <img class="ticketcontent-innericon" src="//img1.qunarzz.com/piao/fusion/1703/e2/8f4c1d0b353c9402.png">
                    </span>
                    在长隆水上乐园景区门口凭票入园
                </p>

                <p class="ticketcontent-line">
                    <span class="ticketcontent-keyword">商家短信
                    </span>
                </p>
                <p class="ticketcontent-line">   商家确认短信会在下单成功后1分钟内发送
                </p>

                <p class="ticketcontent-line">
                    <span class="ticketcontent-keyword">景区开放时间
                    </span>
                </p>
                <p class="ticketcontent-line">
                    7月8日-8月31日：9:30-23:00（星光夜场：17:00-23:00）
                </p>
            </div>
            <div class="ticketcontent-item">
                <p class="ticketcontent-title">
                    <img class="ticketcontent-titleicon" src="//img1.qunarzz.com/piao/fusion/1703/19/c2df078ae9e10802.png">
                    退款说明
                </p>
                <p class="ticketcontent-sepline">
                    <span class="ticketcontent-linetag">
                        <img class="ticketcontent-innericon" src="//img1.qunarzz.com/piao/fusion/1703/84/ca17a90b690b4b02.png">
                    </span>不可退：非经法定原因，不可退订
                </p>
                <p class="ticketcontent-sepline">
                    <span class="mp-ticketcontent-linetag">
                        <img class="ticketcontent-innericon" src="//img1.qunarzz.com/piao/fusion/1703/9d/98ed351886bada02.png">
                    </span>额外说明：特惠产品，一经预订均不可退改。
                </p>
            </div>

            <div class="ticketcontent-item">
                <p class="ticketcontent-title">
                    <img class="ticketcontent-titleicon" src="//img1.qunarzz.com/piao/fusion/1703/30/7704a63ac2cedf02.png">费用说明
                </p>
                <p class="ticketcontent-line" mp-role="feeDesc">
                    【费用包含】长隆水上乐园成人票1张（仅限8.28入园），景区一票通玩，无需自费(购买零食除外）
                </p>
            </div>

            <div ref="showuse" class="ticketcontent-item" style="display:none;" mp-role="usingDescArea">
                <p class="ticketcontent-title">
                    <img class="ticketcontent-titleicon" src="//img1.qunarzz.com/piao/fusion/1703/be/e0e62095776dc802.png">使用说明
                </p>
                <p class="ticketcontent-line">
                【开放时间】7月8日-8月31日：09：30—23：00；星光夜场：17:00-23:00(星光夜场每晚17：00开始入场）<br>【入园须知】最晚取票时间为当日闭园前2小时；<br>【票类说明】全票对象：指成人及身高1.5米以上儿童。<br>【温馨提示】<br>1、一个手机号只可订5张门票，超过请换一个手机号预订（含在其他网站平台预订次数）。<br>2、购票信息敬请注意保密，如因个人原因泄露订票信息而造成的损失，去哪儿网对此不承担任何责任；<br>3、若无法在自助取票机取票，或是取票数量不对，取票过程中遇到问题请及时咨询景区工作人员。<br>4、园区为户外项目，受天气等不可抗力因素影响较大，建议您出行前查看当地天气预报，由于天气原因、自然灾害、机械检修等原因而不能游玩全部的项目，去哪儿网将不作退款，并不负责补偿。
                </p>
            </div>
       
            <div @click="handlemore" ref='showmore' class="ticketcontent-more evenmore" mp-role="useDescMoreBtn" style="display: block;">
                <div mp-role="moreShaddow" class="ticketcontent-shadow">
                </div>
                <span mp-role="moreText">
                    更多购票须知
                </span>
                <span class="iconfont mp-ticketcontent-arrow" mp-role="useDescMoreArrow">&#xe64b;
                </span>
            </div>
            <div @click="handlesince" ref='showpackup' class="ticketcontent-more since" mp-role="useDescMoreBtn" style="display: none;">
                <div mp-role="moreShaddow" class="mp-ticketcontent-shadow" style="display: none;"></div>
                <span mp-role="moreText">收起购票须知</span>
                <span class="iconfont mp-ticketcontent-arrow mp-prddetail-arrowup" mp-role="useDescMoreArrow">&#xe601;</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handlemore() {
      (this.$refs.showuse.style.display = "block"),
        (this.$refs.showmore.style.display = "none"),
        (this.$refs.showpackup.style.display = "block");
    },
    handlesince() {
      (this.$refs.showuse.style.display = "none"),
        (this.$refs.showmore.style.display = "block"),
        (this.$refs.showpackup.style.display = "none");
    }
  }
};
</script>

<style scoped>
.prddetail-group {
  margin-top: 0.2rem;
  padding: 0.01rem 0;
  background-color: #fff;
}
.prddetail-title {
  overflow: hidden;
  position: relative;
  height: 0.88rem;
  font-size: 0.32rem;
  line-height: 0.88rem;
  text-indent: 0.15rem;
  padding: 0 0.2rem;
}
.prddetail-title::after {
  content: " ";
  position: absolute;
  top: 0.32rem;
  left: 0.2rem;
  width: 0.06rem;
  height: 0.27rem;
  background: #00bcd4;
  -webkit-border-radius: 0.04rem;
  -moz-border-radius: 0.04rem;
  border-radius: 0.04rem;
}
.border-top::after {
  position: absolute;
  width: 100%;
  height: 1px;
  border-top: 1px solid #ccc;
  transform: scaleY(0.33333);
  left: 0;
  top: 0;
}
.ticketcontent {
  position: relative;
  margin: 0 0.2rem;
  padding: 0 0.4rem 0.3rem 0.4rem;
}
.ticketcontent-title {
  position: relative;
  padding-top: 0.3rem;
  line-height: 0.44rem;
  font-size: 0.3rem;
  color: #ff8300;
}
.ticketcontent-titleicon {
  position: absolute;
  top: 0.34rem;
  left: -0.4rem;
  width: 0.34rem;
  height: 0.34rem;
}
.ticketcontent-line,
.ticketcontent-sepline {
  margin-top: 0.14rem;
  line-height: 0.42rem;
  font-size: 0.28rem;
}
.ticketcontent-innericon {
  width: 0.26rem;
  height: 0.26rem;
  vertical-align: top;
  margin-top: 0.06rem;
}
.ticketcontent-keyword {
  font-weight: bold;
  color: #212121;
}
.ticketcontent-notice {
  margin: 0.2rem 0 0.06rem 0;
  padding: 0.1rem 0.2rem 0.1rem 0.2rem;
  line-height: 0.44rem;
  background: #fffaf2;
  border-radius: 0.08rem;
  color: #ff8300;
}
.ticketcontent-more {
  display: none;
  padding-top: 0.3rem;
  text-align: center;
  border-top: 0;
  font-size: 0.28rem;
  color: #616161;
}
.ticketcontent-shadow {
  position: absolute;
  left: 0;
  right: 0;
  height: 0.5rem;
  bottom: 0.8rem;
  background-image: linear-gradient(top, rgba(255, 255, 255, 0), #fff);
}
.ticketcontent-arrow {
  font-size: 0.24rem;
  margin-left: 0.05rem;
}
</style>
