// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/theme/default.css'
import store from './store/store'
import axios from 'axios'
// import VueAdsense from 'vue-adsense'

Vue.use(VueMaterial)

Vue.config.productionTip = false
Vue.prototype.$http = axios

// Vue.component('adsense', VueAdsense)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
