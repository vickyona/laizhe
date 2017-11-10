<template>
	<div>
        <div class='ticket-header' @scroll="heightScroll()" v-show="header" :style="{ opacity : opacity}">
            <router-link to="/"><a class='ticket-header-goback iconfont'>&#xe705;</a></router-link>
            <h1 class='ticket-header-title'>广州长隆旅游度假区</h1>
        </div>
        <router-link to="/beijing">
          <a class="ticket-header-back iconfont" v-show="isBack">
              <span class="ticket-headerback-bg"></span>
              <span class="ticket-headerback-icon">&#xe618;</span>
          </a>
        </router-link>
	</div>
</template>

<script>
export default {
  data() {
    return {
      scroll: "",
      header: false,
      opacity: 0,
      isBack: true
    };
  },
  methods: {
    heightScroll() {
      var opacityValue = document.body.scrollTop / 100;
      if (document.body.scrollTop > 0) {
        this.header = true;
        this.opacity = opacityValue;
        this.isBack = false;
      } else {
        this.header = false;
        this.opacity = opacityValue;
        this.isBack = true;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.heightScroll);
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
.ticket-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.88rem;
  background: #00bcd4;
  z-index: 20;
}
.ticket-header-goback,
.ticket-header-back {
  position: absolute;
  font-size: 0.36rem;
  color: #fff;
  text-align: center;
}
.ticket-header-goback {
  left: 0;
  top: 0;
  width: 0.8rem;
  height: 0.88rem;
  line-height: 0.88rem;
}
.ticket-header-title {
  overflow: hidden;
  margin: 0 1rem;
  line-height: 0.88rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.32rem;
  text-align: center;
  color: #fff;
}
.ticket-header-back {
  left: 0.1rem;
  top: 0.1rem;
  width: 0.72rem;
  height: 0.72rem;
  line-height: 0.72rem;
  z-index: 30;
}
.ticket-headerback-bg {
  display: block;
  width: 0.72rem;
  height: 0.72rem;
  background: #000;
  opacity: 0.5;
  border-radius: 0.36rem;
}
.ticket-headerback-icon {
  position: absolute;
  left: -0.06rem;
  top: 0;
  display: block;
  width: 0.72rem;
  line-height: 0.72rem;
  text-align: left;
  text-indent: 0.24rem;
}
</style>
