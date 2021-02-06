import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Vuex from 'vuex'

import App from './App.vue'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    pathHigh: '/home/dmitriy/transients/transients2016-high',
    pathLow: '/home/dmitriy/transients/transients2016-low'
  },
  mutations: {
    changePathHigh (state, ph) {
      state.pathHigh = ph;
    },
    changePathLow (state, pl) {
      state.pathLow = pl;
    }
  }
})

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
