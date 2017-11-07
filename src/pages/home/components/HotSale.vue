<template>
    <div id="onSale">
        <div id="stage1">
            <div>
                <i class="iconfont">&#xe611;</i>
                <p >定位失败</p>
            </div>
            <div>
                <i class="iconfont">&#xe64c;</i>
                <p>5折泡温泉</p>                
            </div>
        </div>
        <div id="stage2">
            <div></div>
            <div></div>
        </div>
        <div id="fixed"></div>
    </div>
</template>
<script>
export default {};
</script>
<style>
#stage1 {
  height: 0.95rem;
  display: flex;
  background: #fff;
}
#stage1 > div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  box-shadow: border-box;
}
#stage1 > div:nth-child(1) {
  border-top: 1px solid #f4f4f4;
  border-right: 1px solid #f4f4f4;
}
#stage1 > div:nth-child(2) {
  border-top: 1px solid #f4f4f4;
}
#stage1 > div > p {
  width:40%;
  height: 0.28rem;
  overflow: hidden;
  margin-left: 0.04rem;
}
#stage2 {
  height: 1.4rem;
  width: 100%;
  margin-top: 0.2rem;
  display: flex;
}
#stage2 > div {
  height: 100%;
  box-sizing: border-box;
  width: 50%;
}
#stage2 > div:nth-child(1) {
  background: url(../../../assets/sale/sale1.png)no-repeat #fff;
  background-position: center;
  background-size: auto 100%;
  border: 1px solid #f4f4f4;
  border-left: none;
}
#stage2 > div:nth-child(2) {
  background: url(../../../assets/sale/sale2.png)no-repeat #fff;
  background-position: center;
  background-size: auto 100%;
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
}
</style>

