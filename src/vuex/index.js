import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    swiperInfo: []
  },
  actions: {
    getSwiperInfo(context) {
      axios.get('/static/index.json')
        .then((response) => {
          if (response.status === 200) {
            const {
              data
            } = response.data;
            context.commit("changeSwiperInfo", data.swiperInfo)
          }
        })
    }
  },
  mutations: {
    changeSwiperInfo(state, data) {
      state.swiperInfo = data
    }
  },
  getters: {}
})
