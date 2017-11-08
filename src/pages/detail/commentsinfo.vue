<template>
 	<div class="ticket-commentsinfo-con">
 		<span class="ticket-comment-icon iconfont">&#xe608;</span>
 		<span class="ticket-startlevel  iconfont">&#xe628;&#xe628;&#xe628;&#xe628;&#xe628;</span>
 		<span class="ticket-comment-tagscore">5.0分</span>
 		<a href="#" class="ticket-comments-total">
 			<span class="ticket-comments-totalnum">7条评论&nbsp;</span>
 			<span class="ticket-comments-rightarrow iconfont">&#xe649;</span>
 		</a>
 	</div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
/* @import "../../assets/font/iconfont.css"; */
.ticket-commentsinfo-con {
  position: relative;
  margin: 0.2rem 0 0.2rem 0;
  background-color: #fff;
  height: 0.8rem;
  line-height: 0.8rem;
}
.ticket-comment-icon {
  position: relative;
  display: inline-block;
  width: 0.36rem;
  height: 0.36rem;
  margin-left: 0.2rem;
  margin-right: 0.1rem;
  background-size: 0.4rem 3rem;
  color: #00bcd4;
}
.ticket-startlevel,
.ticket-comment-tagscore {
  color: #00bcd4;
}
.ticket-comments-total {
  float: right;
  display: block;
  margin-bottom: 0.2rem;
  margin-right: 0.16rem;
  color: #9e9e9e;
}
.ticket-comments-totalnum {
  display: inline-block;
  line-height: 0.28rem;
  font-size: 0.28rem;
  margin-left: 0 0.2rem 0 0.16rem;
}
.iconfont {
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
}
</style>
