import Vuex from "vuex"
import Vue from "vue"
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        lists:[],
        categories:[]
    },
    actions:{
        getlists(context){
            axios.get('/static/beijing.json')
            .then((response)=>{
                if(response.status ==200){
                    const {data} =response.data;
                    //commit方法是用来调用mutitions
                    context.commit("changelists",data.lists)
                }
            })
        }
    },
    mutations:{
        changelists(state,data) {
            state.lists=data
        },
        lists(state,data){

            state.lists.push(...state.lists)
        }
    },
    getters:{}
})
