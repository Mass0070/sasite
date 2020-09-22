import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VTooltip from 'v-tooltip'
const vuetify = () => import(/* webpackChunkName: "group-Icons" */ `./plugins/vuetify`)

Vue.config.productionTip = false
Vue.use(VTooltip)

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
