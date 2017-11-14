<template>
    <div>
        <div :class="[{'ticket-order-mask': $store.state.isblock}]"></div>
        <div :class="['ticket-order-wrap', {'ticket-order-fadein': $store.state.isFadeIn}]">
            <div class="ticket-order-outer">
                <div class="ticket-order-info">
                    <h5 class="order-title">【开学促销】长隆水上乐园双人票（日夜场通玩）</h5>
                    <p class="order-price">
                        <span class="price">￥
                            <em class="price-num">190</em>
                        </span>
                        <span class="price-txt">张</span>
                        <span class="market-price">票面价
                            <span class="market-price-num">560</span>
                        </span>
                    </p>
                </div>
                <div class="ticket-order-select">
                    <h6 class="order-note">价格日历</h6>
                    <div class="order-datecard">
                        <span class="datecard-item">
                            <em class="datacard-name">昨天</em>
                            <strong class="datacard-detail">8月30日</strong>
                        </span>
                        <span class="datecard-item">
                            <em class="datacard-name">今天</em>
                            <strong class="datacard-detail">8月30日</strong>
                        </span>
                        <span class="datecard-item">
                            <em class="datacard-name">明天</em>
                            <strong class="datacard-detail">8月30日</strong>
                        </span>
                        <span class="datecard-item">
                            <em class="datacard-name">其他日期</em>
                        </span>
                    </div>
                </div>
                <div class="ticket-order-light">需要在游玩前1天的23:30前预定</div>
            </div>
            <a href="#" class="ticket-order-btn">立即预定</a>
            <div class="ticket-order-close iconfont" @click="handleCloseClick">&#xe63f;</div>
        </div>     
    </div>

</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleCloseClick: function() {
      this.$store.commit("changeIsFadeIn");
      this.$store.commit("changeIsBlock");
      this.$store.commit("changeIsFixBooking");
    }
  }
};
</script>

<style scoped>
.ticket-order-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
.ticket-order-wrap {
  position: fixed;
  z-index: 12;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  transform: translateY(16rem);
  transition: transform 0.3s ease-out;
}
.ticket-order-fadein {
  transform: translateY(0);
  -webkit-transform: translateY(0);
}
.ticket-order-outer {
  margin: 0 0.2rem;
}
.order-title {
  margin-right: 0.6rem;
  padding: 0.3rem 0 0.1rem;
  color: #212121;
  font-size: 0.34rem;
  line-height: 0.4rem;
}
.order-price {
  color: #9e9e9e;
  font-size: 0.24rem;
  line-height: 0.48rem;
}
.price {
  color: #ff9800;
  margin-right: 0.06rem;
  font-size: 0.24rem;
}
.price-num {
  margin-left: 0.06rem;
  font-size: 0.36rem;
}
.market-price {
  margin-left: 0.05rem;
  text-decoration: line-through;
  color: #9e9e9e;
  font-size: 0.24rem;
}
.ticket-order-select {
  margin-top: 0.18rem;
}
.order-note {
  color: #333;
  font-size: 0.26rem;
  line-height: 0.65rem;
}
.order-datecard {
  overflow: hidden;
  height: 0.86rem;
}
.datecard-item {
  box-sizing: border-box;
  float: left;
  width: 22.5%;
  height: 0.86rem;
  margin-left: 3.33%;
  display: inline-block;
  min-width: 1.2rem;
  min-height: 0.82rem;
  border: 0.02rem solid #bdbdbd;
  background: #fff;
  text-align: center;
  border-radius: 0.1rem;
}
.datecard-item:first-child {
  margin-left: 0;
}
.datacard-name {
  display: block;
  width: 100%;
  padding-top: 0.08rem;
  color: #212121;
  font-size: 0.28rem;
  line-height: 0.36rem;
}
.datacard-name:last-child {
  padding-top: 0.2rem;
}
.datacard-detail {
  padding-bottom: 0.06rem;
  color: #888;
  font-size: 0.24rem;
  line-height: 0.32rem;
  display: block;
  width: 100%;
}
.ticket-order-light {
  padding: 0.14rem 0;
  color: #ff8300;
  font-size: 0.24rem;
  line-height: 0.36rem;
}
.ticket-order-btn {
  display: block;
  width: 100%;
  border: 0 none;
  background: #ff9800;
  color: #fff;
  font: normal 0.36rem/1rem Arial, "Microsoft Yahei", "Helvetica Neue",
    Helvetica, sans-serif;
  text-align: center;
}
.ticket-order-close {
  position: absolute;
  top: 0;
  right: 0;
  width: 0.88rem;
  height: 1rem;
  color: #9e9e9e;
  font-size: 0.4rem;
  line-height: 1rem;
  text-align: center;
}
</style>
