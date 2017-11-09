<template>
    <div class="download"v-if="visited" @touchmove="handleNomoveTouchmove">
        <div class="download-mask"></div>
        <div class="download-board">
            <img src="../../../assets/home/downloadbg.png" alt="" class="download-bg">
            <div class="download-exit" @touchstart="handleExitTouchstart"></div>
            <div class="download-btn" @touchstart="handleDownloadTouchstart">下载{{osType}}客户端</div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      osType: ""
    };
  },
  computed: mapState({
    visited(state) {
      return state.home.visitedIndex;
    }
  }),
  mounted(e) {
    var whatOsType = /Google/;
    whatOsType.test(navigator.vendor)
      ? (this.osType = "Android")
      : (this.osType = "iOS");
  },
  methods: {
    handleExitTouchstart() {
      this.$store.state.home.visitedIndex = false;
    },
    handleDownloadTouchstart() {
      alert("无法下载😁😁😁");
      this.$store.state.home.visitedIndex = false;
    },
    handleNomoveTouchmove(e) {
      e.preventDefault();
    }
  }
};
</script>
<style scoped>
.download {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
}
.download-mask {
  z-index: 10;
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
}
.download-board {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4.88rem;
}
.download-bg {
  z-index: 11;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.download-exit {
  z-index: 12;
  position: absolute;
  height: 20px;
  width: 20px;
  background: url(../../../assets/home/downloadexit.png);
  top: 20%;
  right: 2%;
  background-size: cover;
}
.download-btn {
  z-index: 12;
  line-height: 40px;
  text-align: center;
  color: #fff;
  font-size: 1.125em;
  height: 40px;
  width: 250px;
  background: orange;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  border-radius: 5px;
  bottom: 30px;
  bottom: 10%;
}
</style>


