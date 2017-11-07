<template>
 	<div class="mp-filter" style="">
      <div class="mp-select">
        <span class="mp-select-caption" mp-role="selectCaption">全部分类</span>
      </div>
      <div class="mp-select">
        <span class="mp-select-caption" mp-role="selectCaption">推荐排序</span>
      </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.body{
    width:100%;
}
.mp-filter{
    display:flex;
    height:0.8rem;
    position:relative;
}
.mp-filter::before {
    border-color: #c3c4d7;
    content: "";
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:1px;
}
.mp-filter .mp-select::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: .02rem;
    height: 100%;
    background: -webkit-linear-gradient(top,#fff,#ccc,#fff);
    -webkit-transform: scaleX(.51);
    -moz-transform: scaleX(.51);
    -ms-transform: scaleX(.51);
    -o-transform: scaleX(.51);
    transform: scaleX(.51);
}
.mp-select{
    flex-grow:1;
    width:100%;
    text-align:center;
    line-height:0.8rem;
    position:relative;
    height: .8rem;
    overflow: hidden;
    color: #212121;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mp-select-caption{
    position:relative;
}
.mp-select-caption::after {
    content: "";
    position: absolute;
    right: -.25rem;
    top: .18rem;
    width: 0;
    height: 0;
    margin-top: -.04rem;
    border-left: .08rem solid transparent;
    border-right: .08rem solid transparent;
    border-top: .08rem solid #666;
}



</style>

