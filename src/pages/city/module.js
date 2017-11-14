import axios from "axios"
export default {
  state: {
    DompositionCity: [],
    DomhotCity: [],
    Domcities: [],
    ForpositionCity: [],
    ForhotCity: [],
    Forcities: [],
    changeshow: "",
    currentCity: "北京",
  },
  actions: {
    getCityData: function (context) {
      axios.get("/static/city.json")
        .then((res) => {
          if (res.status === 200) {
            const {
              data
            } = res.data;
            context.commit("changeinternalCity", data);
          }
        })
    },
  },
  mutations: {
    changeinternalCity(state, data) {
      state.DompositionCity = data.domestic.positionCity;
      state.DomhotCity = data.domestic.hotCity;
      state.Domcities = data.domestic.cities;
      state.ForpositionCity = data.foreign.positionCity;
      state.ForhotCity = data.foreign.hotCity;
      state.Forcities = data.foreign.cities;

    },
    changeShow(state, data) {
      state.changeshow = data;
    },
    currentCity(state, data) {
      state.currentCity = data;
    }
  },
  getters: {
    getDataSucc(state) {
      if (!state.DompositionCity.length &&
        !state.DomhotCity.length &&
        !state.Domcities.length &&
        !state.ForpositionCity.length &&
        !state.ForhotCity.length &&
        !state.Forcities.length) {
        return true;
      } else {
        return false;
      }
    }
  }
}
