import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
//import socket from 'socket.io-client'
//import VueSocketIO from 'vue-socket.io';

Vue.config.productionTip = false;

/*const SocketInstance = socket.connect('95.217.176.159:3000/users', {
  query: {
    authorization: "none"
  }
})
Vue.use(new VueSocketIO({
    debug: true,
    connection: SocketInstance
})) */

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
