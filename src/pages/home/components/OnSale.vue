<template>
    <div id="onSale">
        <div id="onSale-stage1">
            <div class="onSale-stage1-left">
                <i class="iconfont">&#xe611;</i>
                <p>定位失败</p>
            </div>
            <div class="onSale-stage1-right">
                <i class="iconfont">&#xe64c;</i>
                <p>5折泡温泉</p>                
            </div>
        </div>
        <div id="onSale-stage2">
            <div class="onSale-stage2-left"></div>
            <div class="onSale-stage2-right"></div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style>
#onSale-stage1 {
  height: 0.95rem;
  display: flex;
  background: #fff;
}
#onSale-stage1 > .onSale-stage1-left,
#onSale-stage1 > .onSale-stage1-right {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  box-shadow: border-box;
}
#onSale-stage1 > .onSale-stage1-left {
  border-top: 1px solid #f4f4f4;
  border-right: 1px solid #f4f4f4;
}
#onSale-stage1 > .onSale-stage1-left {
  border-top: 1px solid #f4f4f4;
}
#onSale-stage1 > div > p {
  margin-left: 0.04rem;
}
#onSale-stage2 {
  height: 1.4rem;
  width: 100%;
  margin-top: 0.2rem;
  display: flex;
}
#onSale-stage2 > .onSale-stage2-left,
#onSale-stage2 > .onSale-stage2-right {
  height: 100%;
  box-sizing: border-box;
  width: 50%;
}
#onSale-stage2 > .onSale-stage2-left {
  background: url(../../../assets/sale/sale1.png)no-repeat #fff;
  background-position: center;
  background-size: auto 100%;
  border: 1px solid #f4f4f4;
  border-left: none;
}
#onSale-stage2 > .onSale-stage2-right {
  background: url(../../../assets/sale/sale2.png)no-repeat #fff;
  background-position: center;
  background-size: auto 100%;
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
}
</style>

