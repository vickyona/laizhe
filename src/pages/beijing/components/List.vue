<template>

<div id="wrapper">
	<div id="scroller">
    <ul id="list-sight">
       <div id="loadNotice" v-if="showLoading">loading...</div>
       <li class="list-sight-info" v-for="item in lists" :key="item.id">
            <div class="list-sight-imgcon">
               <img :src ="item.path" class="list-sight-img">
            </div>
        <div class="list-sight-detail">
            <h3 class="list-sight-name">{{item.name}}</h3>
            <span class="list-tag-word">热</span>
            <span class="list-sight-price">
                 ¥
                 <em>{{item.price}}</em>
                 <span class="list-lowprice-text">&nbsp;起</span>
            </span>
            <div class="list-sight-comments">
                 <span class="list-starlevel">
                   <span class="list-iconfont-bottom iconfont" data-score="4.9" style="width:98.00000000000001%">&#xe60d;</span>
                   <span class="list-iconfont-top iconfont">&#xe60d;</span>                
                </span>
                <span class="list-comments-totalnum">{{item.totalnum}}</span>
                <div class="list-sight-location">
                    <span class="list-sight-address">{{item.address}}</span>
                </div>
            </div>
        </div>
        <div class="list-sight-ticket-item">
                 <h4 class="list-ticket-name">{{item.mpticketname1}}</h4>
                 <span class="list-ticket-qunarprice">
                   ¥
                   <em>{{item.qunarprice1}}</em>
                 </span>
        </div>

        <div class="list-sight-ticket-item">
             <h4 class="list-ticket-name">{{item.mpticketname2}}</h4>
             <span class="list-ticket-qunarprice">
                ¥
                <em>{{item.qunarprice2}}</em>
            </span>
        </div>
       </li>
     </ul>   
    </div>
    </div>

</template>

<script>

    require("../../../utils/iscroll-probe.js")
   

    export default {
    data(){
        return{
            showLoading:false
        }
    },
    computed:{
        lists(){
            return this.$store.state.lists;
        }
    },
    mounted(){
        this.flag =false;
        this.myScroll =new IScroll('#wrapper',{probeType:2,mouseWheel:true});
        this.myScroll.on("scroll", () => {
            if(this.myScroll.y>50){
                this.flag = true;
                this.$store.commit("lists")
                this.showLoading =true;
            }
        })
    },
    updated(){
        setTimeout(()=>{
            this.showLoading =false;
            this.myScroll.refresh();
        },500)
        
    }
  
}
</script>

<style>
body{
    margin:0;
    padding:0;
    position:relative;

}
html{
    font-size:50px;
}
#wrapper{
    position:absolute;
    width:100%;
    height:500px;
    top:1.68rem;
    overflow:hidden;
}
#loadNotice{
    text-align:center;
    font-size:16px;
    font-color:#444;
}
.list-sight-info{
    padding: .2rem;
    margin-bottom: .2rem;
    background: #fff;
}
.list-iconfont-bottom,.list-iconfont-top{
    position:absolute;
    left:0;
    top:-0.44rem;
    font-size:1.25rem;
}
.list-iconfont-bottom{
    color:#cccccc;
}
.list-iconfont-top{
    z-index:3;
    color:#00bcd4;

}

.list-sight-name{
    overflow: hidden;
    max-width: 60%;
    color: #212121;
    font-size: .32rem;
    line-height: .36rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    float:left;
}
.list-sight-imgcon{
    float:left;
    background:url("http://s.qunarzz.com/piao_topic/image/common/default/140x140.png") no-repeat 0;
    background-size:cover;
}
.list-sight-img{
    width: 1.6rem;
    height: 1.6rem;
}
.list-sight-detail{
    position: relative;
    overflow: hidden;
    padding-left: .2rem;
    height: 1.6rem
}
.list-tag-word{
    display: inline-block;
    margin-left: .06rem;
    width: .3rem;
    height: .3rem;
    background: #ff1200;
    color: #fff;
    font-size: .24rem;
    line-height: .3rem;
    text-align: center;
}
.list-sight-price{
    position: absolute;
    top: 0;
    right: 0;
    height: .36rem;
    color: #ff8300;
    font-size: .2rem;
}
.list-sight-price em{
    font-size: .36rem;
}
.list-lowprice-text{
    color: #9e9e9e;

}
.list-sight-comments{
    position:relative;
    margin-top: .38rem;
    height: .64rem;
    line-height: .64rem;
}
.list-starlevel{
    width: 1.2rem;
    height: .24rem;
    font-size: .24rem;
    display: inline-block;
    position: relative;
}
.list-comments-totalnum{
    position: relative;
    top: -.27rem;
    margin-left: .06rem;
    color: #9e9e9e;
    font-size: .24rem;
}
.list-sight-location{
    position: absolute;
    bottom: -.28rem;
    color: #9e9e9e;
    font-size: 0;
    white-space: nowrap;
}
.list-sight-address{
    font-size: .24rem
}
.list-sight-ticket-item{
    position: relative;
    height: .9rem;
    margin: 0 .2rem;
}
.list-sight-ticket-item::before{
    border-top: 1px dashed #c9cccd;
    content: "";
    position: absolute;
    left: 0;
    top:0.22rem;
    width: 100%;
    height: 1px;
}
.list-ticket-name{
    overflow: hidden;
    margin-right: 1.2rem;
    color: #212121;
    font-size: .28rem;
    line-height: 1.45rem;
    white-space: nowrap;
    text-overflow: ellipsis;

}
.list-ticket-qunarprice{
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    width: 1.2rem;
    height: .9rem;
    color: #ff8300;
    font-size: .2rem;
    line-height: 1.45rem;
    text-align: right;
}
.list-ticket-qunarprice em{
    font-size: .36rem;
}
</style>

