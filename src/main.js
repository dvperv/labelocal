import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

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

// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";

// Import the plugin here
import { Auth0Plugin } from "./auth";

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    VueRouter.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
  }
});

Vue.config.productionTip = false

new Vue({
  VueRouter,
  store,
  render: h => h(App),
}).$mount('#app')
