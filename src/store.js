import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packages: []
  },
  getters:{
    getPackages: function (state) {
      return state.packages
  },
  },
  mutations: {
    setPackage: function (state,data) {
      state.packages.push(data)
    },
    setPackages: function (state,data) {
      state.packages = data
    },
  },
  actions: {
    handleSubmit(store, form) {
      axios.post("http://localhost:8080/packages", form).then(function (response) {
        store.commit('setPackage',response.data)
      });
    },
    queryPackages(store){
      axios.get("http://localhost:8080/packages").then(function(response) {
        store.commit('setPackages',response.data)
      });
    },
    reserveSubmit(store,form){
      alert(form.id)
      axios.put("http://localhost:8080/packages/"+ form.id , form)
    }
  }
})
