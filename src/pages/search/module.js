import axios from 'axios'

export default {
    state: {
        hotSearchInfo: [],
        hotSearchCityInfo: []
    },
    actions: {
        getSearchInfo(context) {
          axios.get('/static/search.json')
            .then((response) => {
              if (response.status === 200) {
                const {data} = response.data;
                context.commit("changeSearchInfo", data);
              }
            })
        }
    },
    mutations: {
        changeSearchInfo(state, data) {
            state.hotSearchInfo = data.hotSearchInfo;
            state.hotSearchCityInfo = data.hotSearchCityInfo;       }
    },
    getters: {
        shouldGetSearchData(state){
            if(!state.hotSearchInfo.length && 
                !state.hotSearchCityInfo.length){
                return true;
            }else {
                return false;
            }
        }
    }
}