<template>
 	<div class="ticket-comment-container">
		<h3 class="ticket-comment-title">用户评论</h3>
		<div class="ticket-comment-list">
			<div class="ticket-comment-item border-top" v-for = "(info, index) in commentsInfo" :key="info.id">
				<div class="ticket-comment-stardate">
 					<span class="ticket-startlevel  iconfont">&#xe628;&#xe628;&#xe628;&#xe628;&#xe628;</span>
					<span class="ticket-comment-date">{{info.userId}}&nbsp;&nbsp;{{info.data}}</span>
				</div>
				<p class="ticket-comment-content" :style="foldClassObject">
					{{info.commentContent}}
				</p>
				<div :class="['ticket-comment-foldbtn', 'iconfont', {'ticket-prddetail-arrowup' : isFold}]" @click="handleClickFold">&#xe64b;</div>
				<div class="ticket-comment-imgs" >
					<div class="ticket-comment-imgouter" v-for = "(imgs, index) in info.imgUrl">
						<div class="ticket-comment-imginner">
							<img class="ticket-comment-img" :src="imgs">
						</div>
					</div>
				</div>
			</div>
		</div>
		<a href="#">
			<div class="ticket-more-refresh border-top">查看全部评论<span class="iconfont">&#xe649;</span></div>
		</a>
 	</div>
</template>

<script>
export default {
  data() {
    return {
      isFold: false,
      foldClassObject: {
        overflow: "hidden",
        height: "100px"
      }
    };
  },
  props: ["commentsInfo"],
  methods: {
    handleClickFold: function() {
      if (!this.isFold) {
        this.foldClassObject.overflow = "auto";
        this.foldClassObject.height = "auto";
      } else {
        this.foldClassObject.overflow = "hidden";
        this.foldClassObject.height = "100px";
      }
      this.isFold = !this.isFold;
    }
  }
};
</script>

<style scoped>
/* @import "../../assets/font/iconfont.css"; */
.iconfont {
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
}
.ticket-comment-container {
  position: relative;
  margin-top: 0.2rem;
}
.ticket-comment-title {
  padding: 0 0.2rem;
  height: 0.88rem;
  background: #fff;
  color: #333;
  font-size: 0.3rem;
  line-height: 0.88rem;
  text-indent: 0.2rem;
}
.ticket-comment-title::after {
  content: " ";
  position: absolute;
  top: 0.33rem;
  left: 0.2rem;
  width: 0.06rem;
  height: 0.25rem;
  background: #1ba9ba;
  border-radius: 0.04rem;
}
.ticket-comment-list {
  background: #fff;
}
.ticket-comment-item {
  padding: 0.1rem 0.2rem 0.3rem 0.2rem;
}
.ticket-comment-stardate {
  margin-bottom: 0.1rem;
  line-height: 0.6rem;
}
.ticket-startlevel,
.ticket-comment-date {
  vertical-align: middle;
}
.ticket-startlevel {
  display: inline-block;
  position: relative;
  width: 1.4rem;
  height: 0.28rem;
  color: #00bcd4;
}
.ticket-comment-date {
  position: relative;
  float: right;
  top: 0.16rem;
  margin-left: 0.2rem;
  line-height: 0.28rem;
  font-size: 0.24rem;
  color: #212121;
}
.ticket-comment-content {
  word-break: break-all;
  word-wrap: break-word;
  line-height: 0.42rem;
  font-size: 0.26rem;
  color: #616161;
}
.ticket-comment-foldbtn {
  height: 0.48rem;
  line-height: 0.48rem;
  text-align: center;
  font-size: 0.4rem;
  color: #9e9e9e;
}
.ticket-comment-imgs {
  margin: 0.2rem 0 0.1rem 0;
  position: relative;
  zoom: 1;
  overflow: hidden;
}
.ticket-comment-imgouter {
  float: left;
  width: 33.33%;
  margin-bottom: 0.1rem;
}
.ticket-comment-imginner {
  margin: 0 0.07rem 0 0.07rem;
}
.ticket-comment-img {
  width: 100%;
  background: #ccc;
}
.ticket-more-refresh {
  position: relative;
  margin-top: -0.02rem;
  height: 0.8rem;
  background: #fff;
  color: #616161;
  line-height: 0.8rem;
  text-align: center;
  z-index: 2;
  vertical-align: middle;
}
.ticket-prddetail-arrowup {
  transform: rotate(180deg);
}
</style>
