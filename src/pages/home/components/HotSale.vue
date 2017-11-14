<template>
    <div id="onSale">
        <div id="onSale-stageTop">
            <div class="onSale-stageTop-left">
                <i class="iconfont">&#xe611;</i>
                <p class="onSale-stageTop-describe">定位失败</p>
            </div>
            <div class="onSale-stageTop-right">
                <i class="iconfont">&#xe64c;</i>
                <p class="onSale-stageTop-describe">5折泡温泉</p>                
            </div>
        </div>
        <div id="onSale-stageBottom">
            <div class="onSale-stageBottom-left"></div>
            <div class="onSale-stageBottom-right"></div>
        </div>
        <div id="fixed"></div>
    </div>
</template>
<script>
export default {};
</script>
<style>
#onSale-stageTop {
  height: 0.95rem;
  display: flex;
  background: #fff;
}
.onSale-stageTop-left,.onSale-stageTop-right{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  box-shadow: border-box;
}
.onSale-stageTop-left{
  border-top: 1px solid #f4f4f4;
  border-right: 1px solid #f4f4f4;
}
.onSale-stageTop-right{
  border-top: 1px solid #f4f4f4;
}
#onSale-stageTop .onSale-stageTop-describe{
  width: 40%;
  height: 0.28rem;
  overflow: hidden;
  margin-left: 0.04rem;
}
#onSale-stageBottom {
  height: 1.4rem;
  width: 100%;
  margin-top: 0.2rem;
  display: flex;
}
.onSale-stageBottom-left,.onSale-stageBottom-right{
  height: 100%;
  box-sizing: border-box;
  width: 50%;
}
.onSale-stageBottom-left{
   background: #fff url(http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png) no-repeat;
  background-position: center;
  background-size: auto 100%;
  border: 1px solid #f4f4f4;
  border-left: none;
}
.onSale-stageBottom-right{
  background: #fff url(http://img1.qunarzz.com/piao/fusion/1710/54/1685d2108b652302.png) no-repeat;
  background-position: center;
  background-size: auto 100%;
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
}
</style>

