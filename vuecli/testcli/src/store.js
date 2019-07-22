import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
    add(state,num){
      state.count += num;
    },
    reduce(state) {
        state.count--;
    }
  },
  getters:{
    count: function (state) {
        return state.count += 100;
    }
  },
  actions: {
      actionAdd({commit}) {
          setTimeout(() => {
              commit("add", 50);
          }, 1000)
      }
  }
})
