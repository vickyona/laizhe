<template>
  <div class="footer">
      <div class="qchat">
            <i class="icon iconfont i-qchat">&#xe695;</i>
            <p>客服</p>
        </div>
        <router-link to="/order">
            <div class="order-btn">
                立即预订
            </div>
        </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.footer {
  position: fixed;
  z-index: 82;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.98rem;
  line-height: 0.98rem;
}

.footer .qchat {
  float: left;
  padding: 0.16rem 0 0.06rem;
  width: 1.02rem;
  background: #fff;
  color: #616161;
  text-align: center;
}

.footer .qchat .i-qchat {
  display: block;
  position: relative;
  top: -0.02rem;
  height: 0.4rem;
  font-size: 0.6rem;
  line-height: 0.4rem;
}

.footer .qchat p {
  height: 0.28rem;
  font-size: 0.2rem;
  line-height: 0.28rem;
}

.footer .order-btn {
  overflow: hidden;
  height: 0.98rem;
  background: #ff9800;
  color: #fff;
  font-size: 0.4rem;
  text-align: center;
}
</style>

