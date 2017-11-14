import axios from 'axios'

export default {
  state: {
    swiperInfo: [],
    iconSwiperInfo: [],
    hotPlaceInfo: [],
    weekendPlaceInfo: [],
    visitedIndex: true
  },
  actions: {
    getIndexInfo(context) {
      axios.get('/static/index.json')
        .then((response) => {
          if (response.status === 200) {
            const {
              data
            } = response.data;
            context.commit("changeIndexInfo", data);
          }
        })
    }
  },
  mutations: {
    changeIndexInfo(state, data) {
      state.swiperInfo = data.swiperInfo;
      state.iconSwiperInfo = data.iconSwiperInfo;
      state.hotPlaceInfo = data.hotPlaceInfo;
      state.weekendPlaceInfo = data.weekendPlaceInfo
    }
  },
  getters: {
    shouldGetHomeData(state) {
      if (!state.swiperInfo.length &&
        !state.iconSwiperInfo.length &&
        !state.hotPlaceInfo.length &&
        !state.weekendPlaceInfo.length) {
        return true;
      } else {
        return false;
      }
    }
  }
}
