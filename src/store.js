import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registerData: []
  },
  mutations: {
    SET_DATA (state, data) {
      state.registerData = data
    }
  },
  actions: {
    setData ({commit}, data) {
      commit('SET_DATA', data)
    }
  }
})
