import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    swiperInfo: [],
    iconSwiperInfo: [],
    hotPlaceInfo: [],
    weekendPlaceInfo: []
  },
  actions: {
    getIndexInfo(context) {
      axios.get('/static/index.json')
        .then((response) => {
          if (response.status === 200) {
            const {
              data
            } = response.data;
            context.commit("changeSwiperInfo", data.swiperInfo);
            context.commit("changeIconSwiperInfo", data.iconSwiperInfo);
            context.commit("changeHotPlaceInfo", data.hotPlaceInfo);
            context.commit("changeWeekendPlaceInfo", data.weekendPlaceInfo);
          }
        })
    }
  },
  mutations: {
    changeSwiperInfo(state, data) {
      state.swiperInfo = data
    },
    changeIconSwiperInfo(state, data) {
      state.iconSwiperInfo = data
    },
    changeHotPlaceInfo(state, data) {
      state.hotPlaceInfo = data
    },
    changeWeekendPlaceInfo(state, data) {
      state.weekendPlaceInfo = data
    },
  },
  getters: {}
})
