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
            context.commit("changeSwiperInfo", data);
          }
        })
    }
  },
  mutations: {
    changeSwiperInfo(state, data) {
      state.swiperInfo = data.swiperInfo;
      state.iconSwiperInfo = data.iconSwiperInfo;
      state.hotPlaceInfo = data.hotPlaceInfo;
      state.weekendPlaceInfo = data.weekendPlaceInfo
    }
  },
  getters: {}
})
