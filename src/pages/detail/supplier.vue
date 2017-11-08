<template>
	<div class="ticket-prddetail-group">
		<h3 class="ticket-prddetail-title">供应商：北京智慧景区</h3>
		<div class="ticket-prddetail-content border-top">
			<div :class="['ticket-sullier', {'ticket-ellipsis':isAdd}]">				
            消费者成功预订门票并按产品规则使用，出游当日无法按照原订单入园，联系供应商（或去哪儿网）后10分钟未解决，消费者可在景区购买门市价入园并保留票根，去哪儿网将双倍赔付差价。		
			</div>
		</div>
		<div class="ticket-ticketcontent-more" @click="handleToogleClick">
			<div class="ticket-ticketcontent-shadow"></div>
			<span :class="[{'ticket-prddetail-arrowup' : upDown}, 'iconfont']">&#xe64b;</span>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      isAdd: true,
      upDown: false
    };
  },
  methods: {
    handleToogleClick: function() {
      this.isAdd = !this.isAdd;
      this.upDown = !this.upDown;
    }
  }
};
</script>

<style scoped>
@import "../../assets/font/iconfont.css";

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
.ticket-prddetail-content {
  color: #9e9e9e;
  font-size: 0.28rem;
  line-height: 0.44rem;
  overflow: hidden;
  padding: 0.15rem 0;
  margin: 0 0.2rem;
  position: relative;
}
.ticket-ellipsis {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.ticket-ticketcontent-more {
  padding: 0.06rem 0 0.2rem 0;
  text-align: center;
  border-top: 0;
  font-size: 0.28rem;
  color: #616161;
  position: relative;
}
.ticket-ticketcontent-shadow {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.6rem;
  height: 0.5rem;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);
}
.ticket-prddetail-arrowup {
  display: inline-block;
  color: #9e9e9e;
  transform: rotate(180deg);
}
</style>
