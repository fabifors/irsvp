/* 
===============================
==== VueX module for User =====
===============================
*/

const state = {
  user: null
}

const mutations = {
  SET_USER = (state, payload) => {
    state.user = payload
  }
}

const actions = {
  startListeningToUser () {
    
  }
}

const getters = {

}

export default {
  namespaced: true,
  state, 
  mutations,
  actions,
  getters
}