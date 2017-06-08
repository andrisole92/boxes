// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import vmodal from 'vue-js-modal'
import VueEvents from 'vue-events'

Vue.config.productionTip = false
Vue.use(vmodal)
Vue.use(VueEvents)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
