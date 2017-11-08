<template>
    <header class="header">
        <router-link class="iconfont header-left" to='/'>&#xe705;</router-link>
        <h1 class="header-title">
            <input type="text" class="search-input" placeholder="输入城市或景点">    
        </h1>
        <span class="search-right">
            搜索
        </span>
    </header>
</template>

<script>
    export default {};
</script>

<style scoped>
.header {
    position: relative;
    height: 0.88rem;
    background: #00bcd4;
    overflow: hidden;
}
.header-left {
    float: left;
    width: 0.4rem;
    padding: 0 0.2rem;
    line-height: 0.88rem;
    font-size: 0.4rem;
    color: #fff;
}
.header-title {
    position: absolute;
    left: 0.8rem;
    right: 1.08rem;
    top: 0.14rem;
    line-height: 0.6rem;
    padding: 0 .6rem 0 .2rem;
    background: #fff;
    border-radius: 0.06rem;
    text-indent: 0.4rem;
    color: #ccc;
}
.search-input{
    position: relative;
    display: block;
    width: 100%;
    height: .4rem;
    line-height: .4rem;
    padding: .1rem 0;
    border: 0;
    font-family: "Microsoft Yahei",Arial;
    font-size: .28rem;
    border-radius: .06rem;
}
.search-right {
  float: right;
  width: 1.08rem;
  line-height: 0.88rem;
  text-align: center;
  color: #fff;
}
</style>