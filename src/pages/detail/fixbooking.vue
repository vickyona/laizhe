<template>
	<div class="ticket-fixbooking-con">
		<div class="ticket-fixbooking-pricecon border-top">
			<span class="ticket-fixbooking-priceitem">
				价格
				<em class="ticket-fixbooking-priceicon">&yen;</em>
				<span class="ticket-fixbooking-price">35</span>
			</span>
		</div>
		<div class="ticket-fixbooking-btn" @click="handleOrderingClick">
			<a class="ticket-fixbooking-link">立即预定</a>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOrderingClick: function() {
      this.$store.commit("changeIsFadeIn");
      this.$store.commit("changeIsBlock");
      this.$store.commit("changeIsFixBooking");
    }
  }
};
</script>

<style scoped>
.ticket-fixbooking-con {
  position: fixed;
  z-index: 82;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
}
.ticket-fixbooking-pricecon {
  float: left;
  height: 0.88rem;
  width: 56%;
  background: #fff;
  color: #ff8300;
  text-indent: 0.2rem;
  position: relative;
}
.ticket-fixbooking-priceitem {
  color: #616161;
  line-height: 0.88rem;
  font-size: 0.28rem;
}
.ticket-fixbooking-priceicon {
  margin-left: 0.1rem;
  color: #ff8300;
  font-size: 0.24rem;
}
.ticket-fixbooking-price {
  margin-right: 0.1rem;
  font-size: 0.4rem;
  color: #ff8300;
}
.ticket-fixbooking-btn {
  overflow: hidden;
  width: 44%;
  height: 0.88rem;
  background: #ff9800;
  font-size: 0.36rem;
  text-align: center;
}
.ticket-fixbooking-link {
  display: block;
  color: #fff;
}
</style>
