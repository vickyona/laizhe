<template>
  <div id="navBoard">
      <div v-for="item in imgs" :key="item.name"><img :src="item.path" alt=""><p>{{item.name}}</p></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [
        {
          path: require("../../assets/nav/nav1.png"),
          name: "景点门票"
        },
        {
          path: require("../../assets/nav/nav2.png"),
          name: "动植物园"
        },
        {
          path: require("../../assets/nav/nav3.png"),
          name: "故宫"
        },
        {
          path: require("../../assets/nav/nav4.png"),
          name: "一日游"
        },
        {
          path: require("../../assets/nav/nav5.png"),
          name: "必游榜单"
        },
        {
          path: require("../../assets/nav/nav6.png"),
          name: "秋色美"
        },
        {
          path: require("../../assets/nav/nav7.png"),
          name: "游乐场"
        },
        {
          path: require("../../assets/nav/nav8.png"),
          name: "泡温泉"
        }
      ]
    };
  }
};
</script>
<style>
#navBoard {
  height: 3.8rem;
  padding-top: 0.1rem;
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;
}
#navBoard > div {
  width: 25%;
  padding-top: 0.3rem;
  text-align: center;
}
#navBoard > div > p {
  margin-top: 0.2rem;
  font-size: 0.28rem;
}
#navBoard > div > img {
  width: 0.66rem;
}
</style>