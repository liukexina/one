import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      data:-1
  },
  mutations: {
      Song(state,id){
        state.data = id;
      },
      onSwipeLeft(state,length){
          if(state.data == length - 1){
              state.data = length - 1;
          }
          else{
              state.data++;
          }
      },
      onSwipeRight(state){

          if(state.data == 0){
              state.data = 0
          }
          else{
              state.data--;
          }
      },
      onSwipe(){
          console.log(1)
      }
  },
  actions: {

  }
})
